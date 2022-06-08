<script lang="ts">
    import {queryString} from '@servicestack/client';
    import Input from '$elements/Input.svelte';
    import CheckBox from '$elements/CheckBox.svelte';
    import ErrorSummary from '$elements/ErrorSummary.svelte';
    import {userSession, client, redirect} from '$shared';
    import signin from '$forms/SignIn.svelte'
    import signup from '$forms/SignUp.svelte'
    import {Hello, Authenticate} from '$shared/dtos';
    import classNames from "classnames";

    let loading = false;
    let responseStatus = null;
    let rememberMe = true;
    let userName = '';
    let password = '';
    let cls = classNames({error: responseStatus, loading});

    const switchUser = (email) => {
        userName = email;
        password = 'p@55wOrd';
    };

    const submit = async () => {
        try {
            loading = true;
            responseStatus = null;

            const response = await client.post(new Authenticate({
                provider: 'credentials', userName, password, rememberMe,
            }));

            signin(response);
            loading = false;
            redirect(queryString(location.search)['redirect'] || '/');

        } catch (e) {
            responseStatus = e.responseStatus || e;
            loading = false;
        }
    }
</script>


<div class="login-box">
    <h2>Login</h2>
    <form>
        <div class="user-box">
            <input id="userName" type="text" bind:value={userName} required>
            <label for="userName">Username</label>
        </div>
        <div class="user-box">
            <input id="password" type="password" bind:value={password} required>
            <label>Password</label>
        </div>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
        </a>
    </form>
</div>

<!--<div class="row">-->
<!--    <div class="col-5">-->
<!--        <h3>Sign In</h3>-->

<!--        <form rel="form" on:submit|preventDefault={submit} class="{cls}">-->
<!--            <div class="mb-3">-->
<!--                <ErrorSummary except="userName,password" responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input name="userName" bind:value={userName} placeholder="Username" responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <Input type="password" name="password" bind:value={password} placeholder="Password"-->
<!--                       responseStatus={responseStatus}/>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <CheckBox name="rememberMe" bind:checked={rememberMe} responseStatus={responseStatus}>-->
<!--                    Remember Me-->
<!--                </CheckBox>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--                <button type="submit" class="btn btn-lg btn-primary">Login</button>-->
<!--                <a href="/signup" class="ms-2 btn btn-outline-secondary btn-lg">Register New User</a>-->
<!--            </div>-->
<!--        </form>-->

<!--        <div class="pt-3">-->
<!--            <h5>Quick Login:</h5>-->
<!--            <p class="btn-group">-->
<!--                <button class="btn btn-outline-info btn-sm" on:click={e => switchUser('admin@email.com')}>-->
<!--                    admin@email.com-->
<!--                </button>-->
<!--                <button class="btn btn-outline-info btn-sm" on:click={e => switchUser('new@user.com')}>new@user.com-->
<!--                </button>-->
<!--            </p>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
