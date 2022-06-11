// import Script from 'svelte/types/compiler/interfaces';
import Cookies from 'js-cookie'
import {browser} from '$app/env'
import {JsonServiceClient} from '@servicestack/client';
import type {Writable} from 'svelte/store';
import {writable} from 'svelte/store';
import type {User} from './global';

// import {navigate} from 'svelte-routing';

import {goto} from '$app/navigation';

import {Authenticate, AuthenticateResponse} from './dtos';
// import {logout, removeCookie} from "./auth";

export var client = new JsonServiceClient('http://localhost:5000/api');

export let userSession: Writable<AuthenticateResponse | null>;
userSession = writable<AuthenticateResponse | null>(null);

// @ts-ignore
export const login = async (response: AuthenticateResponse) => {
    if (browser) {

        let user: User = {
            userId: response.userId,
            sessionId: response.sessionId,
            userName: response.userName,
            displayName: response.displayName,
            referrerUrl: response.referrerUrl,
            profileUrl: response.profileUrl,
            roles: response.roles,
            permissions: response.permissions
        }

        setCookie('token', response.bearerToken, {expires: 1, httpOnly: true, sameSite: 'lax'})
        await setCookie('user', user, {expires: 1, httpOnly: true, sameSite: 'lax'})
    }
    userSession.update((_) => response);
}
export const signout = async (redirect = true) => {
    userSession.update((_) => null);
    await client.post(new Authenticate({provider: 'logout'}));
    await removeCookie('token')
    await removeCookie('user')
    if (redirect) await goto('/');
};

export const redirect = async (path: string) => {
    await goto(path);
};

export const setCookie = (key: any, value: any, opts: any) => {
    Cookies.set(key, value, opts)
}

export const removeCookie = async (key: any) => {
    if (browser) {
        await Cookies.remove(key)
    }
}

export const checkAuth = async () => {
    try {
        await login(await client.post(new Authenticate()));
    } catch (e) {
        await signout(false);
    }
};

export const handleSession = async (res: any) => {
    if (res.status === 440) {
        await signout();
    }
}
