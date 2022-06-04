/* Options:
Date: 2022-06-04 02:56:16
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
//AddDataContractAttributes: True
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
using trackmyhealthmicro.ServiceModel.Types;
using trackmyhealthmicro.ServiceModel;

namespace trackmyhealthmicro.ServiceModel
{
    [Route("/appointments", "POST")]
    [DataContract]
    public class CreateAppointments
        : IReturn<IdResponse>, IPost, ICreateDb<Appointments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ApptDateTime { get; set; }

        [DataMember(Order=6)]
        public string Place { get; set; }

        [DataMember(Order=7)]
        public string PlaceNotes { get; set; }

        [DataMember(Order=8)]
        public string ProviderName { get; set; }

        [DataMember(Order=9)]
        public Guid AppUserAuthId { get; set; }
    }

    [Route("/appusers", "POST")]
    [DataContract]
    public class CreateAppUser
        : IReturn<IdResponse>, IPost, ICreateDb<AppUser>
    {
        [DataMember(Order=1)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=2)]
        public string ProfileUrl { get; set; }

        [DataMember(Order=3)]
        public string LastLoginIp { get; set; }

        [DataMember(Order=4)]
        public DateTime? LastLoginDate { get; set; }

        [DataMember(Order=6)]
        public string UserName { get; set; }

        [DataMember(Order=7)]
        public string Email { get; set; }

        [DataMember(Order=8)]
        public string PrimaryEmail { get; set; }

        [DataMember(Order=9)]
        public string PhoneNumber { get; set; }

        [DataMember(Order=10)]
        public string FirstName { get; set; }

        [DataMember(Order=11)]
        public string LastName { get; set; }

        [DataMember(Order=12)]
        public string DisplayName { get; set; }

        [DataMember(Order=13)]
        public string Company { get; set; }

        [DataMember(Order=14)]
        public DateTime? BirthDate { get; set; }

        [DataMember(Order=15)]
        public string BirthDateRaw { get; set; }

        [DataMember(Order=16)]
        public string Address { get; set; }

        [DataMember(Order=17)]
        public string Address2 { get; set; }

        [DataMember(Order=18)]
        public string City { get; set; }

        [DataMember(Order=19)]
        public string State { get; set; }

        [DataMember(Order=20)]
        public string Country { get; set; }

        [DataMember(Order=21)]
        public string Culture { get; set; }

        [DataMember(Order=22)]
        public string FullName { get; set; }

        [DataMember(Order=23)]
        public string Gender { get; set; }

        [DataMember(Order=24)]
        public string Language { get; set; }

        [DataMember(Order=25)]
        public string MailAddress { get; set; }

        [DataMember(Order=26)]
        public string Nickname { get; set; }

        [DataMember(Order=27)]
        public string PostalCode { get; set; }

        [DataMember(Order=28)]
        public string TimeZone { get; set; }

        [DataMember(Order=29)]
        public string Salt { get; set; }

        [DataMember(Order=30)]
        public string PasswordHash { get; set; }

        [DataMember(Order=31)]
        public string DigestHa1Hash { get; set; }

        [DataMember(Order=32)]
        public string Roles { get; set; }

        [DataMember(Order=33)]
        public string Permissions { get; set; }

        [DataMember(Order=34)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=35)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=36)]
        public int InvalidLoginAttempts { get; set; }

        [DataMember(Order=37)]
        public DateTime? LastLoginAttempt { get; set; }

        [DataMember(Order=38)]
        public DateTime? LockedDate { get; set; }

        [DataMember(Order=39)]
        public string RecoveryToken { get; set; }

        [DataMember(Order=40)]
        public int? RefId { get; set; }

        [DataMember(Order=41)]
        public string RefIdStr { get; set; }

        [DataMember(Order=42)]
        public string Meta { get; set; }
    }

    ///<summary>
    ///Create a new Booking
    ///</summary>
    [Route("/bookings", "POST")]
    [ValidateRequest("HasRole(`Employee`)")]
    [DataContract]
    public class CreateBooking
        : IReturn<IdResponse>, ICreateDb<Booking>
    {
        ///<summary>
        ///Name this Booking is for
        ///</summary>
        [DataMember(Order=1)]
        [Validate("NotEmpty")]
        public string Name { get; set; }

        [DataMember(Order=2)]
        public RoomType RoomType { get; set; }

        [DataMember(Order=3)]
        [Validate("GreaterThan(0)")]
        public int RoomNumber { get; set; }

        [DataMember(Order=4)]
        [Validate("GreaterThan(0)")]
        public decimal Cost { get; set; }

        [DataMember(Order=5)]
        public DateTime BookingStartDate { get; set; }

        [DataMember(Order=6)]
        public DateTime? BookingEndDate { get; set; }

        [DataMember(Order=7)]
        [Input(Type="textarea")]
        public string Notes { get; set; }
    }

    [Route("/crudevents", "POST")]
    [DataContract]
    public class CreateCrudEvent
        : IReturn<IdResponse>, IPost, ICreateDb<CrudEvent>
    {
        [DataMember(Order=2)]
        public string EventType { get; set; }

        [DataMember(Order=3)]
        public string Model { get; set; }

        [DataMember(Order=4)]
        public string ModelId { get; set; }

        [DataMember(Order=5)]
        public DateTime EventDate { get; set; }

        [DataMember(Order=6)]
        public long? RowsUpdated { get; set; }

        [DataMember(Order=7)]
        public string RequestType { get; set; }

        [DataMember(Order=8)]
        public string RequestBody { get; set; }

        [DataMember(Order=9)]
        public string UserAuthId { get; set; }

        [DataMember(Order=10)]
        public string UserAuthName { get; set; }

        [DataMember(Order=11)]
        public string RemoteIp { get; set; }

        [DataMember(Order=12)]
        public string Urn { get; set; }

        [DataMember(Order=13)]
        public int? RefId { get; set; }

        [DataMember(Order=14)]
        public string RefIdStr { get; set; }

        [DataMember(Order=15)]
        public string Meta { get; set; }
    }

    [Route("/measurementdetails", "POST")]
    [DataContract]
    public class CreateMeasurementDetails
        : IReturn<IdResponse>, IPost, ICreateDb<MeasurementDetails>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=6)]
        public Guid? TreatmentName { get; set; }

        [DataMember(Order=7)]
        public Guid? MeasurementTypeId { get; set; }

        [DataMember(Order=8)]
        public string MeasurementTypeName { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitId { get; set; }

        [DataMember(Order=10)]
        public string CustomerNotes { get; set; }

        [DataMember(Order=11)]
        public string Name { get; set; }
    }

    [Route("/measurements", "POST")]
    [DataContract]
    public class CreateMeasurements
        : IReturn<IdResponse>, IPost, ICreateDb<Measurements>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        public string TreatmentType { get; set; }
    }

    [Route("/measurementtypes", "POST")]
    [DataContract]
    public class CreateMeasurementTypes
        : IReturn<IdResponse>, IPost, ICreateDb<MeasurementTypes>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentTypeId { get; set; }
    }

    [Route("/migrations", "POST")]
    [DataContract]
    public class CreateMigrations
        : IReturn<IdResponse>, IPost, ICreateDb<Migrations>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public string Name { get; set; }

        [DataMember(Order=3)]
        public string Hash { get; set; }

        [DataMember(Order=4)]
        public DateTime? ExecutedAt { get; set; }
    }

    [Route("/schedules", "POST")]
    [DataContract]
    public class CreateSchedules
        : IReturn<IdResponse>, IPost, ICreateDb<Schedules>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ScheduleTime { get; set; }

        [DataMember(Order=6)]
        public DateTime? StartDate { get; set; }

        [DataMember(Order=7)]
        public DateTime? EndDate { get; set; }

        [DataMember(Order=8)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=9)]
        public string TreatmentName { get; set; }

        [DataMember(Order=10)]
        public bool? IsWeekendDifferent { get; set; }

        [DataMember(Order=11)]
        public Guid? AppointmentId { get; set; }

        [DataMember(Order=12)]
        public Guid? TreatmentUserId { get; set; }

        [DataMember(Order=13)]
        public DateTime? LastRunTime { get; set; }

        [DataMember(Order=14)]
        public string LastRunStatus { get; set; }

        [DataMember(Order=15)]
        public DateTime? NextRunDateTime { get; set; }
    }

    [Route("/schemamigrations", "POST")]
    [DataContract]
    public class CreateSchemaMigrations
        : IReturn<IdResponse>, IPost, ICreateDb<SchemaMigrations>
    {
        [DataMember(Order=1)]
        public long Version { get; set; }

        [DataMember(Order=2)]
        public bool Dirty { get; set; }
    }

    [Route("/treatmentremindersounds", "POST")]
    [DataContract]
    public class CreateTreatmentReminderSounds
        : IReturn<IdResponse>, IPost, ICreateDb<TreatmentReminderSounds>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public string Name { get; set; }

        [DataMember(Order=4)]
        public string Description { get; set; }
    }

    [Route("/treatments", "POST")]
    [DataContract]
    public class CreateTreatments
        : IReturn<IdResponse>, IPost, ICreateDb<Treatments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public string TreatmentType { get; set; }

        [DataMember(Order=8)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitsId { get; set; }

        [DataMember(Order=10)]
        public Guid TreatmentReminderSoundId { get; set; }

        [DataMember(Order=11)]
        public bool? IsMuted { get; set; }

        [DataMember(Order=12)]
        public int? DailyFrequency { get; set; }

        [DataMember(Order=13)]
        public Guid? MeasurementTypesId { get; set; }

        [DataMember(Order=14)]
        public string MeasurementTypesName { get; set; }

        [DataMember(Order=15)]
        public string UnitsPlanned { get; set; }
    }

    [Route("/treatmentscheduledevents", "POST")]
    [DataContract]
    public class CreateTreatmentScheduledEvents
        : IReturn<IdResponse>, IPost, ICreateDb<TreatmentScheduledEvents>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public short? Mood { get; set; }

        [DataMember(Order=6)]
        public Guid? ScheduleId { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        public string TreatmentName { get; set; }

        [DataMember(Order=9)]
        public Guid TreatmentUserId { get; set; }

        [DataMember(Order=10)]
        public string TreatmentUserName { get; set; }

        [DataMember(Order=11)]
        public string TreatmentDescription { get; set; }

        [DataMember(Order=12)]
        public int? Completed { get; set; }

        [DataMember(Order=13)]
        public string TreatmentType { get; set; }

        [DataMember(Order=14)]
        public Guid MeasurementTypeName { get; set; }

        [DataMember(Order=15)]
        public Guid? MeasurementId { get; set; }

        [DataMember(Order=16)]
        public string MeasurementName { get; set; }

        [DataMember(Order=17)]
        public string UnitsPlanned { get; set; }

        [DataMember(Order=18)]
        public string UnitsTaken { get; set; }

        [DataMember(Order=19)]
        public Guid? UnitTypesId { get; set; }

        [DataMember(Order=20)]
        public string UnitsTypeName { get; set; }

        [DataMember(Order=21)]
        public DateTime? DateTimeEventPlanned { get; set; }

        [DataMember(Order=22)]
        public DateTime? DateTimeUserConfirmedEvent { get; set; }

        [DataMember(Order=23)]
        public DateTime? DateTimeSkippedEvent { get; set; }

        [DataMember(Order=24)]
        public string CustomerNotes { get; set; }
    }

    [Route("/userauthdetails", "POST")]
    [DataContract]
    public class CreateUserAuthDetails
        : IReturn<IdResponse>, IPost, ICreateDb<UserAuthDetails>
    {
        [DataMember(Order=2)]
        public int UserAuthId { get; set; }

        [DataMember(Order=3)]
        public string Provider { get; set; }

        [DataMember(Order=4)]
        public string UserId { get; set; }

        [DataMember(Order=5)]
        public string UserName { get; set; }

        [DataMember(Order=6)]
        public string FullName { get; set; }

        [DataMember(Order=7)]
        public string DisplayName { get; set; }

        [DataMember(Order=8)]
        public string FirstName { get; set; }

        [DataMember(Order=9)]
        public string LastName { get; set; }

        [DataMember(Order=10)]
        public string Company { get; set; }

        [DataMember(Order=11)]
        public string Email { get; set; }

        [DataMember(Order=12)]
        public string PhoneNumber { get; set; }

        [DataMember(Order=13)]
        public DateTime? BirthDate { get; set; }

        [DataMember(Order=14)]
        public string BirthDateRaw { get; set; }

        [DataMember(Order=15)]
        public string Address { get; set; }

        [DataMember(Order=16)]
        public string Address2 { get; set; }

        [DataMember(Order=17)]
        public string City { get; set; }

        [DataMember(Order=18)]
        public string State { get; set; }

        [DataMember(Order=19)]
        public string Country { get; set; }

        [DataMember(Order=20)]
        public string Culture { get; set; }

        [DataMember(Order=21)]
        public string Gender { get; set; }

        [DataMember(Order=22)]
        public string Language { get; set; }

        [DataMember(Order=23)]
        public string MailAddress { get; set; }

        [DataMember(Order=24)]
        public string Nickname { get; set; }

        [DataMember(Order=25)]
        public string PostalCode { get; set; }

        [DataMember(Order=26)]
        public string TimeZone { get; set; }

        [DataMember(Order=27)]
        public string RefreshToken { get; set; }

        [DataMember(Order=28)]
        public DateTime? RefreshTokenExpiry { get; set; }

        [DataMember(Order=29)]
        public string RequestToken { get; set; }

        [DataMember(Order=30)]
        public string RequestTokenSecret { get; set; }

        [DataMember(Order=31)]
        public string Items { get; set; }

        [DataMember(Order=32)]
        public string AccessToken { get; set; }

        [DataMember(Order=33)]
        public string AccessTokenSecret { get; set; }

        [DataMember(Order=34)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=35)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=36)]
        public int? RefId { get; set; }

        [DataMember(Order=37)]
        public string RefIdStr { get; set; }

        [DataMember(Order=38)]
        public string Meta { get; set; }
    }

    [Route("/userauthroles", "POST")]
    [DataContract]
    public class CreateUserAuthRole
        : IReturn<IdResponse>, IPost, ICreateDb<UserAuthRole>
    {
        [DataMember(Order=2)]
        public int UserAuthId { get; set; }

        [DataMember(Order=3)]
        public string Role { get; set; }

        [DataMember(Order=4)]
        public string Permission { get; set; }

        [DataMember(Order=5)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=6)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=7)]
        public int? RefId { get; set; }

        [DataMember(Order=8)]
        public string RefIdStr { get; set; }

        [DataMember(Order=9)]
        public string Meta { get; set; }
    }

    [Route("/appointments/{Id}", "DELETE")]
    [DataContract]
    public class DeleteAppointments
        : IReturn<IdResponse>, IDelete, IDeleteDb<Appointments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/appusers/{Id}", "DELETE")]
    [DataContract]
    public class DeleteAppUser
        : IReturn<IdResponse>, IDelete, IDeleteDb<AppUser>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }
    }

    ///<summary>
    ///Delete a Booking
    ///</summary>
    [Route("/booking/{Id}", "DELETE")]
    [ValidateRequest("HasRole(`Manager`)")]
    [DataContract]
    public class DeleteBooking
        : IReturnVoid, IDeleteDb<Booking>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }
    }

    [Route("/crudevents/{Id}", "DELETE")]
    [DataContract]
    public class DeleteCrudEvent
        : IReturn<IdResponse>, IDelete, IDeleteDb<CrudEvent>
    {
        [DataMember(Order=1)]
        public long Id { get; set; }
    }

    [Route("/measurementdetails/{Id}", "DELETE")]
    [DataContract]
    public class DeleteMeasurementDetails
        : IReturn<IdResponse>, IDelete, IDeleteDb<MeasurementDetails>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/measurements/{Id}", "DELETE")]
    [DataContract]
    public class DeleteMeasurements
        : IReturn<IdResponse>, IDelete, IDeleteDb<Measurements>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/measurementtypes/{Id}", "DELETE")]
    [DataContract]
    public class DeleteMeasurementTypes
        : IReturn<IdResponse>, IDelete, IDeleteDb<MeasurementTypes>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/migrations/{Id}", "DELETE")]
    [DataContract]
    public class DeleteMigrations
        : IReturn<IdResponse>, IDelete, IDeleteDb<Migrations>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/schedules/{Id}", "DELETE")]
    [DataContract]
    public class DeleteSchedules
        : IReturn<IdResponse>, IDelete, IDeleteDb<Schedules>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/schemamigrations/{Version}", "DELETE")]
    [DataContract]
    public class DeleteSchemaMigrations
        : IReturn<IdResponse>, IDelete, IDeleteDb<SchemaMigrations>
    {
        [DataMember(Order=1)]
        public long Version { get; set; }
    }

    [Route("/treatmentremindersounds/{Id}", "DELETE")]
    [DataContract]
    public class DeleteTreatmentReminderSounds
        : IReturn<IdResponse>, IDelete, IDeleteDb<TreatmentReminderSounds>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/treatments/{Id}", "DELETE")]
    [DataContract]
    public class DeleteTreatments
        : IReturn<IdResponse>, IDelete, IDeleteDb<Treatments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/treatmentscheduledevents/{Id}", "DELETE")]
    [DataContract]
    public class DeleteTreatmentScheduledEvents
        : IReturn<IdResponse>, IDelete, IDeleteDb<TreatmentScheduledEvents>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }
    }

    [Route("/userauthdetails/{Id}", "DELETE")]
    [DataContract]
    public class DeleteUserAuthDetails
        : IReturn<IdResponse>, IDelete, IDeleteDb<UserAuthDetails>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }
    }

    [Route("/userauthroles/{Id}", "DELETE")]
    [DataContract]
    public class DeleteUserAuthRole
        : IReturn<IdResponse>, IDelete, IDeleteDb<UserAuthRole>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }
    }

    [Route("/appointments/{Id}", "PATCH")]
    [DataContract]
    public class PatchAppointments
        : IReturn<IdResponse>, IPatch, IPatchDb<Appointments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ApptDateTime { get; set; }

        [DataMember(Order=6)]
        public string Place { get; set; }

        [DataMember(Order=7)]
        public string PlaceNotes { get; set; }

        [DataMember(Order=8)]
        public string ProviderName { get; set; }

        [DataMember(Order=9)]
        public Guid AppUserAuthId { get; set; }
    }

    [Route("/appusers/{Id}", "PATCH")]
    [DataContract]
    public class PatchAppUser
        : IReturn<IdResponse>, IPatch, IPatchDb<AppUser>
    {
        [DataMember(Order=1)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=2)]
        public string ProfileUrl { get; set; }

        [DataMember(Order=3)]
        public string LastLoginIp { get; set; }

        [DataMember(Order=4)]
        public DateTime? LastLoginDate { get; set; }

        [DataMember(Order=5)]
        public int Id { get; set; }

        [DataMember(Order=6)]
        public string UserName { get; set; }

        [DataMember(Order=7)]
        public string Email { get; set; }

        [DataMember(Order=8)]
        public string PrimaryEmail { get; set; }

        [DataMember(Order=9)]
        public string PhoneNumber { get; set; }

        [DataMember(Order=10)]
        public string FirstName { get; set; }

        [DataMember(Order=11)]
        public string LastName { get; set; }

        [DataMember(Order=12)]
        public string DisplayName { get; set; }

        [DataMember(Order=13)]
        public string Company { get; set; }

        [DataMember(Order=14)]
        public DateTime? BirthDate { get; set; }

        [DataMember(Order=15)]
        public string BirthDateRaw { get; set; }

        [DataMember(Order=16)]
        public string Address { get; set; }

        [DataMember(Order=17)]
        public string Address2 { get; set; }

        [DataMember(Order=18)]
        public string City { get; set; }

        [DataMember(Order=19)]
        public string State { get; set; }

        [DataMember(Order=20)]
        public string Country { get; set; }

        [DataMember(Order=21)]
        public string Culture { get; set; }

        [DataMember(Order=22)]
        public string FullName { get; set; }

        [DataMember(Order=23)]
        public string Gender { get; set; }

        [DataMember(Order=24)]
        public string Language { get; set; }

        [DataMember(Order=25)]
        public string MailAddress { get; set; }

        [DataMember(Order=26)]
        public string Nickname { get; set; }

        [DataMember(Order=27)]
        public string PostalCode { get; set; }

        [DataMember(Order=28)]
        public string TimeZone { get; set; }

        [DataMember(Order=29)]
        public string Salt { get; set; }

        [DataMember(Order=30)]
        public string PasswordHash { get; set; }

        [DataMember(Order=31)]
        public string DigestHa1Hash { get; set; }

        [DataMember(Order=32)]
        public string Roles { get; set; }

        [DataMember(Order=33)]
        public string Permissions { get; set; }

        [DataMember(Order=34)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=35)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=36)]
        public int InvalidLoginAttempts { get; set; }

        [DataMember(Order=37)]
        public DateTime? LastLoginAttempt { get; set; }

        [DataMember(Order=38)]
        public DateTime? LockedDate { get; set; }

        [DataMember(Order=39)]
        public string RecoveryToken { get; set; }

        [DataMember(Order=40)]
        public int? RefId { get; set; }

        [DataMember(Order=41)]
        public string RefIdStr { get; set; }

        [DataMember(Order=42)]
        public string Meta { get; set; }
    }

    [Route("/crudevents/{Id}", "PATCH")]
    [DataContract]
    public class PatchCrudEvent
        : IReturn<IdResponse>, IPatch, IPatchDb<CrudEvent>
    {
        [DataMember(Order=1)]
        public long Id { get; set; }

        [DataMember(Order=2)]
        public string EventType { get; set; }

        [DataMember(Order=3)]
        public string Model { get; set; }

        [DataMember(Order=4)]
        public string ModelId { get; set; }

        [DataMember(Order=5)]
        public DateTime EventDate { get; set; }

        [DataMember(Order=6)]
        public long? RowsUpdated { get; set; }

        [DataMember(Order=7)]
        public string RequestType { get; set; }

        [DataMember(Order=8)]
        public string RequestBody { get; set; }

        [DataMember(Order=9)]
        public string UserAuthId { get; set; }

        [DataMember(Order=10)]
        public string UserAuthName { get; set; }

        [DataMember(Order=11)]
        public string RemoteIp { get; set; }

        [DataMember(Order=12)]
        public string Urn { get; set; }

        [DataMember(Order=13)]
        public int? RefId { get; set; }

        [DataMember(Order=14)]
        public string RefIdStr { get; set; }

        [DataMember(Order=15)]
        public string Meta { get; set; }
    }

    [Route("/measurementdetails/{Id}", "PATCH")]
    [DataContract]
    public class PatchMeasurementDetails
        : IReturn<IdResponse>, IPatch, IPatchDb<MeasurementDetails>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=6)]
        public Guid? TreatmentName { get; set; }

        [DataMember(Order=7)]
        public Guid? MeasurementTypeId { get; set; }

        [DataMember(Order=8)]
        public string MeasurementTypeName { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitId { get; set; }

        [DataMember(Order=10)]
        public string CustomerNotes { get; set; }

        [DataMember(Order=11)]
        public string Name { get; set; }
    }

    [Route("/measurements/{Id}", "PATCH")]
    [DataContract]
    public class PatchMeasurements
        : IReturn<IdResponse>, IPatch, IPatchDb<Measurements>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        public string TreatmentType { get; set; }
    }

    [Route("/measurementtypes/{Id}", "PATCH")]
    [DataContract]
    public class PatchMeasurementTypes
        : IReturn<IdResponse>, IPatch, IPatchDb<MeasurementTypes>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentTypeId { get; set; }
    }

    [Route("/migrations/{Id}", "PATCH")]
    [DataContract]
    public class PatchMigrations
        : IReturn<IdResponse>, IPatch, IPatchDb<Migrations>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public string Name { get; set; }

        [DataMember(Order=3)]
        public string Hash { get; set; }

        [DataMember(Order=4)]
        public DateTime? ExecutedAt { get; set; }
    }

    [Route("/schedules/{Id}", "PATCH")]
    [DataContract]
    public class PatchSchedules
        : IReturn<IdResponse>, IPatch, IPatchDb<Schedules>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ScheduleTime { get; set; }

        [DataMember(Order=6)]
        public DateTime? StartDate { get; set; }

        [DataMember(Order=7)]
        public DateTime? EndDate { get; set; }

        [DataMember(Order=8)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=9)]
        public string TreatmentName { get; set; }

        [DataMember(Order=10)]
        public bool? IsWeekendDifferent { get; set; }

        [DataMember(Order=11)]
        public Guid? AppointmentId { get; set; }

        [DataMember(Order=12)]
        public Guid? TreatmentUserId { get; set; }

        [DataMember(Order=13)]
        public DateTime? LastRunTime { get; set; }

        [DataMember(Order=14)]
        public string LastRunStatus { get; set; }

        [DataMember(Order=15)]
        public DateTime? NextRunDateTime { get; set; }
    }

    [Route("/schemamigrations/{Version}", "PATCH")]
    [DataContract]
    public class PatchSchemaMigrations
        : IReturn<IdResponse>, IPatch, IPatchDb<SchemaMigrations>
    {
        [DataMember(Order=1)]
        public long Version { get; set; }

        [DataMember(Order=2)]
        public bool Dirty { get; set; }
    }

    [Route("/treatmentremindersounds/{Id}", "PATCH")]
    [DataContract]
    public class PatchTreatmentReminderSounds
        : IReturn<IdResponse>, IPatch, IPatchDb<TreatmentReminderSounds>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public string Name { get; set; }

        [DataMember(Order=4)]
        public string Description { get; set; }
    }

    [Route("/treatments/{Id}", "PATCH")]
    [DataContract]
    public class PatchTreatments
        : IReturn<IdResponse>, IPatch, IPatchDb<Treatments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public string TreatmentType { get; set; }

        [DataMember(Order=8)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitsId { get; set; }

        [DataMember(Order=10)]
        public Guid TreatmentReminderSoundId { get; set; }

        [DataMember(Order=11)]
        public bool? IsMuted { get; set; }

        [DataMember(Order=12)]
        public int? DailyFrequency { get; set; }

        [DataMember(Order=13)]
        public Guid? MeasurementTypesId { get; set; }

        [DataMember(Order=14)]
        public string MeasurementTypesName { get; set; }

        [DataMember(Order=15)]
        public string UnitsPlanned { get; set; }
    }

    [Route("/treatmentscheduledevents/{Id}", "PATCH")]
    [DataContract]
    public class PatchTreatmentScheduledEvents
        : IReturn<IdResponse>, IPatch, IPatchDb<TreatmentScheduledEvents>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public short? Mood { get; set; }

        [DataMember(Order=6)]
        public Guid? ScheduleId { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        public string TreatmentName { get; set; }

        [DataMember(Order=9)]
        public Guid TreatmentUserId { get; set; }

        [DataMember(Order=10)]
        public string TreatmentUserName { get; set; }

        [DataMember(Order=11)]
        public string TreatmentDescription { get; set; }

        [DataMember(Order=12)]
        public int? Completed { get; set; }

        [DataMember(Order=13)]
        public string TreatmentType { get; set; }

        [DataMember(Order=14)]
        public Guid MeasurementTypeName { get; set; }

        [DataMember(Order=15)]
        public Guid? MeasurementId { get; set; }

        [DataMember(Order=16)]
        public string MeasurementName { get; set; }

        [DataMember(Order=17)]
        public string UnitsPlanned { get; set; }

        [DataMember(Order=18)]
        public string UnitsTaken { get; set; }

        [DataMember(Order=19)]
        public Guid? UnitTypesId { get; set; }

        [DataMember(Order=20)]
        public string UnitsTypeName { get; set; }

        [DataMember(Order=21)]
        public DateTime? DateTimeEventPlanned { get; set; }

        [DataMember(Order=22)]
        public DateTime? DateTimeUserConfirmedEvent { get; set; }

        [DataMember(Order=23)]
        public DateTime? DateTimeSkippedEvent { get; set; }

        [DataMember(Order=24)]
        public string CustomerNotes { get; set; }
    }

    [Route("/userauthdetails/{Id}", "PATCH")]
    [DataContract]
    public class PatchUserAuthDetails
        : IReturn<IdResponse>, IPatch, IPatchDb<UserAuthDetails>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }

        [DataMember(Order=2)]
        public int UserAuthId { get; set; }

        [DataMember(Order=3)]
        public string Provider { get; set; }

        [DataMember(Order=4)]
        public string UserId { get; set; }

        [DataMember(Order=5)]
        public string UserName { get; set; }

        [DataMember(Order=6)]
        public string FullName { get; set; }

        [DataMember(Order=7)]
        public string DisplayName { get; set; }

        [DataMember(Order=8)]
        public string FirstName { get; set; }

        [DataMember(Order=9)]
        public string LastName { get; set; }

        [DataMember(Order=10)]
        public string Company { get; set; }

        [DataMember(Order=11)]
        public string Email { get; set; }

        [DataMember(Order=12)]
        public string PhoneNumber { get; set; }

        [DataMember(Order=13)]
        public DateTime? BirthDate { get; set; }

        [DataMember(Order=14)]
        public string BirthDateRaw { get; set; }

        [DataMember(Order=15)]
        public string Address { get; set; }

        [DataMember(Order=16)]
        public string Address2 { get; set; }

        [DataMember(Order=17)]
        public string City { get; set; }

        [DataMember(Order=18)]
        public string State { get; set; }

        [DataMember(Order=19)]
        public string Country { get; set; }

        [DataMember(Order=20)]
        public string Culture { get; set; }

        [DataMember(Order=21)]
        public string Gender { get; set; }

        [DataMember(Order=22)]
        public string Language { get; set; }

        [DataMember(Order=23)]
        public string MailAddress { get; set; }

        [DataMember(Order=24)]
        public string Nickname { get; set; }

        [DataMember(Order=25)]
        public string PostalCode { get; set; }

        [DataMember(Order=26)]
        public string TimeZone { get; set; }

        [DataMember(Order=27)]
        public string RefreshToken { get; set; }

        [DataMember(Order=28)]
        public DateTime? RefreshTokenExpiry { get; set; }

        [DataMember(Order=29)]
        public string RequestToken { get; set; }

        [DataMember(Order=30)]
        public string RequestTokenSecret { get; set; }

        [DataMember(Order=31)]
        public string Items { get; set; }

        [DataMember(Order=32)]
        public string AccessToken { get; set; }

        [DataMember(Order=33)]
        public string AccessTokenSecret { get; set; }

        [DataMember(Order=34)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=35)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=36)]
        public int? RefId { get; set; }

        [DataMember(Order=37)]
        public string RefIdStr { get; set; }

        [DataMember(Order=38)]
        public string Meta { get; set; }
    }

    [Route("/userauthroles/{Id}", "PATCH")]
    [DataContract]
    public class PatchUserAuthRole
        : IReturn<IdResponse>, IPatch, IPatchDb<UserAuthRole>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }

        [DataMember(Order=2)]
        public int UserAuthId { get; set; }

        [DataMember(Order=3)]
        public string Role { get; set; }

        [DataMember(Order=4)]
        public string Permission { get; set; }

        [DataMember(Order=5)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=6)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=7)]
        public int? RefId { get; set; }

        [DataMember(Order=8)]
        public string RefIdStr { get; set; }

        [DataMember(Order=9)]
        public string Meta { get; set; }
    }

    [Route("/appointments", "GET")]
    [Route("/appointments/{Id}", "GET")]
    [DataContract]
    public class QueryAppointments
        : QueryDb<Appointments>, IReturn<QueryResponse<Appointments>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/appusers", "GET")]
    [Route("/appusers/{Id}", "GET")]
    [DataContract]
    public class QueryAppUsers
        : QueryDb<AppUser>, IReturn<QueryResponse<AppUser>>, IGet
    {
        [DataMember(Order=1)]
        public int? Id { get; set; }
    }

    ///<summary>
    ///Find Bookings
    ///</summary>
    [Route("/bookings", "GET")]
    [Route("/bookings/{Id}", "GET")]
    [DataContract]
    public class QueryBookings
        : QueryDb<Booking>, IReturn<QueryResponse<Booking>>
    {
        [DataMember(Order=1)]
        public int? Id { get; set; }
    }

    [Route("/crudevents", "GET")]
    [Route("/crudevents/{Id}", "GET")]
    [DataContract]
    public class QueryCrudEvents
        : QueryDb<CrudEvent>, IReturn<QueryResponse<CrudEvent>>, IGet
    {
        [DataMember(Order=1)]
        public long? Id { get; set; }
    }

    [Route("/measurementdetails", "GET")]
    [Route("/measurementdetails/{Id}", "GET")]
    [DataContract]
    public class QueryMeasurementDetails
        : QueryDb<MeasurementDetails>, IReturn<QueryResponse<MeasurementDetails>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/measurements", "GET")]
    [Route("/measurements/{Id}", "GET")]
    [DataContract]
    public class QueryMeasurements
        : QueryDb<Measurements>, IReturn<QueryResponse<Measurements>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/measurementtypes", "GET")]
    [Route("/measurementtypes/{Id}", "GET")]
    [DataContract]
    public class QueryMeasurementTypes
        : QueryDb<MeasurementTypes>, IReturn<QueryResponse<MeasurementTypes>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/migrations", "GET")]
    [Route("/migrations/{Id}", "GET")]
    [DataContract]
    public class QueryMigrations
        : QueryDb<Migrations>, IReturn<QueryResponse<Migrations>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/schedules", "GET")]
    [Route("/schedules/{Id}", "GET")]
    [DataContract]
    public class QuerySchedules
        : QueryDb<Schedules>, IReturn<QueryResponse<Schedules>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/schemamigrations", "GET")]
    [Route("/schemamigrations/{Version}", "GET")]
    [DataContract]
    public class QuerySchemaMigrations
        : QueryDb<SchemaMigrations>, IReturn<QueryResponse<SchemaMigrations>>, IGet
    {
        [DataMember(Order=1)]
        public long? Version { get; set; }
    }

    [Route("/treatmentremindersounds", "GET")]
    [Route("/treatmentremindersounds/{Id}", "GET")]
    [DataContract]
    public class QueryTreatmentReminderSounds
        : QueryDb<TreatmentReminderSounds>, IReturn<QueryResponse<TreatmentReminderSounds>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/treatments", "GET")]
    [Route("/treatments/{Id}", "GET")]
    [DataContract]
    public class QueryTreatments
        : QueryDb<Treatments>, IReturn<QueryResponse<Treatments>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/treatmentscheduledevents", "GET")]
    [Route("/treatmentscheduledevents/{Id}", "GET")]
    [DataContract]
    public class QueryTreatmentScheduledEvents
        : QueryDb<TreatmentScheduledEvents>, IReturn<QueryResponse<TreatmentScheduledEvents>>, IGet
    {
        [DataMember(Order=1)]
        public Guid? Id { get; set; }
    }

    [Route("/userauthdetails", "GET")]
    [Route("/userauthdetails/{Id}", "GET")]
    [DataContract]
    public class QueryUserAuthDetails
        : QueryDb<UserAuthDetails>, IReturn<QueryResponse<UserAuthDetails>>, IGet
    {
        [DataMember(Order=1)]
        public int? Id { get; set; }
    }

    [Route("/userauthroles", "GET")]
    [Route("/userauthroles/{Id}", "GET")]
    [DataContract]
    public class QueryUserAuthRoles
        : QueryDb<UserAuthRole>, IReturn<QueryResponse<UserAuthRole>>, IGet
    {
        [DataMember(Order=1)]
        public int? Id { get; set; }
    }

    [Route("/appointments/{Id}", "PUT")]
    [DataContract]
    public class UpdateAppointments
        : IReturn<IdResponse>, IPut, IUpdateDb<Appointments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ApptDateTime { get; set; }

        [DataMember(Order=6)]
        public string Place { get; set; }

        [DataMember(Order=7)]
        public string PlaceNotes { get; set; }

        [DataMember(Order=8)]
        public string ProviderName { get; set; }

        [DataMember(Order=9)]
        public Guid AppUserAuthId { get; set; }
    }

    [Route("/appusers/{Id}", "PUT")]
    [DataContract]
    public class UpdateAppUser
        : IReturn<IdResponse>, IPut, IUpdateDb<AppUser>
    {
        [DataMember(Order=1)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=2)]
        public string ProfileUrl { get; set; }

        [DataMember(Order=3)]
        public string LastLoginIp { get; set; }

        [DataMember(Order=4)]
        public DateTime? LastLoginDate { get; set; }

        [DataMember(Order=5)]
        public int Id { get; set; }

        [DataMember(Order=6)]
        public string UserName { get; set; }

        [DataMember(Order=7)]
        public string Email { get; set; }

        [DataMember(Order=8)]
        public string PrimaryEmail { get; set; }

        [DataMember(Order=9)]
        public string PhoneNumber { get; set; }

        [DataMember(Order=10)]
        public string FirstName { get; set; }

        [DataMember(Order=11)]
        public string LastName { get; set; }

        [DataMember(Order=12)]
        public string DisplayName { get; set; }

        [DataMember(Order=13)]
        public string Company { get; set; }

        [DataMember(Order=14)]
        public DateTime? BirthDate { get; set; }

        [DataMember(Order=15)]
        public string BirthDateRaw { get; set; }

        [DataMember(Order=16)]
        public string Address { get; set; }

        [DataMember(Order=17)]
        public string Address2 { get; set; }

        [DataMember(Order=18)]
        public string City { get; set; }

        [DataMember(Order=19)]
        public string State { get; set; }

        [DataMember(Order=20)]
        public string Country { get; set; }

        [DataMember(Order=21)]
        public string Culture { get; set; }

        [DataMember(Order=22)]
        public string FullName { get; set; }

        [DataMember(Order=23)]
        public string Gender { get; set; }

        [DataMember(Order=24)]
        public string Language { get; set; }

        [DataMember(Order=25)]
        public string MailAddress { get; set; }

        [DataMember(Order=26)]
        public string Nickname { get; set; }

        [DataMember(Order=27)]
        public string PostalCode { get; set; }

        [DataMember(Order=28)]
        public string TimeZone { get; set; }

        [DataMember(Order=29)]
        public string Salt { get; set; }

        [DataMember(Order=30)]
        public string PasswordHash { get; set; }

        [DataMember(Order=31)]
        public string DigestHa1Hash { get; set; }

        [DataMember(Order=32)]
        public string Roles { get; set; }

        [DataMember(Order=33)]
        public string Permissions { get; set; }

        [DataMember(Order=34)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=35)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=36)]
        public int InvalidLoginAttempts { get; set; }

        [DataMember(Order=37)]
        public DateTime? LastLoginAttempt { get; set; }

        [DataMember(Order=38)]
        public DateTime? LockedDate { get; set; }

        [DataMember(Order=39)]
        public string RecoveryToken { get; set; }

        [DataMember(Order=40)]
        public int? RefId { get; set; }

        [DataMember(Order=41)]
        public string RefIdStr { get; set; }

        [DataMember(Order=42)]
        public string Meta { get; set; }
    }

    ///<summary>
    ///Update an existing Booking
    ///</summary>
    [Route("/booking/{Id}", "PATCH")]
    [ValidateRequest("HasRole(`Employee`)")]
    [DataContract]
    public class UpdateBooking
        : IReturn<IdResponse>, IPatchDb<Booking>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }

        [DataMember(Order=2)]
        public string Name { get; set; }

        [DataMember(Order=3)]
        public RoomType? RoomType { get; set; }

        [DataMember(Order=4)]
        [Validate("GreaterThan(0)")]
        public int? RoomNumber { get; set; }

        [DataMember(Order=5)]
        [Validate("GreaterThan(0)")]
        public decimal? Cost { get; set; }

        [DataMember(Order=6)]
        public DateTime? BookingStartDate { get; set; }

        [DataMember(Order=7)]
        public DateTime? BookingEndDate { get; set; }

        [DataMember(Order=8)]
        public string Notes { get; set; }

        [DataMember(Order=9)]
        public bool? Cancelled { get; set; }
    }

    [Route("/crudevents/{Id}", "PUT")]
    [DataContract]
    public class UpdateCrudEvent
        : IReturn<IdResponse>, IPut, IUpdateDb<CrudEvent>
    {
        [DataMember(Order=1)]
        public long Id { get; set; }

        [DataMember(Order=2)]
        public string EventType { get; set; }

        [DataMember(Order=3)]
        public string Model { get; set; }

        [DataMember(Order=4)]
        public string ModelId { get; set; }

        [DataMember(Order=5)]
        public DateTime EventDate { get; set; }

        [DataMember(Order=6)]
        public long? RowsUpdated { get; set; }

        [DataMember(Order=7)]
        public string RequestType { get; set; }

        [DataMember(Order=8)]
        public string RequestBody { get; set; }

        [DataMember(Order=9)]
        public string UserAuthId { get; set; }

        [DataMember(Order=10)]
        public string UserAuthName { get; set; }

        [DataMember(Order=11)]
        public string RemoteIp { get; set; }

        [DataMember(Order=12)]
        public string Urn { get; set; }

        [DataMember(Order=13)]
        public int? RefId { get; set; }

        [DataMember(Order=14)]
        public string RefIdStr { get; set; }

        [DataMember(Order=15)]
        public string Meta { get; set; }
    }

    [Route("/measurementdetails/{Id}", "PUT")]
    [DataContract]
    public class UpdateMeasurementDetails
        : IReturn<IdResponse>, IPut, IUpdateDb<MeasurementDetails>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=6)]
        public Guid? TreatmentName { get; set; }

        [DataMember(Order=7)]
        public Guid? MeasurementTypeId { get; set; }

        [DataMember(Order=8)]
        public string MeasurementTypeName { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitId { get; set; }

        [DataMember(Order=10)]
        public string CustomerNotes { get; set; }

        [DataMember(Order=11)]
        public string Name { get; set; }
    }

    [Route("/measurements/{Id}", "PUT")]
    [DataContract]
    public class UpdateMeasurements
        : IReturn<IdResponse>, IPut, IUpdateDb<Measurements>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        public string TreatmentType { get; set; }
    }

    [Route("/measurementtypes/{Id}", "PUT")]
    [DataContract]
    public class UpdateMeasurementTypes
        : IReturn<IdResponse>, IPut, IUpdateDb<MeasurementTypes>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentTypeId { get; set; }
    }

    [Route("/migrations/{Id}", "PUT")]
    [DataContract]
    public class UpdateMigrations
        : IReturn<IdResponse>, IPut, IUpdateDb<Migrations>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public string Name { get; set; }

        [DataMember(Order=3)]
        public string Hash { get; set; }

        [DataMember(Order=4)]
        public DateTime? ExecutedAt { get; set; }
    }

    [Route("/schedules/{Id}", "PUT")]
    [DataContract]
    public class UpdateSchedules
        : IReturn<IdResponse>, IPut, IUpdateDb<Schedules>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ScheduleTime { get; set; }

        [DataMember(Order=6)]
        public DateTime? StartDate { get; set; }

        [DataMember(Order=7)]
        public DateTime? EndDate { get; set; }

        [DataMember(Order=8)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=9)]
        public string TreatmentName { get; set; }

        [DataMember(Order=10)]
        public bool? IsWeekendDifferent { get; set; }

        [DataMember(Order=11)]
        public Guid? AppointmentId { get; set; }

        [DataMember(Order=12)]
        public Guid? TreatmentUserId { get; set; }

        [DataMember(Order=13)]
        public DateTime? LastRunTime { get; set; }

        [DataMember(Order=14)]
        public string LastRunStatus { get; set; }

        [DataMember(Order=15)]
        public DateTime? NextRunDateTime { get; set; }
    }

    [Route("/schemamigrations/{Version}", "PUT")]
    [DataContract]
    public class UpdateSchemaMigrations
        : IReturn<IdResponse>, IPut, IUpdateDb<SchemaMigrations>
    {
        [DataMember(Order=1)]
        public long Version { get; set; }

        [DataMember(Order=2)]
        public bool Dirty { get; set; }
    }

    [Route("/treatmentremindersounds/{Id}", "PUT")]
    [DataContract]
    public class UpdateTreatmentReminderSounds
        : IReturn<IdResponse>, IPut, IUpdateDb<TreatmentReminderSounds>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public string Name { get; set; }

        [DataMember(Order=4)]
        public string Description { get; set; }
    }

    [Route("/treatments/{Id}", "PUT")]
    [DataContract]
    public class UpdateTreatments
        : IReturn<IdResponse>, IPut, IUpdateDb<Treatments>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public string TreatmentType { get; set; }

        [DataMember(Order=8)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitsId { get; set; }

        [DataMember(Order=10)]
        public Guid TreatmentReminderSoundId { get; set; }

        [DataMember(Order=11)]
        public bool? IsMuted { get; set; }

        [DataMember(Order=12)]
        public int? DailyFrequency { get; set; }

        [DataMember(Order=13)]
        public Guid? MeasurementTypesId { get; set; }

        [DataMember(Order=14)]
        public string MeasurementTypesName { get; set; }

        [DataMember(Order=15)]
        public string UnitsPlanned { get; set; }
    }

    [Route("/treatmentscheduledevents/{Id}", "PUT")]
    [DataContract]
    public class UpdateTreatmentScheduledEvents
        : IReturn<IdResponse>, IPut, IUpdateDb<TreatmentScheduledEvents>
    {
        [DataMember(Order=1)]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public short? Mood { get; set; }

        [DataMember(Order=6)]
        public Guid? ScheduleId { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        public string TreatmentName { get; set; }

        [DataMember(Order=9)]
        public Guid TreatmentUserId { get; set; }

        [DataMember(Order=10)]
        public string TreatmentUserName { get; set; }

        [DataMember(Order=11)]
        public string TreatmentDescription { get; set; }

        [DataMember(Order=12)]
        public int? Completed { get; set; }

        [DataMember(Order=13)]
        public string TreatmentType { get; set; }

        [DataMember(Order=14)]
        public Guid MeasurementTypeName { get; set; }

        [DataMember(Order=15)]
        public Guid? MeasurementId { get; set; }

        [DataMember(Order=16)]
        public string MeasurementName { get; set; }

        [DataMember(Order=17)]
        public string UnitsPlanned { get; set; }

        [DataMember(Order=18)]
        public string UnitsTaken { get; set; }

        [DataMember(Order=19)]
        public Guid? UnitTypesId { get; set; }

        [DataMember(Order=20)]
        public string UnitsTypeName { get; set; }

        [DataMember(Order=21)]
        public DateTime? DateTimeEventPlanned { get; set; }

        [DataMember(Order=22)]
        public DateTime? DateTimeUserConfirmedEvent { get; set; }

        [DataMember(Order=23)]
        public DateTime? DateTimeSkippedEvent { get; set; }

        [DataMember(Order=24)]
        public string CustomerNotes { get; set; }
    }

    [Route("/userauthdetails/{Id}", "PUT")]
    [DataContract]
    public class UpdateUserAuthDetails
        : IReturn<IdResponse>, IPut, IUpdateDb<UserAuthDetails>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }

        [DataMember(Order=2)]
        public int UserAuthId { get; set; }

        [DataMember(Order=3)]
        public string Provider { get; set; }

        [DataMember(Order=4)]
        public string UserId { get; set; }

        [DataMember(Order=5)]
        public string UserName { get; set; }

        [DataMember(Order=6)]
        public string FullName { get; set; }

        [DataMember(Order=7)]
        public string DisplayName { get; set; }

        [DataMember(Order=8)]
        public string FirstName { get; set; }

        [DataMember(Order=9)]
        public string LastName { get; set; }

        [DataMember(Order=10)]
        public string Company { get; set; }

        [DataMember(Order=11)]
        public string Email { get; set; }

        [DataMember(Order=12)]
        public string PhoneNumber { get; set; }

        [DataMember(Order=13)]
        public DateTime? BirthDate { get; set; }

        [DataMember(Order=14)]
        public string BirthDateRaw { get; set; }

        [DataMember(Order=15)]
        public string Address { get; set; }

        [DataMember(Order=16)]
        public string Address2 { get; set; }

        [DataMember(Order=17)]
        public string City { get; set; }

        [DataMember(Order=18)]
        public string State { get; set; }

        [DataMember(Order=19)]
        public string Country { get; set; }

        [DataMember(Order=20)]
        public string Culture { get; set; }

        [DataMember(Order=21)]
        public string Gender { get; set; }

        [DataMember(Order=22)]
        public string Language { get; set; }

        [DataMember(Order=23)]
        public string MailAddress { get; set; }

        [DataMember(Order=24)]
        public string Nickname { get; set; }

        [DataMember(Order=25)]
        public string PostalCode { get; set; }

        [DataMember(Order=26)]
        public string TimeZone { get; set; }

        [DataMember(Order=27)]
        public string RefreshToken { get; set; }

        [DataMember(Order=28)]
        public DateTime? RefreshTokenExpiry { get; set; }

        [DataMember(Order=29)]
        public string RequestToken { get; set; }

        [DataMember(Order=30)]
        public string RequestTokenSecret { get; set; }

        [DataMember(Order=31)]
        public string Items { get; set; }

        [DataMember(Order=32)]
        public string AccessToken { get; set; }

        [DataMember(Order=33)]
        public string AccessTokenSecret { get; set; }

        [DataMember(Order=34)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=35)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=36)]
        public int? RefId { get; set; }

        [DataMember(Order=37)]
        public string RefIdStr { get; set; }

        [DataMember(Order=38)]
        public string Meta { get; set; }
    }

    [Route("/userauthroles/{Id}", "PUT")]
    [DataContract]
    public class UpdateUserAuthRole
        : IReturn<IdResponse>, IPut, IUpdateDb<UserAuthRole>
    {
        [DataMember(Order=1)]
        public int Id { get; set; }

        [DataMember(Order=2)]
        public int UserAuthId { get; set; }

        [DataMember(Order=3)]
        public string Role { get; set; }

        [DataMember(Order=4)]
        public string Permission { get; set; }

        [DataMember(Order=5)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=6)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=7)]
        public int? RefId { get; set; }

        [DataMember(Order=8)]
        public string RefIdStr { get; set; }

        [DataMember(Order=9)]
        public string Meta { get; set; }
    }

}

namespace trackmyhealthmicro.ServiceModel.Types
{
    [DataContract]
    public class Appointments
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ApptDateTime { get; set; }

        [DataMember(Order=6)]
        public string Place { get; set; }

        [DataMember(Order=7)]
        public string PlaceNotes { get; set; }

        [DataMember(Order=8)]
        public string ProviderName { get; set; }

        [DataMember(Order=9)]
        public Guid AppUserAuthId { get; set; }
    }

    [DataContract]
    public class AppUser
    {
        [DataMember(Order=1)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=2)]
        public string ProfileUrl { get; set; }

        [DataMember(Order=3)]
        public string LastLoginIp { get; set; }

        [DataMember(Order=4)]
        public DateTime? LastLoginDate { get; set; }

        [DataMember(Order=5)]
        [AutoIncrement]
        public int Id { get; set; }

        [DataMember(Order=6)]
        public string UserName { get; set; }

        [DataMember(Order=7)]
        public string Email { get; set; }

        [DataMember(Order=8)]
        public string PrimaryEmail { get; set; }

        [DataMember(Order=9)]
        public string PhoneNumber { get; set; }

        [DataMember(Order=10)]
        public string FirstName { get; set; }

        [DataMember(Order=11)]
        public string LastName { get; set; }

        [DataMember(Order=12)]
        public string DisplayName { get; set; }

        [DataMember(Order=13)]
        public string Company { get; set; }

        [DataMember(Order=14)]
        public DateTime? BirthDate { get; set; }

        [DataMember(Order=15)]
        public string BirthDateRaw { get; set; }

        [DataMember(Order=16)]
        public string Address { get; set; }

        [DataMember(Order=17)]
        public string Address2 { get; set; }

        [DataMember(Order=18)]
        public string City { get; set; }

        [DataMember(Order=19)]
        public string State { get; set; }

        [DataMember(Order=20)]
        public string Country { get; set; }

        [DataMember(Order=21)]
        public string Culture { get; set; }

        [DataMember(Order=22)]
        public string FullName { get; set; }

        [DataMember(Order=23)]
        public string Gender { get; set; }

        [DataMember(Order=24)]
        public string Language { get; set; }

        [DataMember(Order=25)]
        public string MailAddress { get; set; }

        [DataMember(Order=26)]
        public string Nickname { get; set; }

        [DataMember(Order=27)]
        public string PostalCode { get; set; }

        [DataMember(Order=28)]
        public string TimeZone { get; set; }

        [DataMember(Order=29)]
        public string Salt { get; set; }

        [DataMember(Order=30)]
        public string PasswordHash { get; set; }

        [DataMember(Order=31)]
        public string DigestHa1Hash { get; set; }

        [DataMember(Order=32)]
        public string Roles { get; set; }

        [DataMember(Order=33)]
        public string Permissions { get; set; }

        [DataMember(Order=34)]
        public DateTime CreatedDate { get; set; }

        [DataMember(Order=35)]
        public DateTime ModifiedDate { get; set; }

        [DataMember(Order=36)]
        public int InvalidLoginAttempts { get; set; }

        [DataMember(Order=37)]
        public DateTime? LastLoginAttempt { get; set; }

        [DataMember(Order=38)]
        public DateTime? LockedDate { get; set; }

        [DataMember(Order=39)]
        public string RecoveryToken { get; set; }

        [DataMember(Order=40)]
        public int? RefId { get; set; }

        [DataMember(Order=41)]
        public string RefIdStr { get; set; }

        [DataMember(Order=42)]
        public string Meta { get; set; }
    }

    [DataContract]
    public class MeasurementDetails
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=6)]
        public Guid? TreatmentName { get; set; }

        [DataMember(Order=7)]
        public Guid? MeasurementTypeId { get; set; }

        [DataMember(Order=8)]
        public string MeasurementTypeName { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitId { get; set; }

        [DataMember(Order=10)]
        public string CustomerNotes { get; set; }

        [DataMember(Order=11)]
        public string Name { get; set; }
    }

    [DataContract]
    public class Measurements
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        [Required]
        public string TreatmentType { get; set; }
    }

    [DataContract]
    public class MeasurementTypes
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentTypeId { get; set; }
    }

    [DataContract]
    public class Migrations
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        [Required]
        public string Name { get; set; }

        [DataMember(Order=3)]
        [Required]
        public string Hash { get; set; }

        [DataMember(Order=4)]
        public DateTime? ExecutedAt { get; set; }
    }

    [DataContract]
    public class Schedules
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public DateTime? ScheduleTime { get; set; }

        [DataMember(Order=6)]
        public DateTime? StartDate { get; set; }

        [DataMember(Order=7)]
        public DateTime? EndDate { get; set; }

        [DataMember(Order=8)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=9)]
        public string TreatmentName { get; set; }

        [DataMember(Order=10)]
        public bool? IsWeekendDifferent { get; set; }

        [DataMember(Order=11)]
        public Guid? AppointmentId { get; set; }

        [DataMember(Order=12)]
        public Guid? TreatmentUserId { get; set; }

        [DataMember(Order=13)]
        public DateTime? LastRunTime { get; set; }

        [DataMember(Order=14)]
        public string LastRunStatus { get; set; }

        [DataMember(Order=15)]
        public DateTime? NextRunDateTime { get; set; }
    }

    [DataContract]
    public class SchemaMigrations
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public long Version { get; set; }

        [DataMember(Order=2)]
        public bool Dirty { get; set; }
    }

    [DataContract]
    public class TreatmentReminderSounds
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public string Name { get; set; }

        [DataMember(Order=4)]
        public string Description { get; set; }
    }

    [DataContract]
    public class Treatments
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public string Name { get; set; }

        [DataMember(Order=6)]
        public string Description { get; set; }

        [DataMember(Order=7)]
        [Required]
        public string TreatmentType { get; set; }

        [DataMember(Order=8)]
        public Guid AppUserAuthId { get; set; }

        [DataMember(Order=9)]
        public Guid? UnitsId { get; set; }

        [DataMember(Order=10)]
        public Guid TreatmentReminderSoundId { get; set; }

        [DataMember(Order=11)]
        public bool? IsMuted { get; set; }

        [DataMember(Order=12)]
        public int? DailyFrequency { get; set; }

        [DataMember(Order=13)]
        public Guid? MeasurementTypesId { get; set; }

        [DataMember(Order=14)]
        public string MeasurementTypesName { get; set; }

        [DataMember(Order=15)]
        public string UnitsPlanned { get; set; }
    }

    [DataContract]
    public class TreatmentScheduledEvents
    {
        [DataMember(Order=1)]
        [PrimaryKey]
        public Guid Id { get; set; }

        [DataMember(Order=2)]
        public DateTime CreatedAt { get; set; }

        [DataMember(Order=3)]
        public DateTime UpdatedAt { get; set; }

        [DataMember(Order=4)]
        public DateTime? DeletedAt { get; set; }

        [DataMember(Order=5)]
        public short? Mood { get; set; }

        [DataMember(Order=6)]
        public Guid? ScheduleId { get; set; }

        [DataMember(Order=7)]
        public Guid? TreatmentId { get; set; }

        [DataMember(Order=8)]
        public string TreatmentName { get; set; }

        [DataMember(Order=9)]
        public Guid TreatmentUserId { get; set; }

        [DataMember(Order=10)]
        public string TreatmentUserName { get; set; }

        [DataMember(Order=11)]
        public string TreatmentDescription { get; set; }

        [DataMember(Order=12)]
        public int? Completed { get; set; }

        [DataMember(Order=13)]
        [Required]
        public string TreatmentType { get; set; }

        [DataMember(Order=14)]
        public Guid MeasurementTypeName { get; set; }

        [DataMember(Order=15)]
        public Guid? MeasurementId { get; set; }

        [DataMember(Order=16)]
        public string MeasurementName { get; set; }

        [DataMember(Order=17)]
        public string UnitsPlanned { get; set; }

        [DataMember(Order=18)]
        public string UnitsTaken { get; set; }

        [DataMember(Order=19)]
        public Guid? UnitTypesId { get; set; }

        [DataMember(Order=20)]
        public string UnitsTypeName { get; set; }

        [DataMember(Order=21)]
        public DateTime? DateTimeEventPlanned { get; set; }

        [DataMember(Order=22)]
        public DateTime? DateTimeUserConfirmedEvent { get; set; }

        [DataMember(Order=23)]
        public DateTime? DateTimeSkippedEvent { get; set; }

        [DataMember(Order=24)]
        public string CustomerNotes { get; set; }
    }

}

