/* Options:
Date: 2022-06-02 23:29:08
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace: 
//MakePartial: True
//MakeVirtual: True
//MakeInternal: False
//MakeDataContractsExtensible: False
//AddReturnMarker: True
//AddDescriptionAsComments: True
//AddDataContractAttributes: False
//AddIndexesToDataMembers: False
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
using trackmyhealthmicro.ServiceModel;

namespace trackmyhealthmicro.ServiceModel
{
    ///<summary>
    ///Booking Details
    ///</summary>
    public partial class Booking
        : AuditBase
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual RoomType RoomType { get; set; }
        public virtual int RoomNumber { get; set; }
        public virtual DateTime BookingStartDate { get; set; }
        public virtual DateTime? BookingEndDate { get; set; }
        public virtual decimal Cost { get; set; }
        public virtual string Notes { get; set; }
        public virtual bool? Cancelled { get; set; }
    }

    ///<summary>
    ///Create a new Booking
    ///</summary>
    [Route("/bookings", "POST")]
    [ValidateRequest("HasRole(`Employee`)")]
    public partial class CreateBooking
        : IReturn<IdResponse>, ICreateDb<Booking>
    {
        ///<summary>
        ///Name this Booking is for
        ///</summary>
        [Validate("NotEmpty")]
        public virtual string Name { get; set; }

        public virtual RoomType RoomType { get; set; }
        [Validate("GreaterThan(0)")]
        public virtual int RoomNumber { get; set; }

        [Validate("GreaterThan(0)")]
        public virtual decimal Cost { get; set; }

        public virtual DateTime BookingStartDate { get; set; }
        public virtual DateTime? BookingEndDate { get; set; }
        [Input(Type="textarea")]
        public virtual string Notes { get; set; }
    }

    [Route("/todos", "POST")]
    public partial class CreateTodo
        : IReturn<Todo>, IPost
    {
        [Validate("NotEmpty")]
        public virtual string Text { get; set; }
    }

    ///<summary>
    ///Delete a Booking
    ///</summary>
    [Route("/booking/{Id}", "DELETE")]
    [ValidateRequest("HasRole(`Manager`)")]
    public partial class DeleteBooking
        : IReturnVoid, IDeleteDb<Booking>
    {
        public virtual int Id { get; set; }
    }

    [Route("/todos/{Id}", "DELETE")]
    public partial class DeleteTodo
        : IReturnVoid, IDelete
    {
        public virtual long Id { get; set; }
    }

    [Route("/todos", "DELETE")]
    public partial class DeleteTodos
        : IReturnVoid, IDelete
    {
        public DeleteTodos()
        {
            Ids = new List<long>{};
        }

        public virtual List<long> Ids { get; set; }
    }

    [Route("/hello")]
    [Route("/hello/{Name}")]
    public partial class Hello
        : IReturn<HelloResponse>
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloResponse
    {
        public virtual string Result { get; set; }
    }

    ///<summary>
    ///Find Bookings
    ///</summary>
    [Route("/bookings", "GET")]
    [Route("/bookings/{Id}", "GET")]
    public partial class QueryBookings
        : QueryDb<Booking>, IReturn<QueryResponse<Booking>>
    {
        public virtual int? Id { get; set; }
    }

    [Route("/todos", "GET")]
    public partial class QueryTodos
        : QueryData<Todo>, IReturn<QueryResponse<Todo>>
    {
        public QueryTodos()
        {
            Ids = new List<long>{};
        }

        public virtual int? Id { get; set; }
        public virtual List<long> Ids { get; set; }
        public virtual string TextContains { get; set; }
    }

    public enum RoomType
    {
        Single,
        Double,
        Queen,
        Twin,
        Suite,
    }

    public partial class Todo
    {
        public virtual long Id { get; set; }
        public virtual string Text { get; set; }
        public virtual bool IsFinished { get; set; }
    }

    ///<summary>
    ///Update an existing Booking
    ///</summary>
    [Route("/booking/{Id}", "PATCH")]
    [ValidateRequest("HasRole(`Employee`)")]
    public partial class UpdateBooking
        : IReturn<IdResponse>, IPatchDb<Booking>
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual RoomType? RoomType { get; set; }
        [Validate("GreaterThan(0)")]
        public virtual int? RoomNumber { get; set; }

        [Validate("GreaterThan(0)")]
        public virtual decimal? Cost { get; set; }

        public virtual DateTime? BookingStartDate { get; set; }
        public virtual DateTime? BookingEndDate { get; set; }
        public virtual string Notes { get; set; }
        public virtual bool? Cancelled { get; set; }
    }

    [Route("/todos/{Id}", "PUT")]
    public partial class UpdateTodo
        : IReturn<Todo>, IPut
    {
        public virtual long Id { get; set; }
        [Validate("NotEmpty")]
        public virtual string Text { get; set; }

        public virtual bool IsFinished { get; set; }
    }

}

