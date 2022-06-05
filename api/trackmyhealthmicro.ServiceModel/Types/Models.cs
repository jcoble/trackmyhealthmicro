using System;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.DataAnnotations;
using ServiceStack.Html;

namespace trackmyhealthmicro.ServiceModel.Types;

public class Appointments
{
    [PrimaryKey] public Guid Id { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ApptDateTime { get; set; }
    public string Place { get; set; }
    public string PlaceNotes { get; set; }
    public string ProviderName { get; set; }
    public Guid AppUserAuthId { get; set; }
}

public class AppUser
{
    public string ProfileUrl { get; set; }
    public string LastLoginIp { get; set; }
    public DateTime? LastLoginDate { get; set; }
    [AutoIncrement] public int Id { get; set; }

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

public class MeasurementDetails
{
    [PrimaryKey] public Guid Id { get; set; }

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

public class Measurements
{
    [PrimaryKey] public Guid Id { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentId { get; set; }
    [Required] public string TreatmentType { get; set; }
}

public class MeasurementTypes
{
    [PrimaryKey] public Guid Id { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Guid? TreatmentTypeId { get; set; }
}

// public class Migrations
// {
//     [PrimaryKey] public Guid Id { get; set; }
//
//     [Required] public string Name { get; set; }
//
//     [Required] public string Hash { get; set; }
//
//     public DateTime? ExecutedAt { get; set; }
// }

public class Schedules
{
    [PrimaryKey] public Guid Id { get; set; }

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

// public class SchemaMigrations
// {
//     [PrimaryKey] public long Version { get; set; }
//
//     public bool Dirty { get; set; }
// }

public class TreatmentReminderSounds
{
    [PrimaryKey] public Guid Id { get; set; }

    public DateTime CreatedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
}

public class Treatments
{
    [PrimaryKey] public Guid Id { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    [Required] public string TreatmentType { get; set; }

    public Guid AppUserAuthId { get; set; }
    public Guid? UnitsId { get; set; }
    public Guid TreatmentReminderSoundId { get; set; }
    public bool? IsMuted { get; set; }
    public int? DailyFrequency { get; set; }
    public Guid? MeasurementTypesId { get; set; }
    public string MeasurementTypesName { get; set; }
    public string UnitsPlanned { get; set; }
}

public class TreatmentScheduledEvents
{
    [PrimaryKey] public Guid Id { get; set; }

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
    [Required] public string TreatmentType { get; set; }

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