<script type="ts">
    import {goto} from '$app/navigation';
    // import Input from '$lib/elements/input.svelte';
    // import { parseError, includesAnyFieldNames } from '$lib/utility/utilityFunctions';
    // import type { ErrorResponse } from '$lib/utility/types';

    let errorField = '';
    let name = '';
    let email = '';
    let password = '';

    function prefill() {
        email = 'coble.jesse@gmail.com';
        name = 'Jesse';
        password = '111111Jc!';
    }

    async function submit() {
        try {
            errorField = '';
            // const { error } = await new register() auth({
            // 	email,
            // 	password,
            // 	options: {
            // 		displayName: name
            // 	}
            // });
            //
            // if (error) {
            // 	displayError(error);
            // 	return;
            // }

            // goto('/profile');
        } catch (e) {
            // displayError(e);
        }
    }

    <!--function displayError(e: any): void {-->
    <!--	let err: ErrorResponse = parseError(e);-->
    <!--	if (err.shouldDisplayAsFormError) {-->
    <!--		errorField = err.message;-->
    <!--	} else if (err) {-->
    <!--		console.log(err);-->
    <!--		alert(err.message);-->
    <!--	}-->
    // }
</script>

<!--{#if errorField && includesAnyFieldNames(['email', 'name', 'password'], errorField)}-->
<!--	<p class="text-red-400 py-2">{errorField}</p>-->
<!--{/if}-->
<!--<form class="space-y-2" on:submit|preventDefault={submit}>-->
<!--	<Input required label="Name" type="text" bind:value={name} name="name" {errorField} />-->
<!--	<Input required label="Email" type="email" bind:value={email} name="email" {errorField} />-->
<!--	<Input-->
<!--		required-->
<!--		label="Password"-->
<!--		type="password"-->
<!--		bind:value={password}-->
<!--		name="password"-->
<!--		{errorField}-->
<!--	/>-->
<!--	<div class="pt-2">-->
<!--		<button class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm" type="submit"-->
<!--			>Register-->
<!--		</button>-->
<!--		<button-->
<!--			class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm"-->
<!--			type="button"-->
<!--			on:click={prefill}-->
<!--			>Prefill(testing)-->
<!--		</button>-->
<!--	</div>-->
<!--</form>-->
