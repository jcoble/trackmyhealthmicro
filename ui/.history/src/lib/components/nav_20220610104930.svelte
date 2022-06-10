<script>
    import {page} from '$app/stores';
</script>

<nav class="space-x-10 py-4 border-b text-gray-700">
    <a
            class:underline={$page.url.href === '/'}
            class="hover:text-gray-900"
            href="/">Home</a
    >
    <a
            class:underline={$page.url.href === '/profile'}
            class="hover:text-gray-900"
            href="/profile">Profile</a
    >
    <a
            class:underline={$page.url.href === '/signup'}
            class="hover:text-gray-900"
            href="/signup">Register</a
    >
    <a
            class:underline={$page.url.href === '/signin'}
            class="hover:text-gray-900"
            href="/signin">Login</a
    >
    <a
            class:underline={$page.url.href === '/forget-password'}
            class="hover:text-gray-900"
            href="/forget-password">Forget password</a
    >
</nav>
