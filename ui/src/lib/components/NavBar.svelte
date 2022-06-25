<script>
    import {page} from '$app/stores';
    import {createEventDispatcher} from "svelte";


    const dispatch = createEventDispatcher();
    const handleClick = e => {
        dispatch('click', e.target.click);
    }
</script>

<div class="navbar bg-base-100">
    <div class="flex-none">
        <button on:click={handleClick} class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="inline-block w-5 h-5 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
        <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="inline-block w-5 h-5 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
        </button>
    </div>
</div>

<!--<nav class="space-x-10 py-4 border-b text-gray-700">-->
<!--	<a class:underline={$page.url.href === '/'} class="hover:text-gray-900" href="/">Home</a>-->
<!--	<a class:underline={$page.url.href === '/profile'} class="hover:text-gray-900" href="/profile"-->
<!--		>Profile</a-->
<!--	>-->
<!--	<a class:underline={$page.url.href === '/register'} class="hover:text-gray-900" href="/signup"-->
<!--		>Register</a-->
<!--	>-->
<!--	<a class:underline={$page.url.href === '/login'} class="hover:text-gray-900" href="/signin"-->
<!--		>Login</a-->
<!--	>-->
<!--	<a-->
<!--		class:underline={$page.url.href === '/forget-password'}-->
<!--		class="hover:text-gray-900"-->
<!--		href="/forget-password">Forget password</a-->
<!--	>-->
<!--</nav>-->
