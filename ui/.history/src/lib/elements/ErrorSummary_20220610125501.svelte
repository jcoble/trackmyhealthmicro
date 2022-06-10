<script lang="ts">
	import { errorResponse, errorResponseExcept } from '@servicestack/client';

	export let except = '';
	export let responseStatus: boolean | null | undefined = null;

	$: errorField = errorResponseExcept.call({ responseStatus }, except);
</script>

{#if errorField}
	<div class="alert alert-danger mt-2">{errorField}</div>
{/if}
