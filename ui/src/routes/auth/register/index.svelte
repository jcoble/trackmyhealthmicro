<script lang="ts">
    import CheckBox from '$lib/elements/CheckBox.svelte';
    import ErrorSummary from '$lib/elements/ErrorSummary.svelte';
    import {client, redirect, checkAuth} from '$lib/shared';
    import {Register} from '$lib/shared/dtos';
    import classNames from 'classnames';
    import TextInput from '$lib/elements/TextInput.svelte';
    import ButtonGlow from '$lib/elements/ButtonGlow.svelte';
    import {ResponseStatus} from '$lib/shared/dtos';
    import {onMount} from "svelte";

    // export let loading = false;
    export let responseStatus: ResponseStatus | null = null;
    export let displayName = '';
    export let email = '';
    export let password = '';
    export let confirmPassword = '';
    export let autoLogin = true;
    export let isLoading: boolean = false;

    $: cls = classNames({error: responseStatus, isLoading});
    $: isLoading;

    onMount(() => {
        async function authCheck() {
            const isLoggedIn = await checkAuth(); //user is already logged in, redirect to  home
            if (isLoggedIn) {
                await redirect('/home');
            }
        }

        authCheck();
    });

    const newUser = () => {
        displayName = 'Jesse Coble';
        email = "jc@gmail.com";
        password = confirmPassword = '111111Jc';
        autoLogin = true;
    };

    const submit = async () => {
        try {
            isLoading = true;
            responseStatus = null;

            const response = await client.post(
                new Register({
                    displayName,
                    email: email,
                    password,
                    confirmPassword,
                    autoLogin
                })
            );
            await checkAuth();
            isLoading = false;
            await redirect('/home');
        } catch (e) {
            console.log(e)
            isLoading = false;
            responseStatus = e.responseStatus || e;
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
    <title>Register Form</title>
    <meta name='robots' content='noindex, nofollow'/>
</svelte:head>

<form rel="form" on:submit|preventDefault={submit} class={cls}>
    <div
            class="relative z-10 h-auto p-8 py-10 overflow-hidden border-gray-300 rounded-lg shadow-2xl  px-7 "
    >
        <h3 class="mb-6 text-2xl  text-center">Sign up for your Account</h3>
        <div class="mb-3">
            <ErrorSummary
                    except="displayName,
                    email,
                    password,
                    confirmPassword"
                    {responseStatus}
                    className="bg-transparent text-error-content text-error"
                    required=true
            />
        </div>
        <TextInput
                placeholder="Email"
                className="mb-5 input-bordered input-accent "
                type="email"
                name="Email"
                bind:value={email}
                {responseStatus}
                required=true
        />
        <TextInput
                placeholder="Full Name"
                className="mb-5 input-bordered input-accent"
                type="text"
                name="DisplayName"
                bind:value={displayName}
                {responseStatus}
                required=true
        />
        <TextInput
                placeholder="Password"
                className="mb-5 input-bordered input-accent"
                type="password"
                name="Password"
                bind:value={password}
                {responseStatus}
                required=true
        />
        <TextInput
                placeholder="Confirm Password"
                className="mb-5 input-bordered input-accent"
                type="password"
                name="ConfirmPassword"
                bind:value={confirmPassword}
                {responseStatus}
                required=true
        />
        <CheckBox className="checkbox-accent" name="RememberMe" bind:value={autoLogin}
        >Remember Me
        </CheckBox
        >
        <div class="block mt-4 ">
            <ButtonGlow
                    on:click={submit}
                    type="submit"
                    class="btn loading"
                    loading={isLoading}
            />
        </div>
        <p class="w-full mt-4 text-sm text-center text-gray-500">
            Have an account?
            <a href="/auth/login" class="text-blue-500 underline">Sign in here </a>
        </p>
        <button class="btn btn-outline-info btn-sm" on:click|preventDefault={e => newUser()}>
            Test
        </button>
    </div>
</form>
<!--<div class="row">-->
<!--    <div class="col-4">-->
<!--        <h3>Register New User</h3>-->
<!--        <form ref="form" on:submit|preventDefault={submit} class={cls}>-->
<!--            <div class="mb-3">-->
<!--                <ErrorSummary except="displayName,Email,password,confirmPassword" responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input name="displayName" bind:value={displayName} placeholder="Display Name"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input name="Email" bind:value={Email} placeholder="Email" responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input type="password" name="password" bind:value={password} placeholder="Password"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input type="password" name="confirmPassword" bind:value={confirmPassword} placeholder="Password"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <CheckBox id="autoLogin" name="autoLogin" bind:checked={autoLogin} responseStatus={responseStatus}>-->
<!--                    Auto Login-->
<!--                </CheckBox>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <ButtonSpinner loading={loading} class="btn btn-lg btn-primary" type="submit">Register</ButtonSpinner>-->
<!--            </div>-->
<!--            <div class="pt-3">-->
<!--                <b>Quick Populate:</b>-->
<!--                <p class="pt-1">-->
<!--                    <button class="btn btn-outline-info btn-sm" on:click|preventDefault={e => newUser('new@user.com')}>-->
<!--                        new@user.com-->
<!--                    </button>-->
<!--                </p>-->
<!--            </div>-->
<!--        </form>-->
<!--    </div>-->
<!--</div>-->
