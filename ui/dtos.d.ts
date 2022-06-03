/* Options:
Date: 2022-06-02 23:35:41
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


interface IReturn<T>
{
}

interface IReturnVoid
{
}

interface IHasSessionId
{
    sessionId?: string;
}

interface IHasBearerToken
{
    bearerToken?: string;
}

interface IPost
{
}

interface IPut
{
}

interface IDelete
{
}

interface ICreateDb<Table>
{
}

interface IPatchDb<Table>
{
}

interface IDeleteDb<Table>
{
}

// @DataContract
interface QueryBase
{
    // @DataMember(Order=1)
    skip?: number;

    // @DataMember(Order=2)
    take?: number;

    // @DataMember(Order=3)
    orderBy?: string;

    // @DataMember(Order=4)
    orderByDesc?: string;

    // @DataMember(Order=5)
    include?: string;

    // @DataMember(Order=6)
    fields?: string;

    // @DataMember(Order=7)
    meta?: { [index: string]: string; };
}

interface QueryData<T> extends QueryBase
{
}

interface QueryDb<T> extends QueryBase
{
}

// @DataContract
interface AuditBase
{
    // @DataMember(Order=1)
    createdDate?: string;

    // @DataMember(Order=2)
    // @Required()
    createdBy?: string;

    // @DataMember(Order=3)
    modifiedDate?: string;

    // @DataMember(Order=4)
    // @Required()
    modifiedBy?: string;

    // @DataMember(Order=5)
    deletedDate?: string;

    // @DataMember(Order=6)
    deletedBy?: string;
}

type RoomType = "Single" | "Double" | "Queen" | "Twin" | "Suite";

/**
* Booking Details
*/
interface Booking extends AuditBase
{
    id?: number;
    name?: string;
    roomType?: RoomType;
    roomNumber?: number;
    bookingStartDate?: string;
    bookingEndDate?: string;
    cost?: number;
    notes?: string;
    cancelled?: boolean;
}

// @DataContract
interface ResponseError
{
    // @DataMember(Order=1)
    errorCode?: string;

    // @DataMember(Order=2)
    fieldName?: string;

    // @DataMember(Order=3)
    message?: string;

    // @DataMember(Order=4)
    meta?: { [index: string]: string; };
}

// @DataContract
interface ResponseStatus
{
    // @DataMember(Order=1)
    errorCode?: string;

    // @DataMember(Order=2)
    message?: string;

    // @DataMember(Order=3)
    stackTrace?: string;

    // @DataMember(Order=4)
    errors?: ResponseError[];

    // @DataMember(Order=5)
    meta?: { [index: string]: string; };
}

interface HelloResponse
{
    result?: string;
}

// @DataContract
interface QueryResponse<T>
{
    // @DataMember(Order=1)
    offset?: number;

    // @DataMember(Order=2)
    total?: number;

    // @DataMember(Order=3)
    results?: T[];

    // @DataMember(Order=4)
    meta?: { [index: string]: string; };

    // @DataMember(Order=5)
    responseStatus?: ResponseStatus;
}

interface Todo
{
    id?: number;
    text?: string;
    isFinished?: boolean;
}

// @DataContract
interface AuthenticateResponse extends IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    userId?: string;

    // @DataMember(Order=2)
    sessionId?: string;

    // @DataMember(Order=3)
    userName?: string;

    // @DataMember(Order=4)
    displayName?: string;

    // @DataMember(Order=5)
    referrerUrl?: string;

    // @DataMember(Order=6)
    bearerToken?: string;

    // @DataMember(Order=7)
    refreshToken?: string;

    // @DataMember(Order=8)
    profileUrl?: string;

    // @DataMember(Order=9)
    roles?: string[];

    // @DataMember(Order=10)
    permissions?: string[];

    // @DataMember(Order=11)
    responseStatus?: ResponseStatus;

    // @DataMember(Order=12)
    meta?: { [index: string]: string; };
}

// @DataContract
interface AssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles?: string[];

    // @DataMember(Order=2)
    allPermissions?: string[];

    // @DataMember(Order=3)
    meta?: { [index: string]: string; };

    // @DataMember(Order=4)
    responseStatus?: ResponseStatus;
}

// @DataContract
interface UnAssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles?: string[];

    // @DataMember(Order=2)
    allPermissions?: string[];

    // @DataMember(Order=3)
    meta?: { [index: string]: string; };

    // @DataMember(Order=4)
    responseStatus?: ResponseStatus;
}

// @DataContract
interface RegisterResponse extends IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    userId?: string;

    // @DataMember(Order=2)
    sessionId?: string;

    // @DataMember(Order=3)
    userName?: string;

    // @DataMember(Order=4)
    referrerUrl?: string;

    // @DataMember(Order=5)
    bearerToken?: string;

    // @DataMember(Order=6)
    refreshToken?: string;

    // @DataMember(Order=7)
    roles?: string[];

    // @DataMember(Order=8)
    permissions?: string[];

    // @DataMember(Order=9)
    responseStatus?: ResponseStatus;

    // @DataMember(Order=10)
    meta?: { [index: string]: string; };
}

// @DataContract
interface IdResponse
{
    // @DataMember(Order=1)
    id?: string;

    // @DataMember(Order=2)
    responseStatus?: ResponseStatus;
}

// @Route("/hello")
// @Route("/hello/{Name}")
interface Hello extends IReturn<HelloResponse>
{
    name?: string;
}

// @Route("/todos", "GET")
interface QueryTodos extends QueryData<Todo>, IReturn<QueryResponse<Todo>>
{
    id?: number;
    ids?: number[];
    textContains?: string;
}

// @Route("/todos", "POST")
interface CreateTodo extends IReturn<Todo>, IPost
{
    // @Validate(Validator="NotEmpty")
    text?: string;
}

// @Route("/todos/{Id}", "PUT")
interface UpdateTodo extends IReturn<Todo>, IPut
{
    id?: number;
    // @Validate(Validator="NotEmpty")
    text?: string;

    isFinished?: boolean;
}

// @Route("/todos/{Id}", "DELETE")
interface DeleteTodo extends IReturnVoid, IDelete
{
    id?: number;
}

// @Route("/todos", "DELETE")
interface DeleteTodos extends IReturnVoid, IDelete
{
    ids: number[];
}

/**
* Sign In
*/
// @Route("/auth", "OPTIONS,GET,POST,DELETE")
// @Route("/auth/{provider}", "OPTIONS,GET,POST,DELETE")
// @Api(Description="Sign In")
// @DataContract
interface Authenticate extends IReturn<AuthenticateResponse>, IPost
{
    /**
    * AuthProvider, e.g. credentials
    */
    // @DataMember(Order=1)
    provider?: string;

    // @DataMember(Order=2)
    state?: string;

    // @DataMember(Order=3)
    oauth_token?: string;

    // @DataMember(Order=4)
    oauth_verifier?: string;

    // @DataMember(Order=5)
    userName?: string;

    // @DataMember(Order=6)
    password?: string;

    // @DataMember(Order=7)
    rememberMe?: boolean;

    // @DataMember(Order=9)
    errorView?: string;

    // @DataMember(Order=10)
    nonce?: string;

    // @DataMember(Order=11)
    uri?: string;

    // @DataMember(Order=12)
    response?: string;

    // @DataMember(Order=13)
    qop?: string;

    // @DataMember(Order=14)
    nc?: string;

    // @DataMember(Order=15)
    cnonce?: string;

    // @DataMember(Order=17)
    accessToken?: string;

    // @DataMember(Order=18)
    accessTokenSecret?: string;

    // @DataMember(Order=19)
    scope?: string;

    // @DataMember(Order=20)
    meta?: { [index: string]: string; };
}

// @Route("/assignroles", "POST")
// @DataContract
interface AssignRoles extends IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    userName?: string;

    // @DataMember(Order=2)
    permissions?: string[];

    // @DataMember(Order=3)
    roles?: string[];

    // @DataMember(Order=4)
    meta?: { [index: string]: string; };
}

// @Route("/unassignroles", "POST")
// @DataContract
interface UnAssignRoles extends IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    userName?: string;

    // @DataMember(Order=2)
    permissions?: string[];

    // @DataMember(Order=3)
    roles?: string[];

    // @DataMember(Order=4)
    meta?: { [index: string]: string; };
}

/**
* Sign Up
*/
// @Route("/register", "PUT,POST")
// @Api(Description="Sign Up")
// @DataContract
interface Register extends IReturn<RegisterResponse>, IPost
{
    // @DataMember(Order=1)
    userName?: string;

    // @DataMember(Order=2)
    firstName?: string;

    // @DataMember(Order=3)
    lastName?: string;

    // @DataMember(Order=4)
    displayName?: string;

    // @DataMember(Order=5)
    email?: string;

    // @DataMember(Order=6)
    password?: string;

    // @DataMember(Order=7)
    confirmPassword?: string;

    // @DataMember(Order=8)
    autoLogin?: boolean;

    // @DataMember(Order=10)
    errorView?: string;

    // @DataMember(Order=11)
    meta?: { [index: string]: string; };
}

/**
* Find Bookings
*/
// @Route("/bookings", "GET")
// @Route("/bookings/{Id}", "GET")
interface QueryBookings extends QueryDb<Booking>, IReturn<QueryResponse<Booking>>
{
    id?: number;
}

/**
* Create a new Booking
*/
// @Route("/bookings", "POST")
// @ValidateRequest(Validator="HasRole(`Employee`)")
interface CreateBooking extends IReturn<IdResponse>, ICreateDb<Booking>
{
    /**
    * Name this Booking is for
    */
    // @Validate(Validator="NotEmpty")
    name?: string;

    roomType?: RoomType;
    // @Validate(Validator="GreaterThan(0)")
    roomNumber?: number;

    // @Validate(Validator="GreaterThan(0)")
    cost?: number;

    bookingStartDate?: string;
    bookingEndDate?: string;
    // @Input(Type="textarea")
    notes?: string;
}

/**
* Update an existing Booking
*/
// @Route("/booking/{Id}", "PATCH")
// @ValidateRequest(Validator="HasRole(`Employee`)")
interface UpdateBooking extends IReturn<IdResponse>, IPatchDb<Booking>
{
    id?: number;
    name?: string;
    roomType?: RoomType;
    // @Validate(Validator="GreaterThan(0)")
    roomNumber?: number;

    // @Validate(Validator="GreaterThan(0)")
    cost?: number;

    bookingStartDate?: string;
    bookingEndDate?: string;
    notes?: string;
    cancelled?: boolean;
}

/**
* Delete a Booking
*/
// @Route("/booking/{Id}", "DELETE")
// @ValidateRequest(Validator="HasRole(`Manager`)")
interface DeleteBooking extends IReturnVoid, IDeleteDb<Booking>
{
    id?: number;
}
