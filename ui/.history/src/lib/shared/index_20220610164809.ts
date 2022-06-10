// import Script from 'svelte/types/compiler/interfaces';

import { JsonServiceClient } from '@servicestack/client';
import { writable } from 'svelte/store';
// import {navigate} from 'svelte-routing';

import { goto } from '$app/navigation';

import { Authenticate, AuthenticateResponse } from './dtos';

export var client = new JsonServiceClient('/');

export let userSession = writable(null);

// @ts-ignore
export const login = (response: AuthenticateResponse) => userSession.update((_) => response);
export const signout = async (redirect = true) => {
	userSession.update((_) => null);
	await client.post(new Authenticate({ provider: 'logout' }));
	if (redirect) goto('/');
};

export const redirect = (path: string) => {
	goto(path);
};

export const checkAuth = async () => {
	try {
		login(await client.post(new Authenticate()));
	} catch (e) {
		await signout(false);
	}
};
