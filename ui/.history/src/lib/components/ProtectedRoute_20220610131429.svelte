<script>
	import { goto } from '$app/navigation';
	import { checkAuth, redirect } from '$root/shared';
	import { onMount } from 'svelte';

	export let isLoading = true;
	onMount(async () => {
	  const isAuthenticated = await checkAuth();
	  if (isAuthenticated) {
	    isLoading = false;
	  } else }
        goto('/login');
        isLoading = false;
	  }
	});
</script>

{#if isLoading}
	<p>Loading</p>
{:else}
	<slot />
{/if}
