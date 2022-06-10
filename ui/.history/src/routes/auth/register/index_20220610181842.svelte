<script lang="ts">
	import { splitOnFirst, toPascalCase } from '@servicestack/client';
	import CheckBox from '$lib/elements/CheckBox.svelte';
	import ErrorSummary from '$lib/elements/ErrorSummary.svelte';
	import { client, redirect, checkAuth } from '$lib/shared';
	import { Register } from '$lib/shared/dtos';
	import classNames from 'classnames';
	import Input from '$lib/elements/Input.svelte';
	import ButtonSpinner from '$lib/elements/ButtonSpinner.svelte';
	import TextInput from '$lib/elements/TextInput.svelte';
	import ButtonGlow from '$lib/elements/ButtonGlow.svelte';
	import { ResponseStatus } from '$lib/shared/dtos';
	import { delay } from '$lib/utils/utilityFunctions';

	export let loading = false;
	export let responseStatus: ResponseStatus | null = null;

	export let displayName = '';
	export let email = '';
	export let password = '';
	export let confirmPassword = '';
	export let autoLogin = true;
	let isLoading: boolean;

	$: cls = classNames({ error: responseStatus, loading });
	$: isLoading;

	const newUser = (newEmail) => {
		const names = newEmail.split('@');
		displayName = toPascalCase(names[0]) + ' ' + toPascalCase(splitOnFirst(names[1], '.')[0]);
		email = newEmail;
		password = confirmPassword = 'p@55wOrd';
	};

	const submit = async () => {
		try {
			loading = true;
			responseStatus = null;
			await delay(2000);
			const response = await client.post(
				new Register({
					displayName,
					email,
					password,
					confirmPassword,
					autoLogin
				})
			);
			loading = false;
			if (!response) throw new Error();

			await checkAuth();
			loading = false;
			redirect('/home');
		} catch (e) {
			responseStatus = e.responseStatus || e;
			loading = false;
		}
	};
</script>

<div
	class="relative z-10 h-auto p-8 py-10 overflow-hidden border-gray-300 rounded-lg shadow-2xl bg-opacity-20 px-7 Login"
>
	<h3 class="mb-6 text-2xl font-medium text-center">Sign up your Account</h3>
	<TextInput
		placeholder="Email"
		className="mb-5 input-bordered input-accent"
		type="email"
		name="email"
		value={email}
		required
	/>
	<TextInput
		placeholder="Full Name"
		className="mb-5 input-bordered input-accent"
		type="displayName"
		name="displayName"
		value={displayName}
		required
	/>
	<TextInput
		placeholder="Password"
		className="mb-5 input-bordered input-accent"
		type="password"
		name="password"
		value={password}
		required
	/>
	<CheckBox className="checkbox-accent" name="rememberMe" bind:value={autoLogin} required
		>Remember Me</CheckBox
	>
	<div class="block mt-4 ">
		<ButtonGlow
			on:click={submit}
			type="submit"
			checked="checked"
			class="btn loading"
			loading={isLoading}
		/>
	</div>
	<p class="w-full mt-4 text-sm text-center text-gray-500">
		Have an account?
		<a href="/auth/login" class="text-blue-500 underline">Sign in here </a>
	</p>
</div>
<!--<div class="row">-->
<!--    <div class="col-4">-->
<!--        <h3>Register New User</h3>-->
<!--        <form ref="form" on:submit|preventDefault={submit} class={cls}>-->
<!--            <div class="mb-3">-->
<!--                <ErrorSummary except="displayName,email,password,confirmPassword" responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input name="displayName" bind:value={displayName} placeholder="Display Name"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input name="email" bind:value={email} placeholder="Email" responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input type="password" name="password" bind:value={password} placeholder="Password"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input type="password" name="confirmPassword" bind:value={confirmPassword} placeholder="Password"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <CheckBox id="autoLogin" name="autoLogin" bind:checked={autoLogin} responseStatus={responseStatus}>-->
<!--                    Auto Login-->
<!--                </CheckBox>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <ButtonSpinner loading={loading} class="btn btn-lg btn-primary" type="submit">Register</ButtonSpinner>-->
<!--            </div>-->
<!--            <div class="pt-3">-->
<!--                <b>Quick Populate:</b>-->
<!--                <p class="pt-1">-->
<!--                    <button class="btn btn-outline-info btn-sm" on:click|preventDefault={e => newUser('new@user.com')}>-->
<!--                        new@user.com-->
<!--                    </button>-->
<!--                </p>-->
<!--            </div>-->
<!--        </form>-->
<!--    </div>-->
<!--</div>-->
