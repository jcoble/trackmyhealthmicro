<script lang="ts">

    import {client, redirect, login, checkAuth} from '$lib/shared';
    import {Authenticate, ResponseStatus} from '$lib/shared/dtos';
    import classNames from 'classnames';
    import CheckBox from '$lib/elements/CheckBox.svelte';
    import TextInput from '$lib/elements/TextInput.svelte';
    import ButtonGlow from '$lib/elements/ButtonGlow.svelte';
    import ErrorSummary from "$lib/elements/ErrorSummary.svelte";
    import {onMount} from "svelte";

    let isLoading: boolean = false;
    export let responseStatus: ResponseStatus | null = null;
    export let rememberMe = true;
    export let userName = '';
    export let password = '';

    export let cls = classNames({error: responseStatus, isLoading});

    $: cls = classNames({error: responseStatus, isLoading});
    $: isLoading;

    const switchUser = () => {
        userName = 'jc@gmail.com';
        password = '111111Jc';
    };

    onMount(() => {
        async function authCheck() {
            const isLoggedIn = await checkAuth(); //user is already logged in, redirect to  home
            if (isLoggedIn) {
                await redirect('/home');
            }
        }

        authCheck();
    });

    const submit = async () => {
        try {
            isLoading = true;
            responseStatus = null;
            // await delay(2000);
            const response = await client.post(
                new Authenticate({
                    provider: 'credentials',
                    userName,
                    password,
                    rememberMe
                })
            );

            await login(response);
            isLoading = false;
            await redirect('/home');
            // await redirect(queryString(location.search)['redirect'] || '/');
        } catch (e) {
            responseStatus = e.responseStatus || e;
            isLoading = false;
        }
    };

    function handleKeyDown(e) {
        if (e.keyCode === 13) {
            submit();
        }
        return null
    }
</script>


<svelte:window on:keydown={handleKeyDown}/>

<svelte:head>
    <title>Login Form</title>
    <meta name='robots' content='noindex, nofollow'/>
</svelte:head>
<form rel="form" on:submit|preventDefault={submit} class={cls}>
    <div
            class="relative z-10 h-auto p-8 py-10 overflow-hidden border-gray-300 rounded-lg shadow-2xl bg-opacity-20 px-7 Login"
    >
        <h3 class="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
        <div class="mb-3">
            <ErrorSummary
                    except="UserName,Password"
                    responseStatus={responseStatus}
                    className=" bg-transparent text-error-content text-error"
            />
        </div>
        <TextInput
                placeholder="Email"
                className="mb-5 input-bordered input-accent"
                type="email"
                name="UserName"
                value={userName}
                required=true
        />
        <TextInput
                placeholder="password"
                className="mb-5 input-bordered input-accent"
                type="password"
                name="password"
                value="password"
                required=true
        />
        <CheckBox className="checkbox-accent" name="rememberMe" bind:value={rememberMe}
        >Remember Me
        </CheckBox>
        <div class="block mt-4 ">
            <ButtonGlow class="btn loading" type="submit" on:click={submit} loading={isLoading}/>
        </div>
        <p class="w-full mt-4 text-sm text-center text-gray-500">
            Don't have an account? <a href="/auth/register" class="text-blue-500 underline">Sign up here</a>
        </p>
        <button class="btn btn-outline-info btn-sm" on:click|preventDefault={e => switchUser()}>
            Test
        </button>
    </div>
</form>

