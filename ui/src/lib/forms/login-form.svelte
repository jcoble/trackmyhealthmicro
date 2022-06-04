<script type="ts">
	import { goto } from '$app/navigation';
	// import { auth } from '../../utils/nhost';
	import Input from '$lib/elements/input.svelte';
	import { parseError, includesAnyFieldNames } from '$lib/utility/utilityFunctions';
	import type { ErrorResponse } from '$lib/utility/types';

	let errorField;
	let email;
	let password;

	function prefill() {
		email = 'coble.jesse@gmail.com';
		password = '111111Jc!';
	}

	async function submit() {
		try {
			errorField = '';
			const { error } = await auth.signIn({
				email,
				password
			});

			if (error) {
				displayError(error);
				return;
			}

			goto('/profile');
		} catch (e) {
			displayError(e);
		}
	}

	<!--function displayError(e: any): void {-->
	<!--	let err: ErrorResponse = parseError(e);-->
	<!--	if (err.shoudDisplayAsFormError) {-->
	<!--		errorField = err.message;-->
	<!--	} else if (err) {-->
	<!--		console.log(err);-->
	<!--		alert(err.message);-->
	<!--	}-->
	// }
</script>

{#if errorField && includesAnyFieldNames(['email', 'password'], errorField)}
	<p class="text-red-400 py-2">{errorField}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input requied label="Email" name="email" type="email" bind:value={email} required />
	<Input requied label="Password" name="password" type="password" bind:value={password} required />
	<div class="pt-2">
		<button class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm" type="submit">
			Login
		</button>
		<button
			class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm"
			type="button"
			on:click={prefill}
			>Prefill(testing)
		</button>
	</div>
</form>
