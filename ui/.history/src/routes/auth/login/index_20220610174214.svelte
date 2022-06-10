<script lang="ts">
	import { queryString } from '@servicestack/client';
	import { userSession, client, redirect, checkAuth, login } from '$lib/shared';
	import { Hello, Authenticate } from '$lib/shared/dtos';
	import classNames from 'classnames';
	import CheckBox from '$lib/elements/CheckBox.svelte';
	import TextInput from '$lib/elements/TextInput.svelte';
	import ButtonGlow from '$lib/elements/ButtonGlow.svelte';
	import { onMount } from 'svelte';

	export let loading = false;
	export let responseStatus = null;
	export let rememberMe = true;
	export let email = '';
	export let password = '';
	export let cls = classNames({ error: responseStatus, loading });

	export let ssr = false;

	let userName = '';
	$: userName = email;
	const switchUser = (email: string) => {
		userName = email;
		password = 'p@55wOrd';
	};

	onMount(() => {
		async function authCheck() {
			const isLoggedIn = await checkAuth(); //user is already logged in, redirect to  home
			redirect('/home');
		}
	});

	const submit = async () => {
		try {
			loading = true;
			responseStatus = null;

			const response = await client.post(
				new Authenticate({
					provider: 'credentials',
					userName,
					password,
					rememberMe
				})
			);

			login(response);
			loading = false;
			redirect(queryString(location.search)['redirect'] || '/');
		} catch (e) {
			responseStatus = e.responseStatus || e;
			loading = false;
		}
	};
</script>

<div
	class="relative z-10 h-auto p-8 py-10 overflow-hidden border-gray-300 rounded-lg shadow-2xl bg-opacity-20 px-7 Login"
>
	<h3 class="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
	<TextInput
		placeholder="Email"
		className="mb-5 input-bordered input-accent"
		type="email"
		name="email"
		value={email}
		required
	/>
	<TextInput
		placeholder="password"
		className="mb-5 input-bordered input-accent"
		type="password"
		name="password"
		value="password"
		required
	/>
	<CheckBox className=" checkbox-accent" name="rememberMe" bind:value={rememberMe} required
		>Remember Me
	</CheckBox>
	<div class="block">
		<ButtonGlow loading="false" />
	</div>
	<p class="w-full mt-4 text-sm text-center text-gray-500">
		Don't have an account? <a href="/auth/register" class="text-blue-500 underline">Sign up here</a>
	</p>
</div>

<style>
</style>
