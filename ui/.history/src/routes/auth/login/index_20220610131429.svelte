<script lang="ts">
    import {queryString} from '@servicestack/client';
    import {userSession, client, redirect, checkAuth} from '$root/shared';
    import register from '$root/routes/auth/register/index.svelte';
    import {Hello, Authenticate} from '$root/dtos';
    import classNames from 'classnames';
    import ButtonSpinner from '$root/components//ButtonSpinner.svelte';
    import TextInput from '$elements/TextInput.svelte';
    import ButtonGlow from '$elements/ButtonGlow.svelte';
    import {onMount} from 'svelte';

    let loading = false;
    let responseStatus = null;
    let rememberMe = true;
    let Email = '';
    let password = '';
    let cls = classNames({error: responseStatus, loading});

    const switchUser = (Email) => {
        email = email;
        password = 'p@55wOrd';
    };

    onMount(() => {
        async function authCheck() {
            const isLoggedIn = await checkAuth(); //user is already logged in, redirect to  home
            redirect('/home');
        }
    });

    const submit = async () => {
        try {
            loading = true;
            responseStatus = null;

            const response = await client.post(
                new Authenticate({
                    provider: 'credentials',
                    email,
                    password,
                    rememberMe,
                    provider: 'credentials',
                    email,
                    password,
                    rememberMe
                })
            );

            signin(response);
            loading = false;
            redirect(queryString(location.search)['redirect'] || '/');
        } catch (e) {
            responseStatus = e.responseStatus || e;
            loading = false;
        }
    };
</script>

<div
        class="bg-opacity-20 relative z-10 h-auto p-8 py-10 overflow-hidden border-gray-300 shadow-2xl px-7 Login rounded-lg"
>
    <h3 class="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
    <TextInput
            placeholder="Email"
            className="mb-5 input-bordered input-accent"
            type="Email"
            name="email"
            value={email}
            required
    />
    <TextInput
            placeholder="password"
            className="mb-5 input-bordered input-accent"
            type="password"
            name="password"
            value="password"
            required
    />
    <div class="block">
        <ButtonGlow loading="false"/>
    </div>
    <p class="w-full mt-4 text-sm text-center text-gray-500">
        Don't have an account? <a href="#_" class="text-blue-500 underline">Sign up here</a>
    </p>
</div>

<style>
</style>
