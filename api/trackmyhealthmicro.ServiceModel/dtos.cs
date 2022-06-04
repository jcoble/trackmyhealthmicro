/* Options:
Date: 2022-06-04 15:03:32
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

GlobalNamespace: trackmyhealthmicro
MakePartial: True
MakeVirtual: True
//MakeInternal: False
//MakeDataContractsExtensible: False
AddReturnMarker: True
AddDescriptionAsComments: True
AddDataContractAttributes: True
AddIndexesToDataMembers: True
//AddGeneratedCodeAttributes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//InitializeCollections: True
//ExportValueTypes: False
//IncludeTypes: 
//ExcludeTypes: 
//AddNamespaces: 
//AddDefaultXmlNamespace: http://schemas.servicestack.net/types
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;
using ServiceStack.Auth;
using trackmyhealthmicro;

[assembly: ContractNamespace("http://schemas.servicestack.net/types", ClrNamespace = "ServiceStack.Auth")]
[assembly: ContractNamespace("http://schemas.servicestack.net/types", ClrNamespace = "trackmyhealthmicro")]

namespace trackmyhealthmicro;

[DataContract]
public partial class CrudEvent
    : IMeta
{
    public CrudEvent()
    {
        Meta = new Dictionary<string, string> { };
    }

    [DataMember(Order = 1)] public virtual long Id { get; set; }

    [DataMember(Order = 2)] public virtual string EventType { get; set; }

    [DataMember(Order = 3)] public virtual string Model { get; set; }

    [DataMember(Order = 4)] public virtual string ModelId { get; set; }

    [DataMember(Order = 5)] public virtual DateTime EventDate { get; set; }

    [DataMember(Order = 6)] public virtual long? RowsUpdated { get; set; }

    [DataMember(Order = 7)] public virtual string RequestType { get; set; }

    [DataMember(Order = 8)] public virtual string RequestBody { get; set; }

    [DataMember(Order = 9)] public virtual string UserAuthId { get; set; }

    [DataMember(Order = 10)] public virtual string UserAuthName { get; set; }

    [DataMember(Order = 11)] public virtual string RemoteIp { get; set; }

    [DataMember(Order = 12)] public virtual string Urn { get; set; }

    [DataMember(Order = 13)] public virtual int? RefId { get; set; }

    [DataMember(Order = 14)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 15)] public virtual Dictionary<string, string> Meta { get; set; }
}

[DataContract]
public partial class UserAuthDetails
{
    public UserAuthDetails()
    {
        Items = new Dictionary<string, string> { };
        Meta = new Dictionary<string, string> { };
    }

    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Provider { get; set; }

    [DataMember(Order = 4)] public virtual string UserId { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string FullName { get; set; }

    [DataMember(Order = 7)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 8)] public virtual string FirstName { get; set; }

    [DataMember(Order = 9)] public virtual string LastName { get; set; }

    [DataMember(Order = 10)] public virtual string Company { get; set; }

    [DataMember(Order = 11)] public virtual string Email { get; set; }

    [DataMember(Order = 12)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string Gender { get; set; }

    [DataMember(Order = 22)] public virtual string Language { get; set; }

    [DataMember(Order = 23)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 24)] public virtual string Nickname { get; set; }

    [DataMember(Order = 25)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 26)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 27)] public virtual string RefreshToken { get; set; }

    [DataMember(Order = 28)] public virtual DateTime? RefreshTokenExpiry { get; set; }

    [DataMember(Order = 29)] public virtual string RequestToken { get; set; }

    [DataMember(Order = 30)] public virtual string RequestTokenSecret { get; set; }

    [DataMember(Order = 31)] public virtual Dictionary<string, string> Items { get; set; }

    [DataMember(Order = 32)] public virtual string AccessToken { get; set; }

    [DataMember(Order = 33)] public virtual string AccessTokenSecret { get; set; }

    [DataMember(Order = 34)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 35)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 36)] public virtual int? RefId { get; set; }

    [DataMember(Order = 37)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 38)] public virtual Dictionary<string, string> Meta { get; set; }
}

[DataContract]
public partial class UserAuthRole
    : IMeta
{
    public UserAuthRole()
    {
        Meta = new Dictionary<string, string> { };
    }

    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Role { get; set; }

    [DataMember(Order = 4)] public virtual string Permission { get; set; }

    [DataMember(Order = 5)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 6)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 7)] public virtual int? RefId { get; set; }

    [DataMember(Order = 8)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 9)] public virtual Dictionary<string, string> Meta { get; set; }
}

[DataContract]
public partial class Appointments
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ApptDateTime { get; set; }

    [DataMember(Order = 6)] public virtual string Place { get; set; }

    [DataMember(Order = 7)] public virtual string PlaceNotes { get; set; }

    [DataMember(Order = 8)] public virtual string ProviderName { get; set; }

    [DataMember(Order = 9)] public virtual Guid AppUserAuthId { get; set; }
}

[DataContract]
public partial class AppUser
{
    [DataMember(Order = 1)] public virtual string ProfileUrl { get; set; }

    [DataMember(Order = 2)] public virtual string LastLoginIp { get; set; }

    [DataMember(Order = 3)] public virtual DateTime? LastLoginDate { get; set; }

    [DataMember(Order = 4)] public virtual int Id { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string Email { get; set; }

    [DataMember(Order = 7)] public virtual string PrimaryEmail { get; set; }

    [DataMember(Order = 8)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 9)] public virtual string FirstName { get; set; }

    [DataMember(Order = 10)] public virtual string LastName { get; set; }

    [DataMember(Order = 11)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 12)] public virtual string Company { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string FullName { get; set; }

    [DataMember(Order = 22)] public virtual string Gender { get; set; }

    [DataMember(Order = 23)] public virtual string Language { get; set; }

    [DataMember(Order = 24)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 25)] public virtual string Nickname { get; set; }

    [DataMember(Order = 26)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 27)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 28)] public virtual string Salt { get; set; }

    [DataMember(Order = 29)] public virtual string PasswordHash { get; set; }

    [DataMember(Order = 30)] public virtual string DigestHa1Hash { get; set; }

    [DataMember(Order = 31)] public virtual string Roles { get; set; }

    [DataMember(Order = 32)] public virtual string Permissions { get; set; }

    [DataMember(Order = 33)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 34)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 35)] public virtual int InvalidLoginAttempts { get; set; }

    [DataMember(Order = 36)] public virtual DateTime? LastLoginAttempt { get; set; }

    [DataMember(Order = 37)] public virtual DateTime? LockedDate { get; set; }

    [DataMember(Order = 38)] public virtual string RecoveryToken { get; set; }

    [DataMember(Order = 39)] public virtual int? RefId { get; set; }

    [DataMember(Order = 40)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 41)] public virtual string Meta { get; set; }

    [DataMember(Order = 42)] public virtual Guid AppUserAuthId { get; set; }
}

[Route("/appointments", "POST")]
[DataContract]
public partial class CreateAppointments
    : IReturn<IdResponse>, IPost, ICreateDb<Appointments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ApptDateTime { get; set; }

    [DataMember(Order = 6)] public virtual string Place { get; set; }

    [DataMember(Order = 7)] public virtual string PlaceNotes { get; set; }

    [DataMember(Order = 8)] public virtual string ProviderName { get; set; }

    [DataMember(Order = 9)] public virtual Guid AppUserAuthId { get; set; }
}

[Route("/appusers", "POST")]
[DataContract]
public partial class CreateAppUser
    : IReturn<IdResponse>, IPost, ICreateDb<AppUser>
{
    [DataMember(Order = 1)] public virtual string ProfileUrl { get; set; }

    [DataMember(Order = 2)] public virtual string LastLoginIp { get; set; }

    [DataMember(Order = 3)] public virtual DateTime? LastLoginDate { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string Email { get; set; }

    [DataMember(Order = 7)] public virtual string PrimaryEmail { get; set; }

    [DataMember(Order = 8)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 9)] public virtual string FirstName { get; set; }

    [DataMember(Order = 10)] public virtual string LastName { get; set; }

    [DataMember(Order = 11)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 12)] public virtual string Company { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string FullName { get; set; }

    [DataMember(Order = 22)] public virtual string Gender { get; set; }

    [DataMember(Order = 23)] public virtual string Language { get; set; }

    [DataMember(Order = 24)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 25)] public virtual string Nickname { get; set; }

    [DataMember(Order = 26)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 27)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 28)] public virtual string Salt { get; set; }

    [DataMember(Order = 29)] public virtual string PasswordHash { get; set; }

    [DataMember(Order = 30)] public virtual string DigestHa1Hash { get; set; }

    [DataMember(Order = 31)] public virtual string Roles { get; set; }

    [DataMember(Order = 32)] public virtual string Permissions { get; set; }

    [DataMember(Order = 33)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 34)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 35)] public virtual int InvalidLoginAttempts { get; set; }

    [DataMember(Order = 36)] public virtual DateTime? LastLoginAttempt { get; set; }

    [DataMember(Order = 37)] public virtual DateTime? LockedDate { get; set; }

    [DataMember(Order = 38)] public virtual string RecoveryToken { get; set; }

    [DataMember(Order = 39)] public virtual int? RefId { get; set; }

    [DataMember(Order = 40)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 41)] public virtual string Meta { get; set; }

    [DataMember(Order = 42)] public virtual Guid AppUserAuthId { get; set; }
}

[Route("/crudevents", "POST")]
[DataContract]
public partial class CreateCrudEvent
    : IReturn<IdResponse>, IPost, ICreateDb<CrudEvent>
{
    [DataMember(Order = 2)] public virtual string EventType { get; set; }

    [DataMember(Order = 3)] public virtual string Model { get; set; }

    [DataMember(Order = 4)] public virtual string ModelId { get; set; }

    [DataMember(Order = 5)] public virtual DateTime EventDate { get; set; }

    [DataMember(Order = 6)] public virtual long? RowsUpdated { get; set; }

    [DataMember(Order = 7)] public virtual string RequestType { get; set; }

    [DataMember(Order = 8)] public virtual string RequestBody { get; set; }

    [DataMember(Order = 9)] public virtual string UserAuthId { get; set; }

    [DataMember(Order = 10)] public virtual string UserAuthName { get; set; }

    [DataMember(Order = 11)] public virtual string RemoteIp { get; set; }

    [DataMember(Order = 12)] public virtual string Urn { get; set; }

    [DataMember(Order = 13)] public virtual int? RefId { get; set; }

    [DataMember(Order = 14)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 15)] public virtual string Meta { get; set; }
}

[Route("/measurementdetails", "POST")]
[DataContract]
public partial class CreateMeasurementDetails
    : IReturn<IdResponse>, IPost, ICreateDb<MeasurementDetails>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 6)] public virtual Guid? TreatmentName { get; set; }

    [DataMember(Order = 7)] public virtual Guid? MeasurementTypeId { get; set; }

    [DataMember(Order = 8)] public virtual string MeasurementTypeName { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitId { get; set; }

    [DataMember(Order = 10)] public virtual string CustomerNotes { get; set; }

    [DataMember(Order = 11)] public virtual string Name { get; set; }
}

[Route("/measurements", "POST")]
[DataContract]
public partial class CreateMeasurements
    : IReturn<IdResponse>, IPost, ICreateDb<Measurements>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] public virtual string TreatmentType { get; set; }
}

[Route("/measurementtypes", "POST")]
[DataContract]
public partial class CreateMeasurementTypes
    : IReturn<IdResponse>, IPost, ICreateDb<MeasurementTypes>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentTypeId { get; set; }
}

[Route("/migrations", "POST")]
[DataContract]
public partial class CreateMigrations
    : IReturn<IdResponse>, IPost, ICreateDb<Migrations>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual string Name { get; set; }

    [DataMember(Order = 3)] public virtual string Hash { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? ExecutedAt { get; set; }
}

[Route("/schedules", "POST")]
[DataContract]
public partial class CreateSchedules
    : IReturn<IdResponse>, IPost, ICreateDb<Schedules>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ScheduleTime { get; set; }

    [DataMember(Order = 6)] public virtual DateTime? StartDate { get; set; }

    [DataMember(Order = 7)] public virtual DateTime? EndDate { get; set; }

    [DataMember(Order = 8)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 9)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 10)] public virtual bool? IsWeekendDifferent { get; set; }

    [DataMember(Order = 11)] public virtual Guid? AppointmentId { get; set; }

    [DataMember(Order = 12)] public virtual Guid? TreatmentUserId { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? LastRunTime { get; set; }

    [DataMember(Order = 14)] public virtual string LastRunStatus { get; set; }

    [DataMember(Order = 15)] public virtual DateTime? NextRunDateTime { get; set; }
}

[Route("/schemamigrations", "POST")]
[DataContract]
public partial class CreateSchemaMigrations
    : IReturn<IdResponse>, IPost, ICreateDb<SchemaMigrations>
{
    [DataMember(Order = 1)] public virtual long Version { get; set; }

    [DataMember(Order = 2)] public virtual bool Dirty { get; set; }
}

[Route("/treatmentremindersounds", "POST")]
[DataContract]
public partial class CreateTreatmentReminderSounds
    : IReturn<IdResponse>, IPost, ICreateDb<TreatmentReminderSounds>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual string Name { get; set; }

    [DataMember(Order = 4)] public virtual string Description { get; set; }
}

[Route("/treatments", "POST")]
[DataContract]
public partial class CreateTreatments
    : IReturn<IdResponse>, IPost, ICreateDb<Treatments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 8)] public virtual Guid AppUserAuthId { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitsId { get; set; }

    [DataMember(Order = 10)] public virtual Guid TreatmentReminderSoundId { get; set; }

    [DataMember(Order = 11)] public virtual bool? IsMuted { get; set; }

    [DataMember(Order = 12)] public virtual int? DailyFrequency { get; set; }

    [DataMember(Order = 13)] public virtual Guid? MeasurementTypesId { get; set; }

    [DataMember(Order = 14)] public virtual string MeasurementTypesName { get; set; }

    [DataMember(Order = 15)] public virtual string UnitsPlanned { get; set; }
}

[Route("/treatmentscheduledevents", "POST")]
[DataContract]
public partial class CreateTreatmentScheduledEvents
    : IReturn<IdResponse>, IPost, ICreateDb<TreatmentScheduledEvents>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual short? Mood { get; set; }

    [DataMember(Order = 6)] public virtual Guid? ScheduleId { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 9)] public virtual Guid TreatmentUserId { get; set; }

    [DataMember(Order = 10)] public virtual string TreatmentUserName { get; set; }

    [DataMember(Order = 11)] public virtual string TreatmentDescription { get; set; }

    [DataMember(Order = 12)] public virtual int? Completed { get; set; }

    [DataMember(Order = 13)] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 14)] public virtual Guid MeasurementTypeName { get; set; }

    [DataMember(Order = 15)] public virtual Guid? MeasurementId { get; set; }

    [DataMember(Order = 16)] public virtual string MeasurementName { get; set; }

    [DataMember(Order = 17)] public virtual string UnitsPlanned { get; set; }

    [DataMember(Order = 18)] public virtual string UnitsTaken { get; set; }

    [DataMember(Order = 19)] public virtual Guid? UnitTypesId { get; set; }

    [DataMember(Order = 20)] public virtual string UnitsTypeName { get; set; }

    [DataMember(Order = 21)] public virtual DateTime? DateTimeEventPlanned { get; set; }

    [DataMember(Order = 22)] public virtual DateTime? DateTimeUserConfirmedEvent { get; set; }

    [DataMember(Order = 23)] public virtual DateTime? DateTimeSkippedEvent { get; set; }

    [DataMember(Order = 24)] public virtual string CustomerNotes { get; set; }
}

[Route("/appointments/{Id}", "DELETE")]
[DataContract]
public partial class DeleteAppointments
    : IReturn<IdResponse>, IDelete, IDeleteDb<Appointments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/appusers/{Id}", "DELETE")]
[DataContract]
public partial class DeleteAppUser
    : IReturn<IdResponse>, IDelete, IDeleteDb<AppUser>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }
}

[Route("/crudevents/{Id}", "DELETE")]
[DataContract]
public partial class DeleteCrudEvent
    : IReturn<IdResponse>, IDelete, IDeleteDb<CrudEvent>
{
    [DataMember(Order = 1)] public virtual long Id { get; set; }
}

[Route("/measurementdetails/{Id}", "DELETE")]
[DataContract]
public partial class DeleteMeasurementDetails
    : IReturn<IdResponse>, IDelete, IDeleteDb<MeasurementDetails>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/measurements/{Id}", "DELETE")]
[DataContract]
public partial class DeleteMeasurements
    : IReturn<IdResponse>, IDelete, IDeleteDb<Measurements>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/measurementtypes/{Id}", "DELETE")]
[DataContract]
public partial class DeleteMeasurementTypes
    : IReturn<IdResponse>, IDelete, IDeleteDb<MeasurementTypes>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/migrations/{Id}", "DELETE")]
[DataContract]
public partial class DeleteMigrations
    : IReturn<IdResponse>, IDelete, IDeleteDb<Migrations>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/schedules/{Id}", "DELETE")]
[DataContract]
public partial class DeleteSchedules
    : IReturn<IdResponse>, IDelete, IDeleteDb<Schedules>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/schemamigrations/{Version}", "DELETE")]
[DataContract]
public partial class DeleteSchemaMigrations
    : IReturn<IdResponse>, IDelete, IDeleteDb<SchemaMigrations>
{
    [DataMember(Order = 1)] public virtual long Version { get; set; }
}

[Route("/treatmentremindersounds/{Id}", "DELETE")]
[DataContract]
public partial class DeleteTreatmentReminderSounds
    : IReturn<IdResponse>, IDelete, IDeleteDb<TreatmentReminderSounds>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/treatments/{Id}", "DELETE")]
[DataContract]
public partial class DeleteTreatments
    : IReturn<IdResponse>, IDelete, IDeleteDb<Treatments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[Route("/treatmentscheduledevents/{Id}", "DELETE")]
[DataContract]
public partial class DeleteTreatmentScheduledEvents
    : IReturn<IdResponse>, IDelete, IDeleteDb<TreatmentScheduledEvents>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }
}

[DataContract]
public partial class MeasurementDetails
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 6)] public virtual Guid? TreatmentName { get; set; }

    [DataMember(Order = 7)] public virtual Guid? MeasurementTypeId { get; set; }

    [DataMember(Order = 8)] public virtual string MeasurementTypeName { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitId { get; set; }

    [DataMember(Order = 10)] public virtual string CustomerNotes { get; set; }

    [DataMember(Order = 11)] public virtual string Name { get; set; }
}

[DataContract]
public partial class Measurements
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] [Required] public virtual string TreatmentType { get; set; }
}

[DataContract]
public partial class MeasurementTypes
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentTypeId { get; set; }
}

[DataContract]
public partial class Migrations
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] [Required] public virtual string Name { get; set; }

    [DataMember(Order = 3)] [Required] public virtual string Hash { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? ExecutedAt { get; set; }
}

[Route("/appointments/{Id}", "PATCH")]
[DataContract]
public partial class PatchAppointments
    : IReturn<IdResponse>, IPatch, IPatchDb<Appointments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ApptDateTime { get; set; }

    [DataMember(Order = 6)] public virtual string Place { get; set; }

    [DataMember(Order = 7)] public virtual string PlaceNotes { get; set; }

    [DataMember(Order = 8)] public virtual string ProviderName { get; set; }

    [DataMember(Order = 9)] public virtual Guid AppUserAuthId { get; set; }
}

[Route("/appusers/{Id}", "PATCH")]
[DataContract]
public partial class PatchAppUser
    : IReturn<IdResponse>, IPatch, IPatchDb<AppUser>
{
    [DataMember(Order = 1)] public virtual string ProfileUrl { get; set; }

    [DataMember(Order = 2)] public virtual string LastLoginIp { get; set; }

    [DataMember(Order = 3)] public virtual DateTime? LastLoginDate { get; set; }

    [DataMember(Order = 4)] public virtual int Id { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string Email { get; set; }

    [DataMember(Order = 7)] public virtual string PrimaryEmail { get; set; }

    [DataMember(Order = 8)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 9)] public virtual string FirstName { get; set; }

    [DataMember(Order = 10)] public virtual string LastName { get; set; }

    [DataMember(Order = 11)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 12)] public virtual string Company { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string FullName { get; set; }

    [DataMember(Order = 22)] public virtual string Gender { get; set; }

    [DataMember(Order = 23)] public virtual string Language { get; set; }

    [DataMember(Order = 24)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 25)] public virtual string Nickname { get; set; }

    [DataMember(Order = 26)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 27)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 28)] public virtual string Salt { get; set; }

    [DataMember(Order = 29)] public virtual string PasswordHash { get; set; }

    [DataMember(Order = 30)] public virtual string DigestHa1Hash { get; set; }

    [DataMember(Order = 31)] public virtual string Roles { get; set; }

    [DataMember(Order = 32)] public virtual string Permissions { get; set; }

    [DataMember(Order = 33)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 34)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 35)] public virtual int InvalidLoginAttempts { get; set; }

    [DataMember(Order = 36)] public virtual DateTime? LastLoginAttempt { get; set; }

    [DataMember(Order = 37)] public virtual DateTime? LockedDate { get; set; }

    [DataMember(Order = 38)] public virtual string RecoveryToken { get; set; }

    [DataMember(Order = 39)] public virtual int? RefId { get; set; }

    [DataMember(Order = 40)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 41)] public virtual string Meta { get; set; }

    [DataMember(Order = 42)] public virtual Guid AppUserAuthId { get; set; }
}

[Route("/measurementdetails/{Id}", "PATCH")]
[DataContract]
public partial class PatchMeasurementDetails
    : IReturn<IdResponse>, IPatch, IPatchDb<MeasurementDetails>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 6)] public virtual Guid? TreatmentName { get; set; }

    [DataMember(Order = 7)] public virtual Guid? MeasurementTypeId { get; set; }

    [DataMember(Order = 8)] public virtual string MeasurementTypeName { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitId { get; set; }

    [DataMember(Order = 10)] public virtual string CustomerNotes { get; set; }

    [DataMember(Order = 11)] public virtual string Name { get; set; }
}

[Route("/measurements/{Id}", "PATCH")]
[DataContract]
public partial class PatchMeasurements
    : IReturn<IdResponse>, IPatch, IPatchDb<Measurements>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] public virtual string TreatmentType { get; set; }
}

[Route("/measurementtypes/{Id}", "PATCH")]
[DataContract]
public partial class PatchMeasurementTypes
    : IReturn<IdResponse>, IPatch, IPatchDb<MeasurementTypes>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentTypeId { get; set; }
}

[Route("/migrations/{Id}", "PATCH")]
[DataContract]
public partial class PatchMigrations
    : IReturn<IdResponse>, IPatch, IPatchDb<Migrations>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual string Name { get; set; }

    [DataMember(Order = 3)] public virtual string Hash { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? ExecutedAt { get; set; }
}

[Route("/schedules/{Id}", "PATCH")]
[DataContract]
public partial class PatchSchedules
    : IReturn<IdResponse>, IPatch, IPatchDb<Schedules>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ScheduleTime { get; set; }

    [DataMember(Order = 6)] public virtual DateTime? StartDate { get; set; }

    [DataMember(Order = 7)] public virtual DateTime? EndDate { get; set; }

    [DataMember(Order = 8)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 9)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 10)] public virtual bool? IsWeekendDifferent { get; set; }

    [DataMember(Order = 11)] public virtual Guid? AppointmentId { get; set; }

    [DataMember(Order = 12)] public virtual Guid? TreatmentUserId { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? LastRunTime { get; set; }

    [DataMember(Order = 14)] public virtual string LastRunStatus { get; set; }

    [DataMember(Order = 15)] public virtual DateTime? NextRunDateTime { get; set; }
}

[Route("/schemamigrations/{Version}", "PATCH")]
[DataContract]
public partial class PatchSchemaMigrations
    : IReturn<IdResponse>, IPatch, IPatchDb<SchemaMigrations>
{
    [DataMember(Order = 1)] public virtual long Version { get; set; }

    [DataMember(Order = 2)] public virtual bool Dirty { get; set; }
}

[Route("/treatmentremindersounds/{Id}", "PATCH")]
[DataContract]
public partial class PatchTreatmentReminderSounds
    : IReturn<IdResponse>, IPatch, IPatchDb<TreatmentReminderSounds>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual string Name { get; set; }

    [DataMember(Order = 4)] public virtual string Description { get; set; }
}

[Route("/treatments/{Id}", "PATCH")]
[DataContract]
public partial class PatchTreatments
    : IReturn<IdResponse>, IPatch, IPatchDb<Treatments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 8)] public virtual Guid AppUserAuthId { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitsId { get; set; }

    [DataMember(Order = 10)] public virtual Guid TreatmentReminderSoundId { get; set; }

    [DataMember(Order = 11)] public virtual bool? IsMuted { get; set; }

    [DataMember(Order = 12)] public virtual int? DailyFrequency { get; set; }

    [DataMember(Order = 13)] public virtual Guid? MeasurementTypesId { get; set; }

    [DataMember(Order = 14)] public virtual string MeasurementTypesName { get; set; }

    [DataMember(Order = 15)] public virtual string UnitsPlanned { get; set; }
}

[Route("/treatmentscheduledevents/{Id}", "PATCH")]
[DataContract]
public partial class PatchTreatmentScheduledEvents
    : IReturn<IdResponse>, IPatch, IPatchDb<TreatmentScheduledEvents>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual short? Mood { get; set; }

    [DataMember(Order = 6)] public virtual Guid? ScheduleId { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 9)] public virtual Guid TreatmentUserId { get; set; }

    [DataMember(Order = 10)] public virtual string TreatmentUserName { get; set; }

    [DataMember(Order = 11)] public virtual string TreatmentDescription { get; set; }

    [DataMember(Order = 12)] public virtual int? Completed { get; set; }

    [DataMember(Order = 13)] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 14)] public virtual Guid MeasurementTypeName { get; set; }

    [DataMember(Order = 15)] public virtual Guid? MeasurementId { get; set; }

    [DataMember(Order = 16)] public virtual string MeasurementName { get; set; }

    [DataMember(Order = 17)] public virtual string UnitsPlanned { get; set; }

    [DataMember(Order = 18)] public virtual string UnitsTaken { get; set; }

    [DataMember(Order = 19)] public virtual Guid? UnitTypesId { get; set; }

    [DataMember(Order = 20)] public virtual string UnitsTypeName { get; set; }

    [DataMember(Order = 21)] public virtual DateTime? DateTimeEventPlanned { get; set; }

    [DataMember(Order = 22)] public virtual DateTime? DateTimeUserConfirmedEvent { get; set; }

    [DataMember(Order = 23)] public virtual DateTime? DateTimeSkippedEvent { get; set; }

    [DataMember(Order = 24)] public virtual string CustomerNotes { get; set; }
}

[Route("/appointments", "GET")]
[Route("/appointments/{Id}", "GET")]
[DataContract]
public partial class QueryAppointments
    : QueryDb<Appointments>, IReturn<QueryResponse<Appointments>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/appusers", "GET")]
[Route("/appusers/{Id}", "GET")]
[DataContract]
public partial class QueryAppUsers
    : QueryDb<AppUser>, IReturn<QueryResponse<AppUser>>, IGet
{
    [DataMember(Order = 1)] public virtual int? Id { get; set; }
}

[Route("/measurementdetails", "GET")]
[Route("/measurementdetails/{Id}", "GET")]
[DataContract]
public partial class QueryMeasurementDetails
    : QueryDb<MeasurementDetails>, IReturn<QueryResponse<MeasurementDetails>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/measurements", "GET")]
[Route("/measurements/{Id}", "GET")]
[DataContract]
public partial class QueryMeasurements
    : QueryDb<Measurements>, IReturn<QueryResponse<Measurements>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/measurementtypes", "GET")]
[Route("/measurementtypes/{Id}", "GET")]
[DataContract]
public partial class QueryMeasurementTypes
    : QueryDb<MeasurementTypes>, IReturn<QueryResponse<MeasurementTypes>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/migrations", "GET")]
[Route("/migrations/{Id}", "GET")]
[DataContract]
public partial class QueryMigrations
    : QueryDb<Migrations>, IReturn<QueryResponse<Migrations>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/schedules", "GET")]
[Route("/schedules/{Id}", "GET")]
[DataContract]
public partial class QuerySchedules
    : QueryDb<Schedules>, IReturn<QueryResponse<Schedules>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/schemamigrations", "GET")]
[Route("/schemamigrations/{Version}", "GET")]
[DataContract]
public partial class QuerySchemaMigrations
    : QueryDb<SchemaMigrations>, IReturn<QueryResponse<SchemaMigrations>>, IGet
{
    [DataMember(Order = 1)] public virtual long? Version { get; set; }
}

[Route("/treatmentremindersounds", "GET")]
[Route("/treatmentremindersounds/{Id}", "GET")]
[DataContract]
public partial class QueryTreatmentReminderSounds
    : QueryDb<TreatmentReminderSounds>, IReturn<QueryResponse<TreatmentReminderSounds>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/treatments", "GET")]
[Route("/treatments/{Id}", "GET")]
[DataContract]
public partial class QueryTreatments
    : QueryDb<Treatments>, IReturn<QueryResponse<Treatments>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[Route("/treatmentscheduledevents", "GET")]
[Route("/treatmentscheduledevents/{Id}", "GET")]
[DataContract]
public partial class QueryTreatmentScheduledEvents
    : QueryDb<TreatmentScheduledEvents>, IReturn<QueryResponse<TreatmentScheduledEvents>>, IGet
{
    [DataMember(Order = 1)] public virtual Guid? Id { get; set; }
}

[DataContract]
public partial class Schedules
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ScheduleTime { get; set; }

    [DataMember(Order = 6)] public virtual DateTime? StartDate { get; set; }

    [DataMember(Order = 7)] public virtual DateTime? EndDate { get; set; }

    [DataMember(Order = 8)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 9)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 10)] public virtual bool? IsWeekendDifferent { get; set; }

    [DataMember(Order = 11)] public virtual Guid? AppointmentId { get; set; }

    [DataMember(Order = 12)] public virtual Guid? TreatmentUserId { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? LastRunTime { get; set; }

    [DataMember(Order = 14)] public virtual string LastRunStatus { get; set; }

    [DataMember(Order = 15)] public virtual DateTime? NextRunDateTime { get; set; }
}

[DataContract]
public partial class SchemaMigrations
{
    [DataMember(Order = 1)] public virtual long Version { get; set; }

    [DataMember(Order = 2)] public virtual bool Dirty { get; set; }
}

[DataContract]
public partial class TreatmentReminderSounds
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual string Name { get; set; }

    [DataMember(Order = 4)] public virtual string Description { get; set; }
}

[DataContract]
public partial class Treatments
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] [Required] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 8)] public virtual Guid AppUserAuthId { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitsId { get; set; }

    [DataMember(Order = 10)] public virtual Guid TreatmentReminderSoundId { get; set; }

    [DataMember(Order = 11)] public virtual bool? IsMuted { get; set; }

    [DataMember(Order = 12)] public virtual int? DailyFrequency { get; set; }

    [DataMember(Order = 13)] public virtual Guid? MeasurementTypesId { get; set; }

    [DataMember(Order = 14)] public virtual string MeasurementTypesName { get; set; }

    [DataMember(Order = 15)] public virtual string UnitsPlanned { get; set; }
}

[DataContract]
public partial class TreatmentScheduledEvents
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual short? Mood { get; set; }

    [DataMember(Order = 6)] public virtual Guid? ScheduleId { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 9)] public virtual Guid TreatmentUserId { get; set; }

    [DataMember(Order = 10)] public virtual string TreatmentUserName { get; set; }

    [DataMember(Order = 11)] public virtual string TreatmentDescription { get; set; }

    [DataMember(Order = 12)] public virtual int? Completed { get; set; }

    [DataMember(Order = 13)] [Required] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 14)] public virtual Guid MeasurementTypeName { get; set; }

    [DataMember(Order = 15)] public virtual Guid? MeasurementId { get; set; }

    [DataMember(Order = 16)] public virtual string MeasurementName { get; set; }

    [DataMember(Order = 17)] public virtual string UnitsPlanned { get; set; }

    [DataMember(Order = 18)] public virtual string UnitsTaken { get; set; }

    [DataMember(Order = 19)] public virtual Guid? UnitTypesId { get; set; }

    [DataMember(Order = 20)] public virtual string UnitsTypeName { get; set; }

    [DataMember(Order = 21)] public virtual DateTime? DateTimeEventPlanned { get; set; }

    [DataMember(Order = 22)] public virtual DateTime? DateTimeUserConfirmedEvent { get; set; }

    [DataMember(Order = 23)] public virtual DateTime? DateTimeSkippedEvent { get; set; }

    [DataMember(Order = 24)] public virtual string CustomerNotes { get; set; }
}

[Route("/appointments/{Id}", "PUT")]
[DataContract]
public partial class UpdateAppointments
    : IReturn<IdResponse>, IPut, IUpdateDb<Appointments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ApptDateTime { get; set; }

    [DataMember(Order = 6)] public virtual string Place { get; set; }

    [DataMember(Order = 7)] public virtual string PlaceNotes { get; set; }

    [DataMember(Order = 8)] public virtual string ProviderName { get; set; }

    [DataMember(Order = 9)] public virtual Guid AppUserAuthId { get; set; }
}

[Route("/appusers/{Id}", "PUT")]
[DataContract]
public partial class UpdateAppUser
    : IReturn<IdResponse>, IPut, IUpdateDb<AppUser>
{
    [DataMember(Order = 1)] public virtual string ProfileUrl { get; set; }

    [DataMember(Order = 2)] public virtual string LastLoginIp { get; set; }

    [DataMember(Order = 3)] public virtual DateTime? LastLoginDate { get; set; }

    [DataMember(Order = 4)] public virtual int Id { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string Email { get; set; }

    [DataMember(Order = 7)] public virtual string PrimaryEmail { get; set; }

    [DataMember(Order = 8)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 9)] public virtual string FirstName { get; set; }

    [DataMember(Order = 10)] public virtual string LastName { get; set; }

    [DataMember(Order = 11)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 12)] public virtual string Company { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string FullName { get; set; }

    [DataMember(Order = 22)] public virtual string Gender { get; set; }

    [DataMember(Order = 23)] public virtual string Language { get; set; }

    [DataMember(Order = 24)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 25)] public virtual string Nickname { get; set; }

    [DataMember(Order = 26)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 27)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 28)] public virtual string Salt { get; set; }

    [DataMember(Order = 29)] public virtual string PasswordHash { get; set; }

    [DataMember(Order = 30)] public virtual string DigestHa1Hash { get; set; }

    [DataMember(Order = 31)] public virtual string Roles { get; set; }

    [DataMember(Order = 32)] public virtual string Permissions { get; set; }

    [DataMember(Order = 33)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 34)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 35)] public virtual int InvalidLoginAttempts { get; set; }

    [DataMember(Order = 36)] public virtual DateTime? LastLoginAttempt { get; set; }

    [DataMember(Order = 37)] public virtual DateTime? LockedDate { get; set; }

    [DataMember(Order = 38)] public virtual string RecoveryToken { get; set; }

    [DataMember(Order = 39)] public virtual int? RefId { get; set; }

    [DataMember(Order = 40)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 41)] public virtual string Meta { get; set; }

    [DataMember(Order = 42)] public virtual Guid AppUserAuthId { get; set; }
}

[Route("/crudevents/{Id}", "PUT")]
[DataContract]
public partial class UpdateCrudEvent
    : IReturn<IdResponse>, IPut, IUpdateDb<CrudEvent>
{
    [DataMember(Order = 1)] public virtual long Id { get; set; }

    [DataMember(Order = 2)] public virtual string EventType { get; set; }

    [DataMember(Order = 3)] public virtual string Model { get; set; }

    [DataMember(Order = 4)] public virtual string ModelId { get; set; }

    [DataMember(Order = 5)] public virtual DateTime EventDate { get; set; }

    [DataMember(Order = 6)] public virtual long? RowsUpdated { get; set; }

    [DataMember(Order = 7)] public virtual string RequestType { get; set; }

    [DataMember(Order = 8)] public virtual string RequestBody { get; set; }

    [DataMember(Order = 9)] public virtual string UserAuthId { get; set; }

    [DataMember(Order = 10)] public virtual string UserAuthName { get; set; }

    [DataMember(Order = 11)] public virtual string RemoteIp { get; set; }

    [DataMember(Order = 12)] public virtual string Urn { get; set; }

    [DataMember(Order = 13)] public virtual int? RefId { get; set; }

    [DataMember(Order = 14)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 15)] public virtual string Meta { get; set; }
}

[Route("/measurementdetails/{Id}", "PUT")]
[DataContract]
public partial class UpdateMeasurementDetails
    : IReturn<IdResponse>, IPut, IUpdateDb<MeasurementDetails>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 6)] public virtual Guid? TreatmentName { get; set; }

    [DataMember(Order = 7)] public virtual Guid? MeasurementTypeId { get; set; }

    [DataMember(Order = 8)] public virtual string MeasurementTypeName { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitId { get; set; }

    [DataMember(Order = 10)] public virtual string CustomerNotes { get; set; }

    [DataMember(Order = 11)] public virtual string Name { get; set; }
}

[Route("/measurements/{Id}", "PUT")]
[DataContract]
public partial class UpdateMeasurements
    : IReturn<IdResponse>, IPut, IUpdateDb<Measurements>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] public virtual string TreatmentType { get; set; }
}

[Route("/measurementtypes/{Id}", "PUT")]
[DataContract]
public partial class UpdateMeasurementTypes
    : IReturn<IdResponse>, IPut, IUpdateDb<MeasurementTypes>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentTypeId { get; set; }
}

[Route("/migrations/{Id}", "PUT")]
[DataContract]
public partial class UpdateMigrations
    : IReturn<IdResponse>, IPut, IUpdateDb<Migrations>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual string Name { get; set; }

    [DataMember(Order = 3)] public virtual string Hash { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? ExecutedAt { get; set; }
}

[Route("/schedules/{Id}", "PUT")]
[DataContract]
public partial class UpdateSchedules
    : IReturn<IdResponse>, IPut, IUpdateDb<Schedules>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual DateTime? ScheduleTime { get; set; }

    [DataMember(Order = 6)] public virtual DateTime? StartDate { get; set; }

    [DataMember(Order = 7)] public virtual DateTime? EndDate { get; set; }

    [DataMember(Order = 8)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 9)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 10)] public virtual bool? IsWeekendDifferent { get; set; }

    [DataMember(Order = 11)] public virtual Guid? AppointmentId { get; set; }

    [DataMember(Order = 12)] public virtual Guid? TreatmentUserId { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? LastRunTime { get; set; }

    [DataMember(Order = 14)] public virtual string LastRunStatus { get; set; }

    [DataMember(Order = 15)] public virtual DateTime? NextRunDateTime { get; set; }
}

[Route("/schemamigrations/{Version}", "PUT")]
[DataContract]
public partial class UpdateSchemaMigrations
    : IReturn<IdResponse>, IPut, IUpdateDb<SchemaMigrations>
{
    [DataMember(Order = 1)] public virtual long Version { get; set; }

    [DataMember(Order = 2)] public virtual bool Dirty { get; set; }
}

[Route("/treatmentremindersounds/{Id}", "PUT")]
[DataContract]
public partial class UpdateTreatmentReminderSounds
    : IReturn<IdResponse>, IPut, IUpdateDb<TreatmentReminderSounds>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual string Name { get; set; }

    [DataMember(Order = 4)] public virtual string Description { get; set; }
}

[Route("/treatments/{Id}", "PUT")]
[DataContract]
public partial class UpdateTreatments
    : IReturn<IdResponse>, IPut, IUpdateDb<Treatments>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual string Name { get; set; }

    [DataMember(Order = 6)] public virtual string Description { get; set; }

    [DataMember(Order = 7)] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 8)] public virtual Guid AppUserAuthId { get; set; }

    [DataMember(Order = 9)] public virtual Guid? UnitsId { get; set; }

    [DataMember(Order = 10)] public virtual Guid TreatmentReminderSoundId { get; set; }

    [DataMember(Order = 11)] public virtual bool? IsMuted { get; set; }

    [DataMember(Order = 12)] public virtual int? DailyFrequency { get; set; }

    [DataMember(Order = 13)] public virtual Guid? MeasurementTypesId { get; set; }

    [DataMember(Order = 14)] public virtual string MeasurementTypesName { get; set; }

    [DataMember(Order = 15)] public virtual string UnitsPlanned { get; set; }
}

[Route("/treatmentscheduledevents/{Id}", "PUT")]
[DataContract]
public partial class UpdateTreatmentScheduledEvents
    : IReturn<IdResponse>, IPut, IUpdateDb<TreatmentScheduledEvents>
{
    [DataMember(Order = 1)] public virtual Guid Id { get; set; }

    [DataMember(Order = 2)] public virtual DateTime CreatedAt { get; set; }

    [DataMember(Order = 3)] public virtual DateTime UpdatedAt { get; set; }

    [DataMember(Order = 4)] public virtual DateTime? DeletedAt { get; set; }

    [DataMember(Order = 5)] public virtual short? Mood { get; set; }

    [DataMember(Order = 6)] public virtual Guid? ScheduleId { get; set; }

    [DataMember(Order = 7)] public virtual Guid? TreatmentId { get; set; }

    [DataMember(Order = 8)] public virtual string TreatmentName { get; set; }

    [DataMember(Order = 9)] public virtual Guid TreatmentUserId { get; set; }

    [DataMember(Order = 10)] public virtual string TreatmentUserName { get; set; }

    [DataMember(Order = 11)] public virtual string TreatmentDescription { get; set; }

    [DataMember(Order = 12)] public virtual int? Completed { get; set; }

    [DataMember(Order = 13)] public virtual string TreatmentType { get; set; }

    [DataMember(Order = 14)] public virtual Guid MeasurementTypeName { get; set; }

    [DataMember(Order = 15)] public virtual Guid? MeasurementId { get; set; }

    [DataMember(Order = 16)] public virtual string MeasurementName { get; set; }

    [DataMember(Order = 17)] public virtual string UnitsPlanned { get; set; }

    [DataMember(Order = 18)] public virtual string UnitsTaken { get; set; }

    [DataMember(Order = 19)] public virtual Guid? UnitTypesId { get; set; }

    [DataMember(Order = 20)] public virtual string UnitsTypeName { get; set; }

    [DataMember(Order = 21)] public virtual DateTime? DateTimeEventPlanned { get; set; }

    [DataMember(Order = 22)] public virtual DateTime? DateTimeUserConfirmedEvent { get; set; }

    [DataMember(Order = 23)] public virtual DateTime? DateTimeSkippedEvent { get; set; }

    [DataMember(Order = 24)] public virtual string CustomerNotes { get; set; }
}

[Route("/userauthdetails/{Id}", "PUT")]
[DataContract]
public partial class UpdateUserAuthDetails
    : IReturn<IdResponse>, IPut, IUpdateDb<UserAuthDetails>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Provider { get; set; }

    [DataMember(Order = 4)] public virtual string UserId { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string FullName { get; set; }

    [DataMember(Order = 7)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 8)] public virtual string FirstName { get; set; }

    [DataMember(Order = 9)] public virtual string LastName { get; set; }

    [DataMember(Order = 10)] public virtual string Company { get; set; }

    [DataMember(Order = 11)] public virtual string Email { get; set; }

    [DataMember(Order = 12)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string Gender { get; set; }

    [DataMember(Order = 22)] public virtual string Language { get; set; }

    [DataMember(Order = 23)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 24)] public virtual string Nickname { get; set; }

    [DataMember(Order = 25)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 26)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 27)] public virtual string RefreshToken { get; set; }

    [DataMember(Order = 28)] public virtual DateTime? RefreshTokenExpiry { get; set; }

    [DataMember(Order = 29)] public virtual string RequestToken { get; set; }

    [DataMember(Order = 30)] public virtual string RequestTokenSecret { get; set; }

    [DataMember(Order = 31)] public virtual string Items { get; set; }

    [DataMember(Order = 32)] public virtual string AccessToken { get; set; }

    [DataMember(Order = 33)] public virtual string AccessTokenSecret { get; set; }

    [DataMember(Order = 34)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 35)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 36)] public virtual int? RefId { get; set; }

    [DataMember(Order = 37)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 38)] public virtual string Meta { get; set; }
}

[Route("/userauthroles/{Id}", "PUT")]
[DataContract]
public partial class UpdateUserAuthRole
    : IReturn<IdResponse>, IPut, IUpdateDb<UserAuthRole>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Role { get; set; }

    [DataMember(Order = 4)] public virtual string Permission { get; set; }

    [DataMember(Order = 5)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 6)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 7)] public virtual int? RefId { get; set; }

    [DataMember(Order = 8)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 9)] public virtual string Meta { get; set; }
}

///<summary>
///Booking Details
///</summary>
[DataContract]
public partial class Booking
    : AuditBase
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual string Name { get; set; }

    [DataMember(Order = 3)] public virtual RoomType RoomType { get; set; }

    [DataMember(Order = 4)] public virtual int RoomNumber { get; set; }

    [DataMember(Order = 5)] public virtual DateTime BookingStartDate { get; set; }

    [DataMember(Order = 6)] public virtual DateTime? BookingEndDate { get; set; }

    [DataMember(Order = 7)] public virtual decimal Cost { get; set; }

    [DataMember(Order = 8)] public virtual string Notes { get; set; }

    [DataMember(Order = 9)] public virtual bool? Cancelled { get; set; }
}

///<summary>
///Create a new Booking
///</summary>
[Route("/bookings", "POST")]
[ValidateRequest("HasRole(`Employee`)")]
[DataContract]
public partial class CreateBooking
    : IReturn<IdResponse>, ICreateDb<Booking>
{
    ///<summary>
    ///Name this Booking is for
    ///</summary>
    [DataMember(Order = 1)]
    [Validate("NotEmpty")]
    public virtual string Name { get; set; }

    [DataMember(Order = 2)] public virtual RoomType RoomType { get; set; }

    [DataMember(Order = 3)]
    [Validate("GreaterThan(0)")]
    public virtual int RoomNumber { get; set; }

    [DataMember(Order = 4)]
    [Validate("GreaterThan(0)")]
    public virtual decimal Cost { get; set; }

    [DataMember(Order = 5)] public virtual DateTime BookingStartDate { get; set; }

    [DataMember(Order = 6)] public virtual DateTime? BookingEndDate { get; set; }

    [DataMember(Order = 7)]
    [Input(Type = "textarea")]
    public virtual string Notes { get; set; }
}

[Route("/todos", "POST")]
[DataContract]
public partial class CreateTodo
    : IReturn<Todo>, IPost
{
    [DataMember(Order = 1)]
    [Validate("NotEmpty")]
    public virtual string Text { get; set; }
}

[Route("/userauthdetails", "POST")]
[DataContract]
public partial class CreateUserAuthDetails
    : IReturn<IdResponse>, IPost, ICreateDb<UserAuthDetails>
{
    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Provider { get; set; }

    [DataMember(Order = 4)] public virtual string UserId { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string FullName { get; set; }

    [DataMember(Order = 7)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 8)] public virtual string FirstName { get; set; }

    [DataMember(Order = 9)] public virtual string LastName { get; set; }

    [DataMember(Order = 10)] public virtual string Company { get; set; }

    [DataMember(Order = 11)] public virtual string Email { get; set; }

    [DataMember(Order = 12)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string Gender { get; set; }

    [DataMember(Order = 22)] public virtual string Language { get; set; }

    [DataMember(Order = 23)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 24)] public virtual string Nickname { get; set; }

    [DataMember(Order = 25)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 26)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 27)] public virtual string RefreshToken { get; set; }

    [DataMember(Order = 28)] public virtual DateTime? RefreshTokenExpiry { get; set; }

    [DataMember(Order = 29)] public virtual string RequestToken { get; set; }

    [DataMember(Order = 30)] public virtual string RequestTokenSecret { get; set; }

    [DataMember(Order = 31)] public virtual string Items { get; set; }

    [DataMember(Order = 32)] public virtual string AccessToken { get; set; }

    [DataMember(Order = 33)] public virtual string AccessTokenSecret { get; set; }

    [DataMember(Order = 34)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 35)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 36)] public virtual int? RefId { get; set; }

    [DataMember(Order = 37)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 38)] public virtual string Meta { get; set; }
}

[Route("/userauthroles", "POST")]
[DataContract]
public partial class CreateUserAuthRole
    : IReturn<IdResponse>, IPost, ICreateDb<UserAuthRole>
{
    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Role { get; set; }

    [DataMember(Order = 4)] public virtual string Permission { get; set; }

    [DataMember(Order = 5)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 6)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 7)] public virtual int? RefId { get; set; }

    [DataMember(Order = 8)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 9)] public virtual string Meta { get; set; }
}

///<summary>
///Delete a Booking
///</summary>
[Route("/booking/{Id}", "DELETE")]
[ValidateRequest("HasRole(`Manager`)")]
[DataContract]
public partial class DeleteBooking
    : IReturnVoid, IDeleteDb<Booking>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }
}

[Route("/todos/{Id}", "DELETE")]
[DataContract]
public partial class DeleteTodo
    : IReturnVoid, IDelete
{
    [DataMember(Order = 1)] public virtual long Id { get; set; }
}

[Route("/todos", "DELETE")]
[DataContract]
public partial class DeleteTodos
    : IReturnVoid, IDelete
{
    public DeleteTodos()
    {
        Ids = new List<long> { };
    }

    [DataMember(Order = 1)] public virtual List<long> Ids { get; set; }
}

[Route("/userauthdetails/{Id}", "DELETE")]
[DataContract]
public partial class DeleteUserAuthDetails
    : IReturn<IdResponse>, IDelete, IDeleteDb<UserAuthDetails>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }
}

[Route("/userauthroles/{Id}", "DELETE")]
[DataContract]
public partial class DeleteUserAuthRole
    : IReturn<IdResponse>, IDelete, IDeleteDb<UserAuthRole>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }
}

[Route("/hello")]
[Route("/hello/{Name}")]
[DataContract]
public partial class Hello
    : IReturn<HelloResponse>
{
    [DataMember(Order = 1)] public virtual string Name { get; set; }
}

[DataContract]
public partial class HelloResponse
{
    [DataMember(Order = 1)] public virtual string Result { get; set; }
}

[Route("/crudevents/{Id}", "PATCH")]
[DataContract]
public partial class PatchCrudEvent
    : IReturn<IdResponse>, IPatch, IPatchDb<CrudEvent>
{
    [DataMember(Order = 1)] public virtual long Id { get; set; }

    [DataMember(Order = 2)] public virtual string EventType { get; set; }

    [DataMember(Order = 3)] public virtual string Model { get; set; }

    [DataMember(Order = 4)] public virtual string ModelId { get; set; }

    [DataMember(Order = 5)] public virtual DateTime EventDate { get; set; }

    [DataMember(Order = 6)] public virtual long? RowsUpdated { get; set; }

    [DataMember(Order = 7)] public virtual string RequestType { get; set; }

    [DataMember(Order = 8)] public virtual string RequestBody { get; set; }

    [DataMember(Order = 9)] public virtual string UserAuthId { get; set; }

    [DataMember(Order = 10)] public virtual string UserAuthName { get; set; }

    [DataMember(Order = 11)] public virtual string RemoteIp { get; set; }

    [DataMember(Order = 12)] public virtual string Urn { get; set; }

    [DataMember(Order = 13)] public virtual int? RefId { get; set; }

    [DataMember(Order = 14)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 15)] public virtual string Meta { get; set; }
}

[Route("/userauthdetails/{Id}", "PATCH")]
[DataContract]
public partial class PatchUserAuthDetails
    : IReturn<IdResponse>, IPatch, IPatchDb<UserAuthDetails>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Provider { get; set; }

    [DataMember(Order = 4)] public virtual string UserId { get; set; }

    [DataMember(Order = 5)] public virtual string UserName { get; set; }

    [DataMember(Order = 6)] public virtual string FullName { get; set; }

    [DataMember(Order = 7)] public virtual string DisplayName { get; set; }

    [DataMember(Order = 8)] public virtual string FirstName { get; set; }

    [DataMember(Order = 9)] public virtual string LastName { get; set; }

    [DataMember(Order = 10)] public virtual string Company { get; set; }

    [DataMember(Order = 11)] public virtual string Email { get; set; }

    [DataMember(Order = 12)] public virtual string PhoneNumber { get; set; }

    [DataMember(Order = 13)] public virtual DateTime? BirthDate { get; set; }

    [DataMember(Order = 14)] public virtual string BirthDateRaw { get; set; }

    [DataMember(Order = 15)] public virtual string Address { get; set; }

    [DataMember(Order = 16)] public virtual string Address2 { get; set; }

    [DataMember(Order = 17)] public virtual string City { get; set; }

    [DataMember(Order = 18)] public virtual string State { get; set; }

    [DataMember(Order = 19)] public virtual string Country { get; set; }

    [DataMember(Order = 20)] public virtual string Culture { get; set; }

    [DataMember(Order = 21)] public virtual string Gender { get; set; }

    [DataMember(Order = 22)] public virtual string Language { get; set; }

    [DataMember(Order = 23)] public virtual string MailAddress { get; set; }

    [DataMember(Order = 24)] public virtual string Nickname { get; set; }

    [DataMember(Order = 25)] public virtual string PostalCode { get; set; }

    [DataMember(Order = 26)] public virtual string TimeZone { get; set; }

    [DataMember(Order = 27)] public virtual string RefreshToken { get; set; }

    [DataMember(Order = 28)] public virtual DateTime? RefreshTokenExpiry { get; set; }

    [DataMember(Order = 29)] public virtual string RequestToken { get; set; }

    [DataMember(Order = 30)] public virtual string RequestTokenSecret { get; set; }

    [DataMember(Order = 31)] public virtual string Items { get; set; }

    [DataMember(Order = 32)] public virtual string AccessToken { get; set; }

    [DataMember(Order = 33)] public virtual string AccessTokenSecret { get; set; }

    [DataMember(Order = 34)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 35)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 36)] public virtual int? RefId { get; set; }

    [DataMember(Order = 37)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 38)] public virtual string Meta { get; set; }
}

[Route("/userauthroles/{Id}", "PATCH")]
[DataContract]
public partial class PatchUserAuthRole
    : IReturn<IdResponse>, IPatch, IPatchDb<UserAuthRole>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual int UserAuthId { get; set; }

    [DataMember(Order = 3)] public virtual string Role { get; set; }

    [DataMember(Order = 4)] public virtual string Permission { get; set; }

    [DataMember(Order = 5)] public virtual DateTime CreatedDate { get; set; }

    [DataMember(Order = 6)] public virtual DateTime ModifiedDate { get; set; }

    [DataMember(Order = 7)] public virtual int? RefId { get; set; }

    [DataMember(Order = 8)] public virtual string RefIdStr { get; set; }

    [DataMember(Order = 9)] public virtual string Meta { get; set; }
}

///<summary>
///Find Bookings
///</summary>
[Route("/bookings", "GET")]
[Route("/bookings/{Id}", "GET")]
[DataContract]
public partial class QueryBookings
    : QueryDb<Booking>, IReturn<QueryResponse<Booking>>
{
    [DataMember(Order = 1)] public virtual int? Id { get; set; }
}

[Route("/crudevents", "GET")]
[Route("/crudevents/{Id}", "GET")]
[DataContract]
public partial class QueryCrudEvents
    : QueryDb<CrudEvent>, IReturn<QueryResponse<CrudEvent>>, IGet
{
    [DataMember(Order = 1)] public virtual long? Id { get; set; }
}

[Route("/todos", "GET")]
[DataContract]
public partial class QueryTodos
    : QueryData<Todo>, IReturn<QueryResponse<Todo>>
{
    public QueryTodos()
    {
        Ids = new List<long> { };
    }

    [DataMember(Order = 1)] public virtual int? Id { get; set; }

    [DataMember(Order = 2)] public virtual List<long> Ids { get; set; }

    [DataMember(Order = 3)] public virtual string TextContains { get; set; }
}

[Route("/userauthdetails", "GET")]
[Route("/userauthdetails/{Id}", "GET")]
[DataContract]
public partial class QueryUserAuthDetails
    : QueryDb<UserAuthDetails>, IReturn<QueryResponse<UserAuthDetails>>, IGet
{
    [DataMember(Order = 1)] public virtual int? Id { get; set; }
}

[Route("/userauthroles", "GET")]
[Route("/userauthroles/{Id}", "GET")]
[DataContract]
public partial class QueryUserAuthRoles
    : QueryDb<UserAuthRole>, IReturn<QueryResponse<UserAuthRole>>, IGet
{
    [DataMember(Order = 1)] public virtual int? Id { get; set; }
}

[DataContract]
public enum RoomType
{
    Single,
    Double,
    Queen,
    Twin,
    Suite
}

[DataContract]
public partial class Todo
{
    [DataMember(Order = 1)] public virtual long Id { get; set; }

    [DataMember(Order = 2)] public virtual string Text { get; set; }

    [DataMember(Order = 3)] public virtual bool IsFinished { get; set; }
}

///<summary>
///Update an existing Booking
///</summary>
[Route("/booking/{Id}", "PATCH")]
[ValidateRequest("HasRole(`Employee`)")]
[DataContract]
public partial class UpdateBooking
    : IReturn<IdResponse>, IPatchDb<Booking>
{
    [DataMember(Order = 1)] public virtual int Id { get; set; }

    [DataMember(Order = 2)] public virtual string Name { get; set; }

    [DataMember(Order = 3)] public virtual RoomType? RoomType { get; set; }

    [DataMember(Order = 4)]
    [Validate("GreaterThan(0)")]
    public virtual int? RoomNumber { get; set; }

    [DataMember(Order = 5)]
    [Validate("GreaterThan(0)")]
    public virtual decimal? Cost { get; set; }

    [DataMember(Order = 6)] public virtual DateTime? BookingStartDate { get; set; }

    [DataMember(Order = 7)] public virtual DateTime? BookingEndDate { get; set; }

    [DataMember(Order = 8)] public virtual string Notes { get; set; }

    [DataMember(Order = 9)] public virtual bool? Cancelled { get; set; }
}

[Route("/todos/{Id}", "PUT")]
[DataContract]
public partial class UpdateTodo
    : IReturn<Todo>, IPut
{
    [DataMember(Order = 1)] public virtual long Id { get; set; }

    [DataMember(Order = 2)]
    [Validate("NotEmpty")]
    public virtual string Text { get; set; }

    [DataMember(Order = 3)] public virtual bool IsFinished { get; set; }
}
