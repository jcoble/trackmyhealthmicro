<script lang="ts">
    import {errorResponse, errorResponseExcept} from '@servicestack/client';

    export let except = '';
    export let className = '';
    export let responseStatus: string[] | null | undefined = null;

    $: errorField = errorResponseExcept.call({responseStatus}, except);
</script>

{#if errorField}
    <div class="{{className}} bg-white text-error-content alert alert-danger mt-2">{errorField}</div>
{/if}
