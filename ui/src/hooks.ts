import * as cookie from 'cookie'

// @ts-ignore
export async function handle({event, resolve}) {


    // const cookies = cookie.parse(event.request.headers.get('cookie') || '')
    // console.log("COOKIES", cookies);
    // event.locals.user = cookies.user
    // event.locals.token = cookies.token

    const response = await resolve(event, {
        ssr: false
    });

    return await resolve(response)
}


// /** @type {import('@sveltejs/kit').GetSession} */
// // @ts-ignore
// export function getSession(request) {
//     return {
//         token: request.locals.token,
//         user: request.locals.user ? JSON.parse(request.locals.user) : null
//     }
// }