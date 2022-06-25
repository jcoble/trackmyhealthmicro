/* Options:
Date: 2022-06-07 14:23:08
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T> {
    createResponse(): T;
}

export interface IReturnVoid {
    createResponse(): void;
}

export interface IHasSessionId {
    sessionId: string;
}

export interface IHasBearerToken {
    bearerToken: string;
}

export interface IPost {
}

// @DataContract
export class ResponseError {
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public fieldName: string;

    // @DataMember(Order=3)
    public message: string;

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) {
        (Object as any).assign(this, init);
    }
}

// @DataContract
export class ResponseStatus {
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) {
        (Object as any).assign(this, init);
    }
}

export class HelloResponse {
    public result: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<HelloResponse>) {
        (Object as any).assign(this, init);
    }
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken {
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public referrerUrl: string;

    // @DataMember(Order=6)
    public bearerToken: string;

    // @DataMember(Order=7)
    public refreshToken: string;

    // @DataMember(Order=8)
    public profileUrl: string;

    // @DataMember(Order=9)
    public roles: string[];

    // @DataMember(Order=10)
    public permissions: string[];

    // @DataMember(Order=11)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=12)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AuthenticateResponse>) {
        (Object as any).assign(this, init);
    }
}

// @DataContract
export class AssignRolesResponse {
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<AssignRolesResponse>) {
        (Object as any).assign(this, init);
    }
}

// @DataContract
export class UnAssignRolesResponse {
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<UnAssignRolesResponse>) {
        (Object as any).assign(this, init);
    }
}

// @DataContract
export class RegisterResponse implements IHasSessionId, IHasBearerToken {
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public referrerUrl: string;

    // @DataMember(Order=5)
    public bearerToken: string;

    // @DataMember(Order=6)
    public refreshToken: string;

    // @DataMember(Order=7)
    public roles: string[];

    // @DataMember(Order=8)
    public permissions: string[];

    // @DataMember(Order=9)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=10)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<RegisterResponse>) {
        (Object as any).assign(this, init);
    }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse> {
    public name: string;

    public constructor(init?: Partial<Hello>) {
        (Object as any).assign(this, init);
    }

    public getTypeName() {
        return 'Hello';
    }

    public getMethod() {
        return 'POST';
    }

    public createResponse() {
        return new HelloResponse();
    }
}

/**
 * Sign In
 */
// @Route("/auth", "OPTIONS,GET,POST,DELETE")
// @Route("/auth/{provider}", "OPTIONS,GET,POST,DELETE")
// @Api(Description="Sign In")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost {
    /**
     * AuthProvider, e.g. credentials
     */
        // @DataMember(Order=1)
    public provider: string;

    // @DataMember(Order=2)
    public state: string;

    // @DataMember(Order=3)
    public oauth_token: string;

    // @DataMember(Order=4)
    public oauth_verifier: string;

    // @DataMember(Order=5)
    public userName: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public rememberMe?: boolean;

    // @DataMember(Order=9)
    public errorView: string;

    // @DataMember(Order=10)
    public nonce: string;

    // @DataMember(Order=11)
    public uri: string;

    // @DataMember(Order=12)
    public response: string;

    // @DataMember(Order=13)
    public qop: string;

    // @DataMember(Order=14)
    public nc: string;

    // @DataMember(Order=15)
    public cnonce: string;

    // @DataMember(Order=17)
    public accessToken: string;

    // @DataMember(Order=18)
    public accessTokenSecret: string;

    // @DataMember(Order=19)
    public scope: string;

    // @DataMember(Order=20)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Authenticate>) {
        (Object as any).assign(this, init);
    }

    public getTypeName() {
        return 'Authenticate';
    }

    public getMethod() {
        return 'POST';
    }

    public createResponse() {
        return new AuthenticateResponse();
    }
}

// @Route("/assignroles", "POST")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost {
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AssignRoles>) {
        (Object as any).assign(this, init);
    }

    public getTypeName() {
        return 'AssignRoles';
    }

    public getMethod() {
        return 'POST';
    }

    public createResponse() {
        return new AssignRolesResponse();
    }
}

// @Route("/unassignroles", "POST")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost {
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<UnAssignRoles>) {
        (Object as any).assign(this, init);
    }

    public getTypeName() {
        return 'UnAssignRoles';
    }

    public getMethod() {
        return 'POST';
    }

    public createResponse() {
        return new UnAssignRolesResponse();
    }
}

/**
 * Sign Up
 */
// @Route("/register", "PUT,POST")
// @Api(Description="Sign Up")
// @DataContract
export class Register implements IReturn<RegisterResponse>, IPost {
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public firstName: string;

    // @DataMember(Order=3)
    public lastName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public email: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public confirmPassword: string;

    // @DataMember(Order=8)
    public autoLogin?: boolean;

    // @DataMember(Order=10)
    public errorView: string;

    // @DataMember(Order=11)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Register>) {
        (Object as any).assign(this, init);
    }

    public getTypeName() {
        return 'Register';
    }

    public getMethod() {
        return 'POST';
    }

    public createResponse() {
        return new RegisterResponse();
    }
}