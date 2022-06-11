import {ResponseStatus} from "./dtos";

declare const Checkbox: typeof import('$elements/Checkbox.svelte')['default']
declare const ErrorSummary: typeof import('$elements/ErrorSummary.svelte')['default']
declare const Input: typeof import('$elements/Input.svelte')['default']

export type User = {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    referrerUrl: string;
    profileUrl: string;
    roles: string[];
    permissions: string[];
}
