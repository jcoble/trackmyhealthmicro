--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-06-05 01:02:11 EDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
DO
$DO$

    BEGIN
        IF NOT EXISTS(
                SELECT
                FROM
                    pg_roles
                WHERE
                        rolname = 'postgres'
            ) THEN
            CREATE USER postgres SUPERUSER CREATEDB CREATEROLE REPLICATION BYPASSRLS;
        END
            IF;
    END
$DO$;
--
-- TOC entry 2 (class 3079 OID 17127)
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- TOC entry 3865 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- TOC entry 3 (class 3079 OID 17457)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3866 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- TOC entry 908 (class 1247 OID 17233)
-- Name: public; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.public AS public.citext
	CONSTRAINT email_check CHECK ((VALUE OPERATOR(public.~) '^[a-zA-Z0-9.!#$%&''*+\=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'::public.citext));


ALTER DOMAIN public.public OWNER TO postgres;

--
-- TOC entry 289 (class 1255 OID 17235)
-- Name: gen_hasura_uuid(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.gen_hasura_uuid() RETURNS uuid
    LANGUAGE sql
    AS $$

SELECT gen_random_uuid()
$$;


ALTER FUNCTION public.gen_hasura_uuid() OWNER TO postgres;

--
-- TOC entry 290 (class 1255 OID 17236)
-- Name: protect_default_bucket_delete(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.protect_default_bucket_delete() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN
    IF old.id = 'default' THEN
        RAISE EXCEPTION 'Can not delete default bucket';
    END
        IF;
    RETURN old;
END;
$$;


ALTER FUNCTION public.protect_default_bucket_delete() OWNER TO postgres;

--
-- TOC entry 291 (class 1255 OID 17237)
-- Name: protect_default_bucket_update(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.protect_default_bucket_update() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN
    IF old.id = 'default'
        AND new.id <> 'default' THEN
        RAISE EXCEPTION 'Can not rename default bucket';
    END
        IF;
    RETURN new;
END;
$$;


ALTER FUNCTION public.protect_default_bucket_update() OWNER TO postgres;

--
-- TOC entry 303 (class 1255 OID 17520)
-- Name: set_app_user_id(); Type: FUNCTION; Schema: public; Owner: postgres
--

--
-- TOC entry 292 (class 1255 OID 17238)
-- Name: set_current_timestamp_updated_at(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

DECLARE
    _new RECORD;

BEGIN
    _new := new;

    _new.updated_at = NOW();

    RETURN _new;
END;
$$;


ALTER FUNCTION public.set_current_timestamp_updated_at() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 227 (class 1259 OID 17356)
-- Name: user_auth_details; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.user_auth_details (
    id integer NOT NULL,
    user_auth_id integer NOT NULL,
    provider text,
    user_id text,
    user_name text,
    full_name text,
    display_name text,
    first_name text,
    last_name text,
    company text,
    email text,
    phone_number text,
    birth_date timestamp without time zone,
    birth_date_raw text,
    address text,
    address2 text,
    city text,
    state text,
    country text,
    culture text,
    gender text,
    language text,
    mail_address text,
    nickname text,
    postal_code text,
    time_zone text,
    refresh_token text,
    refresh_token_expiry timestamp without time zone,
    request_token text,
    request_token_secret text,
    items text,
    access_token text,
    access_token_secret text,
    created_date timestamp without time zone NOT NULL,
    modified_date timestamp without time zone NOT NULL,
    ref_id integer,
    ref_id_str text,
    meta text
);


ALTER TABLE public.user_auth_details OWNER TO root;

--
-- TOC entry 228 (class 1259 OID 17361)
-- Name: user_auth_details_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.user_auth_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_auth_details_id_seq OWNER TO root;

--
-- TOC entry 3867 (class 0 OID 0)
-- Dependencies: 228
-- Name: user_auth_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.user_auth_details_id_seq OWNED BY public.user_auth_details.id;


--
-- TOC entry 231 (class 1259 OID 17468)
-- Name: app_user; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.app_user (
    profile_url text,
    last_login_ip text,
    last_login_date timestamp without time zone,
    id integer DEFAULT nextval('public.user_auth_details_id_seq'::regclass) NOT NULL,
    user_name text,
    email text,
    primary_email text,
    phone_number text,
    first_name text,
    last_name text,
    display_name text,
    company text,
    birth_date timestamp without time zone,
    birth_date_raw text,
    address text,
    address2 text,
    city text,
    state text,
    country text,
    culture text,
    full_name text,
    gender text,
    language text,
    mail_address text,
    nickname text,
    postal_code text,
    time_zone text,
    salt text,
    password_hash text,
    digest_ha1_hash text,
    roles text,
    permissions text,
    created_date timestamp without time zone NOT NULL,
    modified_date timestamp without time zone NOT NULL,
    invalid_login_attempts integer NOT NULL,
    last_login_attempt timestamp without time zone,
    locked_date timestamp without time zone,
    recovery_token text,
    ref_id integer,
    ref_id_str text,
    meta text
);


ALTER TABLE public.app_user OWNER TO root;

--
-- TOC entry 232 (class 1259 OID 17491)
-- Name: app_user_auth_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.app_user_auth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.app_user_auth_id_seq OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 17243)
-- Name: appointment_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appointment_events (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    date_time_event_planned timestamp with time zone,
    date_time_user_confirmed timestamp with time zone,
    date_time_user_skipped timestamp with time zone,
    appt_date_time timestamp with time zone,
    place text,
    place_notes text,
    appointment_id uuid NOT NULL,
    appointment_event_notes character varying(3000)
);


ALTER TABLE public.appointment_events OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 17251)
-- Name: appointments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appointments (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    appt_date_time timestamp with time zone,
    place text,
    place_notes character varying(3000),
    provider_name text,
    app_user_id integer NOT NULL
);


ALTER TABLE public.appointments OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 17259)
-- Name: buckets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buckets (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    download_expiration integer DEFAULT 30 NOT NULL,
    min_upload_file_size integer DEFAULT 1 NOT NULL,
    max_upload_file_size integer DEFAULT 50000000 NOT NULL,
    cache_control text DEFAULT 'max-age=3600'::text,
    presigned_urls_enabled boolean DEFAULT true NOT NULL,
    CONSTRAINT download_expiration_valid_range CHECK (((download_expiration >= 1) AND (download_expiration <= 604800)))
);


ALTER TABLE public.buckets OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 17273)
-- Name: crud_event; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.crud_event (
    id bigint NOT NULL,
    event_type text,
    model text,
    model_id text,
    event_date timestamp without time zone NOT NULL,
    rows_updated bigint,
    request_type text,
    request_body text,
    user_auth_id text,
    user_auth_name text,
    remote_ip text,
    urn text,
    ref_id integer,
    ref_id_str text,
    meta text
);


ALTER TABLE public.crud_event OWNER TO root;

--
-- TOC entry 215 (class 1259 OID 17278)
-- Name: crud_event_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.crud_event_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.crud_event_id_seq OWNER TO root;

--
-- TOC entry 3868 (class 0 OID 0)
-- Dependencies: 215
-- Name: crud_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.crud_event_id_seq OWNED BY public.crud_event.id;


--
-- TOC entry 216 (class 1259 OID 17279)
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    bucket_id text DEFAULT 'default'::text NOT NULL,
    name text,
    size integer,
    mime_type text,
    etag text,
    is_uploaded boolean DEFAULT false,
    uploaded_by_user_id uuid
);


ALTER TABLE public.files OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 17289)
-- Name: measurement_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.measurement_details (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    treatment_id uuid,
    treatment_name uuid,
    measurement_type_id uuid,
    measurement_type_name text,
    unit_id uuid,
    customer_notes character varying(3000),
    name text
);


ALTER TABLE public.measurement_details OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 17297)
-- Name: measurement_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.measurement_types (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    name text,
    description character varying(3000),
    treatment_type_id uuid
);


ALTER TABLE public.measurement_types OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 17305)
-- Name: measurements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.measurements (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    name text,
    description character varying(3000),
    treatment_id uuid,
    treatment_type character varying(3) DEFAULT 'MED'::character varying NOT NULL
);


ALTER TABLE public.measurements OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 17314)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 17319)
-- Name: schedules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.schedules (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    schedule_time timestamp with time zone,
    start_date timestamp with time zone,
    end_date timestamp with time zone,
    treatment_id uuid,
    treatment_name text,
    is_weekend_different boolean,
    appointment_id uuid,
    treatment_user_id uuid,
    last_run_time timestamp with time zone,
    last_run_status text,
    next_run_date_time timestamp with time zone
);


ALTER TABLE public.schedules OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 17327)
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.schema_migrations (
    version bigint NOT NULL,
    dirty boolean NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 17330)
-- Name: test; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.test
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.test OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 17331)
-- Name: treatment_reminder_sounds; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.treatment_reminder_sounds (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text,
    description character varying(3000)
);


ALTER TABLE public.treatment_reminder_sounds OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 17338)
-- Name: treatment_scheduled_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.treatment_scheduled_events (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    mood smallint,
    schedule_id uuid,
    treatment_id uuid,
    treatment_name text,
    treatment_user_name text,
    treatment_description text,
    completed integer DEFAULT 0,
    treatment_type character varying(3) DEFAULT 'MED'::character varying NOT NULL,
    measurement_type_name uuid NOT NULL,
    measurement_id uuid,
    measurement_name text,
    units_planned jsonb,
    units_taken jsonb,
    unit_types_id uuid,
    units_type_name text,
    date_time_event_planned timestamp with time zone,
    date_time_user_confirmed_event timestamp with time zone,
    date_time_skipped_event timestamp with time zone,
    customer_notes text,
    treatment_user_id integer NOT NULL
);


ALTER TABLE public.treatment_scheduled_events OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 17348)
-- Name: treatments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.treatments (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    name text,
    description character varying(3000),
    treatment_type character varying(3) NOT NULL,
    units_id uuid,
    treatment_reminder_sound_id uuid NOT NULL,
    is_muted boolean,
    daily_frequency integer,
    measurement_types_id uuid,
    measurement_types_name text,
    units_planned jsonb,
    treatment_user_id integer NOT NULL
);


ALTER TABLE public.treatments OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 17362)
-- Name: user_auth_role; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.user_auth_role (
    id integer NOT NULL,
    user_auth_id integer NOT NULL,
    role text,
    permission text,
    created_date timestamp without time zone NOT NULL,
    modified_date timestamp without time zone NOT NULL,
    ref_id integer,
    ref_id_str text,
    meta text
);


ALTER TABLE public.user_auth_role OWNER TO root;

--
-- TOC entry 230 (class 1259 OID 17367)
-- Name: user_auth_role_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.user_auth_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_auth_role_id_seq OWNER TO root;

--
-- TOC entry 3869 (class 0 OID 0)
-- Dependencies: 230
-- Name: user_auth_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.user_auth_role_id_seq OWNED BY public.user_auth_role.id;


--
-- TOC entry 3625 (class 2604 OID 17477)
-- Name: crud_event id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.crud_event ALTER COLUMN id SET DEFAULT nextval('public.crud_event_id_seq'::regclass);


--
-- TOC entry 3656 (class 2604 OID 17478)
-- Name: user_auth_details id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_details ALTER COLUMN id SET DEFAULT nextval('public.user_auth_details_id_seq'::regclass);


--
-- TOC entry 3657 (class 2604 OID 17479)
-- Name: user_auth_role id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_role ALTER COLUMN id SET DEFAULT nextval('public.user_auth_role_id_seq'::regclass);


--
-- TOC entry 3702 (class 2606 OID 17481)
-- Name: app_user app_user_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_pkey PRIMARY KEY (id);


--
-- TOC entry 3660 (class 2606 OID 17374)
-- Name: appointment_events appointment_events_appointment_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointment_events
    ADD CONSTRAINT appointment_events_appointment_id_key UNIQUE (appointment_id);


--
-- TOC entry 3663 (class 2606 OID 17376)
-- Name: appointments appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);


--
-- TOC entry 3666 (class 2606 OID 17378)
-- Name: crud_event crud_event_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.crud_event
    ADD CONSTRAINT crud_event_pkey PRIMARY KEY (id);


--
-- TOC entry 3671 (class 2606 OID 17380)
-- Name: measurement_details measurement_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurement_details
    ADD CONSTRAINT measurement_details_pkey PRIMARY KEY (id);


--
-- TOC entry 3674 (class 2606 OID 17382)
-- Name: measurement_types measurement_types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurement_types
    ADD CONSTRAINT measurement_types_pkey PRIMARY KEY (id);


--
-- TOC entry 3677 (class 2606 OID 17384)
-- Name: measurements measurements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT measurements_pkey PRIMARY KEY (id);


--
-- TOC entry 3679 (class 2606 OID 17386)
-- Name: migrations migrations_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);


--
-- TOC entry 3681 (class 2606 OID 17388)
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3684 (class 2606 OID 17390)
-- Name: schedules schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);


--
-- TOC entry 3686 (class 2606 OID 17392)
-- Name: schedules schedules_treatment_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_treatment_user_id_key UNIQUE (treatment_user_id);


--
-- TOC entry 3688 (class 2606 OID 17394)
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- TOC entry 3690 (class 2606 OID 17396)
-- Name: treatment_reminder_sounds treatment_reminder_sounds_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_reminder_sounds
    ADD CONSTRAINT treatment_reminder_sounds_pkey PRIMARY KEY (id);


--
-- TOC entry 3693 (class 2606 OID 17398)
-- Name: treatment_scheduled_events treatment_scheduled_events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT treatment_scheduled_events_pkey PRIMARY KEY (id);


--
-- TOC entry 3696 (class 2606 OID 17402)
-- Name: treatments treatments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT treatments_pkey PRIMARY KEY (id);


--
-- TOC entry 3698 (class 2606 OID 17404)
-- Name: user_auth_details user_auth_details_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_details
    ADD CONSTRAINT user_auth_details_pkey PRIMARY KEY (id);


--
-- TOC entry 3700 (class 2606 OID 17406)
-- Name: user_auth_role user_auth_role_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_role
    ADD CONSTRAINT user_auth_role_pkey PRIMARY KEY (id);


--
-- TOC entry 3661 (class 1259 OID 17407)
-- Name: idx_appointment_events_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_appointment_events_deleted_at ON public.appointment_events USING btree (deleted_at);


--
-- TOC entry 3664 (class 1259 OID 17408)
-- Name: idx_appointments_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_appointments_deleted_at ON public.appointments USING btree (deleted_at);


--
-- TOC entry 3703 (class 1259 OID 17483)
-- Name: idx_appuser_email; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_appuser_email ON public.app_user USING btree (email);


--
-- TOC entry 3704 (class 1259 OID 17484)
-- Name: idx_appuser_username; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_appuser_username ON public.app_user USING btree (user_name);


--
-- TOC entry 3667 (class 1259 OID 17409)
-- Name: idx_crudevent_model; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_crudevent_model ON public.crud_event USING btree (model);


--
-- TOC entry 3668 (class 1259 OID 17410)
-- Name: idx_crudevent_modelid; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_crudevent_modelid ON public.crud_event USING btree (model_id);


--
-- TOC entry 3669 (class 1259 OID 17411)
-- Name: idx_measurement_details_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_measurement_details_deleted_at ON public.measurement_details USING btree (deleted_at);


--
-- TOC entry 3672 (class 1259 OID 17412)
-- Name: idx_measurement_types_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_measurement_types_deleted_at ON public.measurement_types USING btree (deleted_at);


--
-- TOC entry 3675 (class 1259 OID 17413)
-- Name: idx_measurements_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_measurements_deleted_at ON public.measurements USING btree (deleted_at);


--
-- TOC entry 3682 (class 1259 OID 17414)
-- Name: idx_schedules_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_schedules_deleted_at ON public.schedules USING btree (deleted_at);


--
-- TOC entry 3691 (class 1259 OID 17415)
-- Name: idx_treatment_scheduled_events_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_treatment_scheduled_events_deleted_at ON public.treatment_scheduled_events USING btree (deleted_at);


--
-- TOC entry 3694 (class 1259 OID 17416)
-- Name: idx_treatments_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_treatments_deleted_at ON public.treatments USING btree (deleted_at);


--
-- TOC entry 3718 (class 2620 OID 17417)
-- Name: buckets check_default_bucket_delete; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER check_default_bucket_delete BEFORE DELETE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.protect_default_bucket_delete();


--
-- TOC entry 3717 (class 2620 OID 17418)
-- Name: buckets check_default_bucket_update; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER check_default_bucket_update BEFORE UPDATE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.protect_default_bucket_update();


--
-- TOC entry 3716 (class 2620 OID 17419)
-- Name: buckets set_public_buckets_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER set_public_buckets_updated_at BEFORE UPDATE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();


--
-- TOC entry 3719 (class 2620 OID 17420)
-- Name: files set_public_files_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER set_public_files_updated_at BEFORE UPDATE ON public.files FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();


--
-- TOC entry 3705 (class 2606 OID 17521)
-- Name: appointments appointments_app_user_key_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_app_user_key_fk FOREIGN KEY (app_user_id) REFERENCES public.app_user(id);


--
-- TOC entry 3706 (class 2606 OID 17421)
-- Name: measurements fk_measurements_treatment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT fk_measurements_treatment FOREIGN KEY (treatment_id) REFERENCES public.treatments(id);


--
-- TOC entry 3707 (class 2606 OID 17426)
-- Name: schedules fk_schedules_appointment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT fk_schedules_appointment FOREIGN KEY (appointment_id) REFERENCES public.appointments(id);


--
-- TOC entry 3709 (class 2606 OID 17431)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_measurement_types; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_measurement_types FOREIGN KEY (measurement_type_name) REFERENCES public.measurement_types(id);


--
-- TOC entry 3710 (class 2606 OID 17436)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_measurements; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_measurements FOREIGN KEY (measurement_id) REFERENCES public.measurements(id);


--
-- TOC entry 3711 (class 2606 OID 17441)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_schedule; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_schedule FOREIGN KEY (schedule_id) REFERENCES public.schedules(id);


--
-- TOC entry 3712 (class 2606 OID 17446)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_treatment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_treatment FOREIGN KEY (treatment_id) REFERENCES public.treatments(id);


--
-- TOC entry 3714 (class 2606 OID 17451)
-- Name: treatments fk_treatments_treatment_reminder_sound; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT fk_treatments_treatment_reminder_sound FOREIGN KEY (treatment_reminder_sound_id) REFERENCES public.treatment_reminder_sounds(id);


--
-- TOC entry 3708 (class 2606 OID 17526)
-- Name: schedules schedules_app_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_app_user_id_fk FOREIGN KEY (treatment_user_id) REFERENCES public.treatments(id);


--
-- TOC entry 3713 (class 2606 OID 17531)
-- Name: treatment_scheduled_events treatment_scheduled_events_treatment_user_id__fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT treatment_scheduled_events_treatment_user_id__fk FOREIGN KEY (treatment_user_id) REFERENCES public.app_user(id);


--
-- TOC entry 3715 (class 2606 OID 17536)
-- Name: treatments treatments_user_i_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT treatments_user_i_fk FOREIGN KEY (treatment_user_id) REFERENCES public.app_user(id);


--
-- TOC entry 3864 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO pg_database_owner;


-- Completed on 2022-06-05 01:02:11 EDT

--
-- PostgreSQL database dump complete
--
