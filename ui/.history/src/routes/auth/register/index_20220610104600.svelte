<script lang="ts">
    import {splitOnFirst, toPascalCase} from '@servicestack/client';
    // import CheckBox from '$elements/CheckBox.svelte';
    import ErrorSummary from '$elements/ErrorSummary.svelte';
    import {client, redirect, checkAuth} from '$shared';
    import login from '$root/routes/auth/login/index.svelte'
    import register from '$root/routes/auth/register/index.svelte'
    import {Register} from '$shared/dtos';
    import classNames from "classnames";
    import Input from "$elements/Input.svelte";
    import ButtonSpinner from "$elements/ButtonSpinner.svelte";
    import TextInput from "$elements/TextInput.svelte";
    import ButtonGlow from "$elements/ButtonGlow.svelte";
    import {replace} from "svelte-preprocess";

    let loading = false;
    let responseStatus = null;

    let displayName = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let autoLogin = true;
    $: cls = classNames({error: responseStatus, loading});

    const newUser = (newEmail) => {
        const names = newEmail.split('@');
        displayName = toPascalCase(names[0]) + " " + toPascalCase(splitOnFirst(names[1], '.')[0]);
        email = newEmail;
        password = confirmPassword = 'p@55wOrd';
    }

    const submit = async () => {
        try {
            loading = true;
            responseStatus = null;

            const response = await client.post(new Register({
                displayName,
                email,
                password,
                confirmPassword,
                autoLogin,
            }));

            if (!response)
                throw new Error();

            await checkAuth();
            loading = false;
            redirect('/home');

        } catch (e) {
            responseStatus = e.responseStatus || e;
            loading = false;
        }
    };

</script>

<div class="bg-opacity-20 relative z-10 h-auto p-8 py-10 overflow-hidden border-gray-300 shadow-2xl px-7 Login rounded-lg">
    <h3 class="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
    <TextInput placeholder="Email" className="mb-5 input-bordered input-accent" type="email" name="email" value={email}
               required/>
    <TextInput placeholder="Full Name" className="mb-5 input-bordered input-accent" type="displayName"
               name="displayName"
               value={displayName}
               required/>
    <TextInput placeholder="Password" className="mb-5 input-bordered input-accent" type="password" name="password"
               value={password}
               required/>
    <input class="input-bordered input-accent" type="checkbox"
           name="rememberMe"
           bind:value={autoLogin} required/>
    <ButtonGlow type="checkbox" checked="checked" class="checkbox" loading="false"/>
    <p class="w-full mt-4 text-sm text-center text-gray-500">Have an account?
        <a href="/auth/login" class="text-blue-500 underline">Sign in here
        </a>
    </p>
</div>
<!--<div class="row">-->
<!--    <div class="col-4">-->
<!--        <h3>Register New User</h3>-->
<!--        <form ref="form" on:submit|preventDefault={submit} class={cls}>-->
<!--            <div class="mb-3">-->
<!--                <ErrorSummary except="displayName,email,password,confirmPassword" responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input name="displayName" bind:value={displayName} placeholder="Display Name"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input name="email" bind:value={email} placeholder="Email" responseStatus={responseStatus}/>-->
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
