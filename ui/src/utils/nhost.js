import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
	backendUrl: import.meta.env.VITE_GRAPHQL_BACKEND // replace this with the backend URL of your app
});

console.log(nhost.graphql.getUrl());

const auth = nhost.auth;
const storage = nhost.storage;

export { auth, storage };
