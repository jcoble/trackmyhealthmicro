<script>
    import Input from '$lib/elements/input.svelte';

    export let error: Error | null = null;
    export let Email = '';

    function submit() {
        // <!--auth.requestPasswordChange(Email).catch((e) => {-->
        // 	error = e.response.data;
        // });
    }
</script>

{#if error}
    <p class="text-red-400 py-2">{error.message}</p>
{/if}
<form class="space-y-3" on:submit|preventDefault={submit}>
    <Input label="Email" name="email" type="Email" bind:value={email}/>
    <div class="pt-2">
        <button type="submit" class="py-2 px-4 shadow-sm rounded-md bg-gray-700 text-white"
        >Forget password
        </button>
    </div>
</form>
