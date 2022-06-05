/* Options:
Date: 2022-06-04 15:39:00
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001
UsePath: /crud/all/csharp

//GlobalNamespace: 
//MakePartial: False
//MakeVirtual: False
//MakeInternal: False
//MakeDataContractsExtensible: False
//AddReturnMarker: True
//AddDescriptionAsComments: True
//AddDataContractAttributes: False
//AddIndexesToDataMembers: True
//AddGeneratedCodeAttributes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//InitializeCollections: False
//ExportValueTypes: False
//IncludeTypes: 
//ExcludeTypes: 
//AddNamespaces: 
//AddDefaultXmlNamespace: 
//IncludeCrudOperations: 
//Schema: 
//NamedConnection: 
//IncludeTables: 
//ExcludeTables: 
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;
using ServiceStack.Auth;
using trackmyhealthmicro.ServiceModel;
using trackmyhealthmicro.ServiceModel.Types;

namespace trackmyhealthmicro.ServiceModel;

[Route("/appointments", "POST")]
public class CreateAppointments
    : IReturn<IdResponse>, IPost, ICreateDb<Appointments>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ApptDateTime { get; set; }
    public string Place { get; set; }
    public string PlaceNotes { get; set; }
    public string ProviderName { get; set; }
    public Guid AppUserAuthId { get; set; }
}

[Route("/appusers", "POST")]
public class CreateAppUser
    : IReturn<IdResponse>, IPost, ICreateDb<AppUser>
{
    public string ProfileUrl { get; set; }
    public string LastLoginIp { get; set; }
    public DateTime? LastLoginDate { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string PrimaryEmail { get; set; }
    public string PhoneNumber { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string DisplayName { get; set; }
    public string Company { get; set; }
    public DateTime? BirthDate { get; set; }
    public string BirthDateRaw { get; set; }
    public string Address { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string Culture { get; set; }
    public string FullName { get; set; }
    public string Gender { get; set; }
    public string Language { get; set; }
    public string MailAddress { get; set; }
    public string Nickname { get; set; }
    public string PostalCode { get; set; }
    public string TimeZone { get; set; }
    public string Salt { get; set; }
    public string PasswordHash { get; set; }
    public string DigestHa1Hash { get; set; }
    public string Roles { get; set; }
    public string Permissions { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int InvalidLoginAttempts { get; set; }
    public DateTime? LastLoginAttempt { get; set; }
    public DateTime? LockedDate { get; set; }
    public string RecoveryToken { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
    [AutoDefault(Value = "Guid")] public Guid AppUserAuthId { get; set; }
}

[Route("/crudevents", "POST")]
public class CreateCrudEvent
    : IReturn<IdResponse>, IPost, ICreateDb<CrudEvent>
{
    public string EventType { get; set; }
    public string Model { get; set; }
    public string ModelId { get; set; }
    public DateTime EventDate { get; set; }
    public long? RowsUpdated { get; set; }
    public string RequestType { get; set; }
    public string RequestBody { get; set; }
    public string UserAuthId { get; set; }
    public string UserAuthName { get; set; }
    public string RemoteIp { get; set; }
    public string Urn { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/measurementdetails", "POST")]
public class CreateMeasurementDetails
    : IReturn<IdResponse>, IPost, ICreateDb<MeasurementDetails>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public Guid? TreatmentId { get; set; }
    public Guid? TreatmentName { get; set; }
    public Guid? MeasurementTypeId { get; set; }
    public string MeasurementTypeName { get; set; }
    public Guid? UnitId { get; set; }
    public string CustomerNotes { get; set; }
    public string Name { get; set; }
}

[Route("/measurements", "POST")]
public class CreateMeasurements
    : IReturn<IdResponse>, IPost, ICreateDb<Measurements>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentType { get; set; }
}

[Route("/measurementtypes", "POST")]
public class CreateMeasurementTypes
    : IReturn<IdResponse>, IPost, ICreateDb<MeasurementTypes>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentTypeId { get; set; }
}

// [Route("/migrations", "POST")]
// public class CreateMigrations
//     : IReturn<IdResponse>, IPost, ICreateDb<Migrations>
// {
//     public Guid Id { get; set; }
//     public string Name { get; set; }
//     public string Hash { get; set; }
//     public DateTime? ExecutedAt { get; set; }
// }

[Route("/schedules", "POST")]
public class CreateSchedules
    : IReturn<IdResponse>, IPost, ICreateDb<Schedules>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ScheduleTime { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentName { get; set; }
    public bool? IsWeekendDifferent { get; set; }
    public Guid? AppointmentId { get; set; }
    public Guid? TreatmentUserId { get; set; }
    public DateTime? LastRunTime { get; set; }
    public string LastRunStatus { get; set; }
    public DateTime? NextRunDateTime { get; set; }
}

// [Route("/schemamigrations", "POST")]
// public class CreateSchemaMigrations
//     : IReturn<IdResponse>, IPost, ICreateDb<SchemaMigrations>
// {
//     public long Version { get; set; }
//     public bool Dirty { get; set; }
// }

[Route("/treatmentremindersounds", "POST")]
public class CreateTreatmentReminderSounds
    : IReturn<IdResponse>, IPost, ICreateDb<TreatmentReminderSounds>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
}

[Route("/treatments", "POST")]
public class CreateTreatments
    : IReturn<IdResponse>, IPost, ICreateDb<Treatments>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string TreatmentType { get; set; }
    public Guid AppUserAuthId { get; set; }
    public Guid? UnitsId { get; set; }
    public Guid TreatmentReminderSoundId { get; set; }
    public bool? IsMuted { get; set; }
    public int? DailyFrequency { get; set; }
    public Guid? MeasurementTypesId { get; set; }
    public string MeasurementTypesName { get; set; }
    public string UnitsPlanned { get; set; }
}

[Route("/treatmentscheduledevents", "POST")]
public class CreateTreatmentScheduledEvents
    : IReturn<IdResponse>, IPost, ICreateDb<TreatmentScheduledEvents>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public short? Mood { get; set; }
    public Guid? ScheduleId { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentName { get; set; }
    public Guid TreatmentUserId { get; set; }
    public string TreatmentUserName { get; set; }
    public string TreatmentDescription { get; set; }
    public int? Completed { get; set; }
    public string TreatmentType { get; set; }
    public Guid MeasurementTypeName { get; set; }
    public Guid? MeasurementId { get; set; }
    public string MeasurementName { get; set; }
    public string UnitsPlanned { get; set; }
    public string UnitsTaken { get; set; }
    public Guid? UnitTypesId { get; set; }
    public string UnitsTypeName { get; set; }
    public DateTime? DateTimeEventPlanned { get; set; }
    public DateTime? DateTimeUserConfirmedEvent { get; set; }
    public DateTime? DateTimeSkippedEvent { get; set; }
    public string CustomerNotes { get; set; }
}

[Route("/userauthdetails", "POST")]
public class CreateUserAuthDetails
    : IReturn<IdResponse>, IPost, ICreateDb<UserAuthDetails>
{
    public int UserAuthId { get; set; }
    public string Provider { get; set; }
    public string UserId { get; set; }
    public string UserName { get; set; }
    public string FullName { get; set; }
    public string DisplayName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Company { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public DateTime? BirthDate { get; set; }
    public string BirthDateRaw { get; set; }
    public string Address { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string Culture { get; set; }
    public string Gender { get; set; }
    public string Language { get; set; }
    public string MailAddress { get; set; }
    public string Nickname { get; set; }
    public string PostalCode { get; set; }
    public string TimeZone { get; set; }
    public string RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiry { get; set; }
    public string RequestToken { get; set; }
    public string RequestTokenSecret { get; set; }
    public string Items { get; set; }
    public string AccessToken { get; set; }
    public string AccessTokenSecret { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/userauthroles", "POST")]
public class CreateUserAuthRole
    : IReturn<IdResponse>, IPost, ICreateDb<UserAuthRole>
{
    public int UserAuthId { get; set; }
    public string Role { get; set; }
    public string Permission { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/appointments/{Id}", "DELETE")]
public class DeleteAppointments
    : IReturn<IdResponse>, IDelete, IDeleteDb<Appointments>
{
    public Guid Id { get; set; }
}

[Route("/appusers/{Id}", "DELETE")]
public class DeleteAppUser
    : IReturn<IdResponse>, IDelete, IDeleteDb<AppUser>
{
    public int Id { get; set; }
}

[Route("/crudevents/{Id}", "DELETE")]
public class DeleteCrudEvent
    : IReturn<IdResponse>, IDelete, IDeleteDb<CrudEvent>
{
    public long Id { get; set; }
}

[Route("/measurementdetails/{Id}", "DELETE")]
public class DeleteMeasurementDetails
    : IReturn<IdResponse>, IDelete, IDeleteDb<MeasurementDetails>
{
    public Guid Id { get; set; }
}

[Route("/measurements/{Id}", "DELETE")]
public class DeleteMeasurements
    : IReturn<IdResponse>, IDelete, IDeleteDb<Measurements>
{
    public Guid Id { get; set; }
}

[Route("/measurementtypes/{Id}", "DELETE")]
public class DeleteMeasurementTypes
    : IReturn<IdResponse>, IDelete, IDeleteDb<MeasurementTypes>
{
    public Guid Id { get; set; }
}

// [Route("/migrations/{Id}", "DELETE")]
// public class DeleteMigrations
//     : IReturn<IdResponse>, IDelete, IDeleteDb<Migrations>
// {
//     public Guid Id { get; set; }
// }

[Route("/schedules/{Id}", "DELETE")]
public class DeleteSchedules
    : IReturn<IdResponse>, IDelete, IDeleteDb<Schedules>
{
    public Guid Id { get; set; }
}

// [Route("/schemamigrations/{Version}", "DELETE")]
// public class DeleteSchemaMigrations
//     : IReturn<IdResponse>, IDelete, IDeleteDb<SchemaMigrations>
// {
//     public long Version { get; set; }
// }

[Route("/treatmentremindersounds/{Id}", "DELETE")]
public class DeleteTreatmentReminderSounds
    : IReturn<IdResponse>, IDelete, IDeleteDb<TreatmentReminderSounds>
{
    public Guid Id { get; set; }
}

[Route("/treatments/{Id}", "DELETE")]
public class DeleteTreatments
    : IReturn<IdResponse>, IDelete, IDeleteDb<Treatments>
{
    public Guid Id { get; set; }
}

[Route("/treatmentscheduledevents/{Id}", "DELETE")]
public class DeleteTreatmentScheduledEvents
    : IReturn<IdResponse>, IDelete, IDeleteDb<TreatmentScheduledEvents>
{
    public Guid Id { get; set; }
}

[Route("/userauthdetails/{Id}", "DELETE")]
public class DeleteUserAuthDetails
    : IReturn<IdResponse>, IDelete, IDeleteDb<UserAuthDetails>
{
    public int Id { get; set; }
}

[Route("/userauthroles/{Id}", "DELETE")]
public class DeleteUserAuthRole
    : IReturn<IdResponse>, IDelete, IDeleteDb<UserAuthRole>
{
    public int Id { get; set; }
}

[Route("/appointments/{Id}", "PATCH")]
public class PatchAppointments
    : IReturn<IdResponse>, IPatch, IPatchDb<Appointments>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ApptDateTime { get; set; }
    public string Place { get; set; }
    public string PlaceNotes { get; set; }
    public string ProviderName { get; set; }
    public Guid AppUserAuthId { get; set; }
}

[Route("/appusers/{Id}", "PATCH")]
public class PatchAppUser
    : IReturn<IdResponse>, IPatch, IPatchDb<AppUser>
{
    public string ProfileUrl { get; set; }
    public string LastLoginIp { get; set; }
    public DateTime? LastLoginDate { get; set; }
    public int Id { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string PrimaryEmail { get; set; }
    public string PhoneNumber { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string DisplayName { get; set; }
    public string Company { get; set; }
    public DateTime? BirthDate { get; set; }
    public string BirthDateRaw { get; set; }
    public string Address { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string Culture { get; set; }
    public string FullName { get; set; }
    public string Gender { get; set; }
    public string Language { get; set; }
    public string MailAddress { get; set; }
    public string Nickname { get; set; }
    public string PostalCode { get; set; }
    public string TimeZone { get; set; }
    public string Salt { get; set; }
    public string PasswordHash { get; set; }
    public string DigestHa1Hash { get; set; }
    public string Roles { get; set; }
    public string Permissions { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int InvalidLoginAttempts { get; set; }
    public DateTime? LastLoginAttempt { get; set; }
    public DateTime? LockedDate { get; set; }
    public string RecoveryToken { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
    public Guid AppUserAuthId { get; set; }
}

[Route("/crudevents/{Id}", "PATCH")]
public class PatchCrudEvent
    : IReturn<IdResponse>, IPatch, IPatchDb<CrudEvent>
{
    public long Id { get; set; }
    public string EventType { get; set; }
    public string Model { get; set; }
    public string ModelId { get; set; }
    public DateTime EventDate { get; set; }
    public long? RowsUpdated { get; set; }
    public string RequestType { get; set; }
    public string RequestBody { get; set; }
    public string UserAuthId { get; set; }
    public string UserAuthName { get; set; }
    public string RemoteIp { get; set; }
    public string Urn { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/measurementdetails/{Id}", "PATCH")]
public class PatchMeasurementDetails
    : IReturn<IdResponse>, IPatch, IPatchDb<MeasurementDetails>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public Guid? TreatmentId { get; set; }
    public Guid? TreatmentName { get; set; }
    public Guid? MeasurementTypeId { get; set; }
    public string MeasurementTypeName { get; set; }
    public Guid? UnitId { get; set; }
    public string CustomerNotes { get; set; }
    public string Name { get; set; }
}

[Route("/measurements/{Id}", "PATCH")]
public class PatchMeasurements
    : IReturn<IdResponse>, IPatch, IPatchDb<Measurements>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentType { get; set; }
}

[Route("/measurementtypes/{Id}", "PATCH")]
public class PatchMeasurementTypes
    : IReturn<IdResponse>, IPatch, IPatchDb<MeasurementTypes>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentTypeId { get; set; }
}

// [Route("/migrations/{Id}", "PATCH")]
// public class PatchMigrations
//     : IReturn<IdResponse>, IPatch, IPatchDb<Migrations>
// {
//     public Guid Id { get; set; }
//     public string Name { get; set; }
//     public string Hash { get; set; }
//     public DateTime? ExecutedAt { get; set; }
// }

[Route("/schedules/{Id}", "PATCH")]
public class PatchSchedules
    : IReturn<IdResponse>, IPatch, IPatchDb<Schedules>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ScheduleTime { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentName { get; set; }
    public bool? IsWeekendDifferent { get; set; }
    public Guid? AppointmentId { get; set; }
    public Guid? TreatmentUserId { get; set; }
    public DateTime? LastRunTime { get; set; }
    public string LastRunStatus { get; set; }
    public DateTime? NextRunDateTime { get; set; }
}

// [Route("/schemamigrations/{Version}", "PATCH")]
// public class PatchSchemaMigrations
//     : IReturn<IdResponse>, IPatch, IPatchDb<SchemaMigrations>
// {
//     public long Version { get; set; }
//     public bool Dirty { get; set; }
// }

[Route("/treatmentremindersounds/{Id}", "PATCH")]
public class PatchTreatmentReminderSounds
    : IReturn<IdResponse>, IPatch, IPatchDb<TreatmentReminderSounds>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
}

[Route("/treatments/{Id}", "PATCH")]
public class PatchTreatments
    : IReturn<IdResponse>, IPatch, IPatchDb<Treatments>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string TreatmentType { get; set; }
    public Guid AppUserAuthId { get; set; }
    public Guid? UnitsId { get; set; }
    public Guid TreatmentReminderSoundId { get; set; }
    public bool? IsMuted { get; set; }
    public int? DailyFrequency { get; set; }
    public Guid? MeasurementTypesId { get; set; }
    public string MeasurementTypesName { get; set; }
    public string UnitsPlanned { get; set; }
}

[Route("/treatmentscheduledevents/{Id}", "PATCH")]
public class PatchTreatmentScheduledEvents
    : IReturn<IdResponse>, IPatch, IPatchDb<TreatmentScheduledEvents>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public short? Mood { get; set; }
    public Guid? ScheduleId { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentName { get; set; }
    public Guid TreatmentUserId { get; set; }
    public string TreatmentUserName { get; set; }
    public string TreatmentDescription { get; set; }
    public int? Completed { get; set; }
    public string TreatmentType { get; set; }
    public Guid MeasurementTypeName { get; set; }
    public Guid? MeasurementId { get; set; }
    public string MeasurementName { get; set; }
    public string UnitsPlanned { get; set; }
    public string UnitsTaken { get; set; }
    public Guid? UnitTypesId { get; set; }
    public string UnitsTypeName { get; set; }
    public DateTime? DateTimeEventPlanned { get; set; }
    public DateTime? DateTimeUserConfirmedEvent { get; set; }
    public DateTime? DateTimeSkippedEvent { get; set; }
    public string CustomerNotes { get; set; }
}

[Route("/userauthdetails/{Id}", "PATCH")]
public class PatchUserAuthDetails
    : IReturn<IdResponse>, IPatch, IPatchDb<UserAuthDetails>
{
    public int Id { get; set; }
    public int UserAuthId { get; set; }
    public string Provider { get; set; }
    public string UserId { get; set; }
    public string UserName { get; set; }
    public string FullName { get; set; }
    public string DisplayName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Company { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public DateTime? BirthDate { get; set; }
    public string BirthDateRaw { get; set; }
    public string Address { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string Culture { get; set; }
    public string Gender { get; set; }
    public string Language { get; set; }
    public string MailAddress { get; set; }
    public string Nickname { get; set; }
    public string PostalCode { get; set; }
    public string TimeZone { get; set; }
    public string RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiry { get; set; }
    public string RequestToken { get; set; }
    public string RequestTokenSecret { get; set; }
    public string Items { get; set; }
    public string AccessToken { get; set; }
    public string AccessTokenSecret { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/userauthroles/{Id}", "PATCH")]
public class PatchUserAuthRole
    : IReturn<IdResponse>, IPatch, IPatchDb<UserAuthRole>
{
    public int Id { get; set; }
    public int UserAuthId { get; set; }
    public string Role { get; set; }
    public string Permission { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/appointments", "GET")]
[Route("/appointments/{Id}", "GET")]
public class QueryAppointments
    : QueryDb<Appointments>, IReturn<QueryResponse<Appointments>>, IGet
{
    public Guid? Id { get; set; }
}

[Route("/appusers", "GET")]
[Route("/appusers/{Id}", "GET")]
public class QueryAppUsers
    : QueryDb<AppUser>, IReturn<QueryResponse<AppUser>>, IGet
{
    public int? Id { get; set; }
}

[Route("/crudevents", "GET")]
[Route("/crudevents/{Id}", "GET")]
public class QueryCrudEvents
    : QueryDb<CrudEvent>, IReturn<QueryResponse<CrudEvent>>, IGet
{
    public long? Id { get; set; }
}

[Route("/measurementdetails", "GET")]
[Route("/measurementdetails/{Id}", "GET")]
public class QueryMeasurementDetails
    : QueryDb<MeasurementDetails>, IReturn<QueryResponse<MeasurementDetails>>, IGet
{
    public Guid? Id { get; set; }
}

[Route("/measurements", "GET")]
[Route("/measurements/{Id}", "GET")]
public class QueryMeasurements
    : QueryDb<Measurements>, IReturn<QueryResponse<Measurements>>, IGet
{
    public Guid? Id { get; set; }
}

[Route("/measurementtypes", "GET")]
[Route("/measurementtypes/{Id}", "GET")]
public class QueryMeasurementTypes
    : QueryDb<MeasurementTypes>, IReturn<QueryResponse<MeasurementTypes>>, IGet
{
    public Guid? Id { get; set; }
}

// [Route("/migrations", "GET")]
// [Route("/migrations/{Id}", "GET")]
// public class QueryMigrations
//     : QueryDb<Migrations>, IReturn<QueryResponse<Migrations>>, IGet
// {
//     public Guid? Id { get; set; }
// }

[Route("/schedules", "GET")]
[Route("/schedules/{Id}", "GET")]
public class QuerySchedules
    : QueryDb<Schedules>, IReturn<QueryResponse<Schedules>>, IGet
{
    public Guid? Id { get; set; }
}

// [Route("/schemamigrations", "GET")]
// [Route("/schemamigrations/{Version}", "GET")]
// public class QuerySchemaMigrations
//     : QueryDb<SchemaMigrations>, IReturn<QueryResponse<SchemaMigrations>>, IGet
// {
//     public long? Version { get; set; }
// }

[Route("/treatmentremindersounds", "GET")]
[Route("/treatmentremindersounds/{Id}", "GET")]
public class QueryTreatmentReminderSounds
    : QueryDb<TreatmentReminderSounds>, IReturn<QueryResponse<TreatmentReminderSounds>>, IGet
{
    public Guid? Id { get; set; }
}

[Route("/treatments", "GET")]
[Route("/treatments/{Id}", "GET")]
public class QueryTreatments
    : QueryDb<Treatments>, IReturn<QueryResponse<Treatments>>, IGet
{
    public Guid? Id { get; set; }
}

[Route("/treatmentscheduledevents", "GET")]
[Route("/treatmentscheduledevents/{Id}", "GET")]
public class QueryTreatmentScheduledEvents
    : QueryDb<TreatmentScheduledEvents>, IReturn<QueryResponse<TreatmentScheduledEvents>>, IGet
{
    public Guid? Id { get; set; }
}

[Route("/userauthdetails", "GET")]
[Route("/userauthdetails/{Id}", "GET")]
public class QueryUserAuthDetails
    : QueryDb<UserAuthDetails>, IReturn<QueryResponse<UserAuthDetails>>, IGet
{
    public int? Id { get; set; }
}

[Route("/userauthroles", "GET")]
[Route("/userauthroles/{Id}", "GET")]
public class QueryUserAuthRoles
    : QueryDb<UserAuthRole>, IReturn<QueryResponse<UserAuthRole>>, IGet
{
    public int? Id { get; set; }
}

[Route("/appointments/{Id}", "PUT")]
public class UpdateAppointments
    : IReturn<IdResponse>, IPut, IUpdateDb<Appointments>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ApptDateTime { get; set; }
    public string Place { get; set; }
    public string PlaceNotes { get; set; }
    public string ProviderName { get; set; }
    public Guid AppUserAuthId { get; set; }
}

[Route("/appusers/{Id}", "PUT")]
public class UpdateAppUser
    : IReturn<IdResponse>, IPut, IUpdateDb<AppUser>
{
    public string ProfileUrl { get; set; }
    public string LastLoginIp { get; set; }
    public DateTime? LastLoginDate { get; set; }
    public int Id { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string PrimaryEmail { get; set; }
    public string PhoneNumber { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string DisplayName { get; set; }
    public string Company { get; set; }
    public DateTime? BirthDate { get; set; }
    public string BirthDateRaw { get; set; }
    public string Address { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string Culture { get; set; }
    public string FullName { get; set; }
    public string Gender { get; set; }
    public string Language { get; set; }
    public string MailAddress { get; set; }
    public string Nickname { get; set; }
    public string PostalCode { get; set; }
    public string TimeZone { get; set; }
    public string Salt { get; set; }
    public string PasswordHash { get; set; }
    public string DigestHa1Hash { get; set; }
    public string Roles { get; set; }
    public string Permissions { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int InvalidLoginAttempts { get; set; }
    public DateTime? LastLoginAttempt { get; set; }
    public DateTime? LockedDate { get; set; }
    public string RecoveryToken { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
    public Guid AppUserAuthId { get; set; }
}

[Route("/crudevents/{Id}", "PUT")]
public class UpdateCrudEvent
    : IReturn<IdResponse>, IPut, IUpdateDb<CrudEvent>
{
    public long Id { get; set; }
    public string EventType { get; set; }
    public string Model { get; set; }
    public string ModelId { get; set; }
    public DateTime EventDate { get; set; }
    public long? RowsUpdated { get; set; }
    public string RequestType { get; set; }
    public string RequestBody { get; set; }
    public string UserAuthId { get; set; }
    public string UserAuthName { get; set; }
    public string RemoteIp { get; set; }
    public string Urn { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/measurementdetails/{Id}", "PUT")]
public class UpdateMeasurementDetails
    : IReturn<IdResponse>, IPut, IUpdateDb<MeasurementDetails>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public Guid? TreatmentId { get; set; }
    public Guid? TreatmentName { get; set; }
    public Guid? MeasurementTypeId { get; set; }
    public string MeasurementTypeName { get; set; }
    public Guid? UnitId { get; set; }
    public string CustomerNotes { get; set; }
    public string Name { get; set; }
}

[Route("/measurements/{Id}", "PUT")]
public class UpdateMeasurements
    : IReturn<IdResponse>, IPut, IUpdateDb<Measurements>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentType { get; set; }
}

[Route("/measurementtypes/{Id}", "PUT")]
public class UpdateMeasurementTypes
    : IReturn<IdResponse>, IPut, IUpdateDb<MeasurementTypes>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentTypeId { get; set; }
}

// [Route("/migrations/{Id}", "PUT")]
// public class UpdateMigrations
//     : IReturn<IdResponse>, IPut, IUpdateDb<Migrations>
// {
//     public Guid Id { get; set; }
//     public string Name { get; set; }
//     public string Hash { get; set; }
//     public DateTime? ExecutedAt { get; set; }
// }

[Route("/schedules/{Id}", "PUT")]
public class UpdateSchedules
    : IReturn<IdResponse>, IPut, IUpdateDb<Schedules>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ScheduleTime { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentName { get; set; }
    public bool? IsWeekendDifferent { get; set; }
    public Guid? AppointmentId { get; set; }
    public Guid? TreatmentUserId { get; set; }
    public DateTime? LastRunTime { get; set; }
    public string LastRunStatus { get; set; }
    public DateTime? NextRunDateTime { get; set; }
}

// [Route("/schemamigrations/{Version}", "PUT")]
// public class UpdateSchemaMigrations
//     : IReturn<IdResponse>, IPut, IUpdateDb<SchemaMigrations>
// {
//     public long Version { get; set; }
//     public bool Dirty { get; set; }
// }

[Route("/treatmentremindersounds/{Id}", "PUT")]
public class UpdateTreatmentReminderSounds
    : IReturn<IdResponse>, IPut, IUpdateDb<TreatmentReminderSounds>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
}

[Route("/treatments/{Id}", "PUT")]
public class UpdateTreatments
    : IReturn<IdResponse>, IPut, IUpdateDb<Treatments>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string TreatmentType { get; set; }
    public Guid AppUserAuthId { get; set; }
    public Guid? UnitsId { get; set; }
    public Guid TreatmentReminderSoundId { get; set; }
    public bool? IsMuted { get; set; }
    public int? DailyFrequency { get; set; }
    public Guid? MeasurementTypesId { get; set; }
    public string MeasurementTypesName { get; set; }
    public string UnitsPlanned { get; set; }
}

[Route("/treatmentscheduledevents/{Id}", "PUT")]
public class UpdateTreatmentScheduledEvents
    : IReturn<IdResponse>, IPut, IUpdateDb<TreatmentScheduledEvents>
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public short? Mood { get; set; }
    public Guid? ScheduleId { get; set; }
    public Guid? TreatmentId { get; set; }
    public string TreatmentName { get; set; }
    public Guid TreatmentUserId { get; set; }
    public string TreatmentUserName { get; set; }
    public string TreatmentDescription { get; set; }
    public int? Completed { get; set; }
    public string TreatmentType { get; set; }
    public Guid MeasurementTypeName { get; set; }
    public Guid? MeasurementId { get; set; }
    public string MeasurementName { get; set; }
    public string UnitsPlanned { get; set; }
    public string UnitsTaken { get; set; }
    public Guid? UnitTypesId { get; set; }
    public string UnitsTypeName { get; set; }
    public DateTime? DateTimeEventPlanned { get; set; }
    public DateTime? DateTimeUserConfirmedEvent { get; set; }
    public DateTime? DateTimeSkippedEvent { get; set; }
    public string CustomerNotes { get; set; }
}

[Route("/userauthdetails/{Id}", "PUT")]
public class UpdateUserAuthDetails
    : IReturn<IdResponse>, IPut, IUpdateDb<UserAuthDetails>
{
    public int Id { get; set; }
    public int UserAuthId { get; set; }
    public string Provider { get; set; }
    public string UserId { get; set; }
    public string UserName { get; set; }
    public string FullName { get; set; }
    public string DisplayName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Company { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public DateTime? BirthDate { get; set; }
    public string BirthDateRaw { get; set; }
    public string Address { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string Culture { get; set; }
    public string Gender { get; set; }
    public string Language { get; set; }
    public string MailAddress { get; set; }
    public string Nickname { get; set; }
    public string PostalCode { get; set; }
    public string TimeZone { get; set; }
    public string RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiry { get; set; }
    public string RequestToken { get; set; }
    public string RequestTokenSecret { get; set; }
    public string Items { get; set; }
    public string AccessToken { get; set; }
    public string AccessTokenSecret { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}

[Route("/userauthroles/{Id}", "PUT")]
public class UpdateUserAuthRole
    : IReturn<IdResponse>, IPut, IUpdateDb<UserAuthRole>
{
    public int Id { get; set; }
    public int UserAuthId { get; set; }
    public string Role { get; set; }
    public string Permission { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int? RefId { get; set; }
    public string RefIdStr { get; set; }
    public string Meta { get; set; }
}
