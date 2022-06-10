<script lang="ts">
	import Input from '$lib/elements/Input.svelte';

	export let ticket = '';
	let error: string | null = null;
	let newPassword = '';

	function submit() {
		// <!--auth-->
		// <!--	.confirmPasswordChange(newPassword, ticket)-->
		// <!--	.then(() => {-->
		// <!--		console.log('You have reset the password');-->
		// <!--	})&ndash;&gt;-->
		// 	.catch((e) => {
		// 		error = e.response.data;
		// 	});
	}
</script>

<h1>Reset password</h1>
{#if error}
	<!-- <p class="text-red-400 py-2">{error.message}</p> -->
{/if}
<!--<form class="space-y-2" on:submit|preventDefault={submit}>-->
<!-- <Input label="New password" name="newPassword" type="password" bind:value={newPassword} /> -->
<!--  <button class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm" type="submit">-->
<!--    Reset password-->
<!--  </button>-->
<!--</form>-->
