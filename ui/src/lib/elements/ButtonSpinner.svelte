<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import classNames from 'classnames';

    export let loading = false;
    export let type = 'button';
    export let height = "24px";
    export let width = "24px";


    const dispatch = createEventDispatcher();
    const handleClick = e => {
        dispatch('click', e.target.click);
    }
</script>

<button on:click={handleClick} type={type} class="btn {{classNames}}">
    <svg class:animate-spin={loading} width={width} height={height} viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="black"/>
        <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="black"/>
    </svg>
    {#if loading}
        loading...
    {:else}
        <slot/>
    {/if}
</button>