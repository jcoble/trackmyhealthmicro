import * as cookie from 'cookie'

/** @type {import('@sveltejs/kit').Handle} */
// @ts-ignore
export async function handle({event, resolve}) {
    const response = await resolve(event, {
        ssr: false
    });

    const cookies = cookie.parse(event.request.headers.get('cookie') || '')
    event.locals.user = cookies.user
    event.locals.token = cookies.token
    return await resolve(event)
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request: { locals: { token: any; user: string; }; }) {
    return {
        token: request.locals.token,
        user: request.locals.user ? JSON.parse(request.locals.user) : null
    }
}



