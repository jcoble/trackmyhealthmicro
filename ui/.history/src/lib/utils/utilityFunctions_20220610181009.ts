import type { ErrorResponse } from './types';

export function parseError(e: any | undefined): ErrorResponse {
	console.log('after', e);

	// if (e && (e as ApiError) !== undefined) {
	// 	console.log('after', e);
	//
	// 	if (e.status == 401 || e.status === 409) {
	// 		return {
	// 			shoudDisplayAsFormError: true,
	// 			status: e.status,
	// 			message: e.message,
	// 			field: e?.field
	// 		};
	// 	}
	//
	// 	return {
	// 		shoudDisplayAsFormError: true,
	// 		status: e.status,
	// 		message: e.message,
	// 		field: e?.field
	// 	};
	// } else if (e) {
	// 	return {
	// 		shoudDisplayAsFormError: false,
	// 		status: e.status,
	// 		message: e.message
	// 	};
	// }

	return e;
}

export function includesAnyFieldNames(names: string[], str: string): boolean {
	if (names.some((v) => str.toLowerCase().includes(v.toLowerCase()))) {
		return false;
	}

	return true;
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
