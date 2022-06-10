<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import {errorResponse, errorResponseExcept} from '@servicestack/client';
    import classNames from 'classnames';

    export let responseStatus = null;
    export let type = 'text';
    export let name = '';
    export let placeholder = '';
    export let value = '';
    export let className = '';
    export const model = '';

    $: errorField = errorResponse.call({responseStatus}, name);
    $: cls = classNames('form-control', {'is-invalid': errorField}, className || 'form-control-lg');

    const dispatch = createEventDispatcher();
    const handleInput = e => {
        value = e.target.value;
        dispatch('input', value);
    };
</script>

<div>
    <input class="{cls} input input-bordered border-primary-focus input-secondary w-full max-w-xs" {type} {name} {value}
           placeholder={placeholder}
           on:input={handleInput}/>
    {#if errorField}
        <div class="invalid-feedback">{errorField}</div>
    {/if}
</div>

<!--<div class="">-->
<!--    <div class="user-box">-->
<!--        <input type="text" name="" required="">-->
<!--        <label>Username</label>-->
<!--    </div>-->
<!--</div>-->

<style lang="css">
    html {
        height: 100%;

    }

    body {

        margin: 0;

        padding: 0;
        font-family: sans-serif;
        background: linear-gradient(#141e30, #243b55);

    }

    .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 400px;
        padding: 40px;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, .5);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
        border-radius: 10px;

    }

    .user-box {
        position: relative;

    }

    .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;

    }

    .user-box label {
        position: absolute;

        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;

    }

    .user-box input:focus ~ label,
    .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;

    }

    .bkcard form a {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #03e9f4;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 40px;
        letter-spacing: 4px

    }

    .bkcard a:hover {
        background: #03e9f4;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #03e9f4,
        0 0 25px #03e9f4,
        0 0 50px #03e9f4,
        0 0 100px #03e9f4;

    }

    .bkcard a span {
        position: absolute;
        display: block;

    }

    .bkcard a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;

    }

    @keyframes btn-anim1 {
        0% {
            left: -100%;
        }
        50%, 100% {
            left: 100%;
        }
    }

    .bkcard a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s;

    }

    @keyframes btn-anim2 {
        0% {
            top: -100%;
        }
        50%, 100% {
            top: 100%;
        }
    }

    .bkcard a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
    }

    @keyframes btn-anim3 {
        0% {
            right: -100%;
        }
        50%, 100% {
            right: 100%;
        }
    }

    .bkcard a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s

    }

    @keyframes btn-anim4 {
        0% {
            bottom: -100%;
        }
        50%, 100% {
            bottom: 100%;
        }
    }
</style>