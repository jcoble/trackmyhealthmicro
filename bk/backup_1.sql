--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-06-02 20:47:21 EDT

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
-- CREATE SCHEMA public;
--
-- ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2 (class 3079 OID 16389)
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- TOC entry 2812 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- TOC entry 897 (class 1247 OID 16495)
-- Name: public; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.public AS public.citext
    CONSTRAINT email_check CHECK ((VALUE OPERATOR(public.~) '^[a-zA-Z0-9.!#$%&''*+\=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'::public.citext));

IF NOT EXISTS CREATE role postgres ;
ALTER DOMAIN public.public OWNER TO postgres;

--
-- TOC entry 292 (class 1255 OID 16855)
-- Name: createnewtreatmentscheduledevents(); Type: PROCEDURE; Schema: public; Owner: postgres
--
--
-- CREATE PROCEDURE public.createnewtreatmentscheduledevents()
--     LANGUAGE plpgsql
-- AS $$
--
-- DECLARE
--     NowDatetime TIMESTAMP
--         WITH TIME ZONE = current_timestamp;
--
-- BEGIN
--     -- get the schedules for today that have not run yet and throw into a CTE;;WITH todaysSchedules AS (
--     CREATE TEMP TABLE tempSchedules AS
--
--     SELECT s.id
--          ,s.schedule_time
--          ,s.start_date
--          ,s.end_date
--          ,s.treatment_id
--          ,s.is_weekend_different
--          ,s.appointment_id
--          ,s.treatment_user_id
--          ,s.last_run_time
--          ,s.last_run_status
--          ,s.next_run_date_time
--     FROM schedules s
--     WHERE s.schedule_time >= NowDatetime
--       AND s.schedule_time <= date_trunc('day', s.schedule_time) + interval '1 day' - interval '1 second'
--       AND s.start_date <= Nowdatetime
--       AND s.end_date >= NowDatetime
--       AND s.next_run_date_time >= date_trunc('day', s.schedule_time) - interval '1 day' + interval '1 second'
--       AND s.last_run_time >= date_trunc('day', s.schedule_time) + interval '1 day' - interval '1 second'
--       AND s.last_run_time <= NowDatetime
--       AND s.last_run_status <> 0
--       AND s.deleted_at == NULL;
--
--     INSERT INTO treatment_scheduled_events (
--                                             deleted_at
--                                            ,mood
--                                            ,schedule_id
--                                            ,treatment_id
--                                            ,treatment_name
--                                            ,treatment_user_id
--                                            ,treatment_user_name
--                                            ,treatment_description
--                                            ,measurement_type_name
--                                            ,measurement_id
--                                            ,measurement_name
--                                            ,units_planned
--                                            ,units_taken
--                                            ,unit_types_id
--                                            ,units_type_name
--                                            ,date_time_event_planned
--     )
--     SELECT NULL
--          ,NULL
--          ,TS.id
--          ,TS.treatment_id
--          ,T.name
--          ,TS.treatment_user_id
--          ,T.user_id
--          ,T.description
--          ,T.treatment_type
--          ,T.units_planned
--          ,NULL
--          ,U.id
--          ,U.name
--          ,TS.schedule_time
--          ,NULL
--          ,NULL
--          ,NULL
--     FROM tempSchedules TS
--              INNER JOIN treatments T
--                         ON TS.treatment_id = T.id
--              INNER JOIN users U
--                         ON T.user_id = U.id
--              INNER JOIN measurement_types M
--                         ON M.id = T.measurement_types_id
--              INNER JOIN unit_types U
--                         ON U.id = T.units_id;

    --we need to now fill in the schedules with the last_run_time , last_run_status, and next_run_date_time
--     UPDATE schedules
--     SET last_run_time = NowDatetime
--       ,last_run_status = 1
--       ,next_run_date_time = 3
--     FROM tempSchedules
--     WHERE schedules.id = tempSchedules.id;
--
--     DROP TABLE tempSchedules;
-- END;$$;


-- ALTER PROCEDURE public.createnewtreatmentscheduledevents() OWNER TO postgres;

--
-- TOC entry 280 (class 1255 OID 16497)
-- Name: gen_hasura_uuid(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.gen_hasura_uuid() RETURNS uuid
    LANGUAGE sql
AS $$

SELECT gen_random_uuid()
$$;


ALTER FUNCTION public.gen_hasura_uuid() OWNER TO postgres;

--
-- TOC entry 281 (class 1255 OID 16498)
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
-- TOC entry 282 (class 1255 OID 16499)
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
-- TOC entry 283 (class 1255 OID 16500)
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
-- TOC entry 225 (class 1259 OID 17010)
-- Name: app_user; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.app_user (
                                 app_user_auth_id uuid DEFAULT gen_random_uuid() NOT NULL,
                                 profile_url text,
                                 last_login_ip text,
                                 last_login_date timestamp without time zone,
                                 id integer NOT NULL,
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
-- TOC entry 224 (class 1259 OID 17009)
-- Name: app_user_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.app_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.app_user_id_seq OWNER TO root;

--
-- TOC entry 2813 (class 0 OID 0)
-- Dependencies: 224
-- Name: app_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.app_user_id_seq OWNED BY public.app_user.id;


--
-- TOC entry 210 (class 1259 OID 16501)
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
-- TOC entry 211 (class 1259 OID 16511)
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
                                     app_user_auth_id uuid NOT NULL
);


ALTER TABLE public.appointments OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16521)
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
-- TOC entry 231 (class 1259 OID 17039)
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
-- TOC entry 230 (class 1259 OID 17038)
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
-- TOC entry 2814 (class 0 OID 0)
-- Dependencies: 230
-- Name: crud_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.crud_event_id_seq OWNED BY public.crud_event.id;


--
-- TOC entry 213 (class 1259 OID 16535)
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
-- TOC entry 214 (class 1259 OID 16545)
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
-- TOC entry 215 (class 1259 OID 16555)
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
-- TOC entry 216 (class 1259 OID 16565)
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
-- TOC entry 217 (class 1259 OID 16576)
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
-- TOC entry 218 (class 1259 OID 16621)
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
-- TOC entry 220 (class 1259 OID 16647)
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.schema_migrations (
                                          version bigint NOT NULL,
                                          dirty boolean NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16650)
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
-- TOC entry 222 (class 1259 OID 16651)
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
-- TOC entry 219 (class 1259 OID 16633)
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
                                                   treatment_user_id uuid NOT NULL,
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
                                                   customer_notes text
);


ALTER TABLE public.treatment_scheduled_events OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16660)
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
                                   app_user_auth_id uuid NOT NULL,
                                   units_id uuid,
                                   treatment_reminder_sound_id uuid NOT NULL,
                                   is_muted boolean,
                                   daily_frequency integer,
                                   measurement_types_id uuid,
                                   measurement_types_name text,
                                   units_planned jsonb
);


ALTER TABLE public.treatments OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 17021)
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
-- TOC entry 226 (class 1259 OID 17020)
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
-- TOC entry 2815 (class 0 OID 0)
-- Dependencies: 226
-- Name: user_auth_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.user_auth_details_id_seq OWNED BY public.user_auth_details.id;


--
-- TOC entry 229 (class 1259 OID 17030)
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
-- TOC entry 228 (class 1259 OID 17029)
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
-- TOC entry 2816 (class 0 OID 0)
-- Dependencies: 228
-- Name: user_auth_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.user_auth_role_id_seq OWNED BY public.user_auth_role.id;


--
-- TOC entry 2599 (class 2604 OID 17013)
-- Name: app_user id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.app_user ALTER COLUMN id SET DEFAULT nextval('public.app_user_id_seq'::regclass);


--
-- TOC entry 2603 (class 2604 OID 17042)
-- Name: crud_event id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.crud_event ALTER COLUMN id SET DEFAULT nextval('public.crud_event_id_seq'::regclass);


--
-- TOC entry 2601 (class 2604 OID 17024)
-- Name: user_auth_details id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_details ALTER COLUMN id SET DEFAULT nextval('public.user_auth_details_id_seq'::regclass);


--
-- TOC entry 2602 (class 2604 OID 17033)
-- Name: user_auth_role id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_role ALTER COLUMN id SET DEFAULT nextval('public.user_auth_role_id_seq'::regclass);


--
-- TOC entry 2608 (class 2606 OID 17050)
-- Name: appointments app_user_auth_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT app_user_auth_id UNIQUE (app_user_auth_id);


--
-- TOC entry 2644 (class 2606 OID 17017)
-- Name: app_user app_user_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_pkey PRIMARY KEY (id);


--
-- TOC entry 2605 (class 2606 OID 16510)
-- Name: appointment_events appointment_events_appointment_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointment_events
    ADD CONSTRAINT appointment_events_appointment_id_key UNIQUE (appointment_id);


--
-- TOC entry 2610 (class 2606 OID 16520)
-- Name: appointments appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);


--
-- TOC entry 2652 (class 2606 OID 17046)
-- Name: crud_event crud_event_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.crud_event
    ADD CONSTRAINT crud_event_pkey PRIMARY KEY (id);


--
-- TOC entry 2614 (class 2606 OID 16554)
-- Name: measurement_details measurement_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurement_details
    ADD CONSTRAINT measurement_details_pkey PRIMARY KEY (id);


--
-- TOC entry 2617 (class 2606 OID 16564)
-- Name: measurement_types measurement_types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurement_types
    ADD CONSTRAINT measurement_types_pkey PRIMARY KEY (id);


--
-- TOC entry 2620 (class 2606 OID 16575)
-- Name: measurements measurements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT measurements_pkey PRIMARY KEY (id);


--
-- TOC entry 2622 (class 2606 OID 16718)
-- Name: migrations migrations_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);


--
-- TOC entry 2624 (class 2606 OID 16582)
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 2627 (class 2606 OID 16630)
-- Name: schedules schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);


--
-- TOC entry 2629 (class 2606 OID 16632)
-- Name: schedules schedules_treatment_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_treatment_user_id_key UNIQUE (treatment_user_id);


--
-- TOC entry 2636 (class 2606 OID 16720)
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- TOC entry 2638 (class 2606 OID 16659)
-- Name: treatment_reminder_sounds treatment_reminder_sounds_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_reminder_sounds
    ADD CONSTRAINT treatment_reminder_sounds_pkey PRIMARY KEY (id);


--
-- TOC entry 2632 (class 2606 OID 16644)
-- Name: treatment_scheduled_events treatment_scheduled_events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT treatment_scheduled_events_pkey PRIMARY KEY (id);


--
-- TOC entry 2634 (class 2606 OID 16646)
-- Name: treatment_scheduled_events treatment_scheduled_events_treatment_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT treatment_scheduled_events_treatment_user_id_key UNIQUE (treatment_user_id);


--
-- TOC entry 2641 (class 2606 OID 16669)
-- Name: treatments treatments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT treatments_pkey PRIMARY KEY (id);


--
-- TOC entry 2648 (class 2606 OID 17028)
-- Name: user_auth_details user_auth_details_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_details
    ADD CONSTRAINT user_auth_details_pkey PRIMARY KEY (id);


--
-- TOC entry 2650 (class 2606 OID 17037)
-- Name: user_auth_role user_auth_role_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_auth_role
    ADD CONSTRAINT user_auth_role_pkey PRIMARY KEY (id);


--
-- TOC entry 2642 (class 1259 OID 17052)
-- Name: app_user_app_user_auth_id_uindex; Type: INDEX; Schema: public; Owner: root
--

CREATE UNIQUE INDEX app_user_app_user_auth_id_uindex ON public.app_user USING btree (app_user_auth_id);


--
-- TOC entry 2606 (class 1259 OID 16721)
-- Name: idx_appointment_events_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_appointment_events_deleted_at ON public.appointment_events USING btree (deleted_at);


--
-- TOC entry 2611 (class 1259 OID 16722)
-- Name: idx_appointments_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_appointments_deleted_at ON public.appointments USING btree (deleted_at);


--
-- TOC entry 2645 (class 1259 OID 17019)
-- Name: idx_appuser_email; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_appuser_email ON public.app_user USING btree (email);


--
-- TOC entry 2646 (class 1259 OID 17018)
-- Name: idx_appuser_username; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_appuser_username ON public.app_user USING btree (user_name);


--
-- TOC entry 2653 (class 1259 OID 17047)
-- Name: idx_crudevent_model; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_crudevent_model ON public.crud_event USING btree (model);


--
-- TOC entry 2654 (class 1259 OID 17048)
-- Name: idx_crudevent_modelid; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX idx_crudevent_modelid ON public.crud_event USING btree (model_id);


--
-- TOC entry 2612 (class 1259 OID 16723)
-- Name: idx_measurement_details_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_measurement_details_deleted_at ON public.measurement_details USING btree (deleted_at);


--
-- TOC entry 2615 (class 1259 OID 16724)
-- Name: idx_measurement_types_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_measurement_types_deleted_at ON public.measurement_types USING btree (deleted_at);


--
-- TOC entry 2618 (class 1259 OID 16725)
-- Name: idx_measurements_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_measurements_deleted_at ON public.measurements USING btree (deleted_at);


--
-- TOC entry 2625 (class 1259 OID 16730)
-- Name: idx_schedules_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_schedules_deleted_at ON public.schedules USING btree (deleted_at);


--
-- TOC entry 2630 (class 1259 OID 16716)
-- Name: idx_treatment_scheduled_events_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_treatment_scheduled_events_deleted_at ON public.treatment_scheduled_events USING btree (deleted_at);


--
-- TOC entry 2639 (class 1259 OID 16731)
-- Name: idx_treatments_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_treatments_deleted_at ON public.treatments USING btree (deleted_at);


--
-- TOC entry 2665 (class 2620 OID 16736)
-- Name: buckets check_default_bucket_delete; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER check_default_bucket_delete BEFORE DELETE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.protect_default_bucket_delete();


--
-- TOC entry 2664 (class 2620 OID 16737)
-- Name: buckets check_default_bucket_update; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER check_default_bucket_update BEFORE UPDATE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.protect_default_bucket_update();


--
-- TOC entry 2663 (class 2620 OID 16738)
-- Name: buckets set_public_buckets_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER set_public_buckets_updated_at BEFORE UPDATE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();


--
-- TOC entry 2666 (class 2620 OID 16739)
-- Name: files set_public_files_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER set_public_files_updated_at BEFORE UPDATE ON public.files FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();


--
-- TOC entry 2655 (class 2606 OID 16752)
-- Name: measurements fk_measurements_treatment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT fk_measurements_treatment FOREIGN KEY (treatment_id) REFERENCES public.treatments(id);


--
-- TOC entry 2656 (class 2606 OID 16769)
-- Name: schedules fk_schedules_appointment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT fk_schedules_appointment FOREIGN KEY (appointment_id) REFERENCES public.appointments(id);


--
-- TOC entry 2658 (class 2606 OID 16789)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_measurement_types; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_measurement_types FOREIGN KEY (measurement_type_name) REFERENCES public.measurement_types(id);


--
-- TOC entry 2659 (class 2606 OID 16794)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_measurements; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_measurements FOREIGN KEY (measurement_id) REFERENCES public.measurements(id);


--
-- TOC entry 2660 (class 2606 OID 16799)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_schedule; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_schedule FOREIGN KEY (schedule_id) REFERENCES public.schedules(id);


--
-- TOC entry 2657 (class 2606 OID 16774)
-- Name: treatment_scheduled_events fk_treatment_scheduled_events_treatment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_treatment FOREIGN KEY (treatment_id) REFERENCES public.treatments(id);


--
-- TOC entry 2661 (class 2606 OID 16804)
-- Name: treatments fk_treatments_treatment_reminder_sound; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT fk_treatments_treatment_reminder_sound FOREIGN KEY (treatment_reminder_sound_id) REFERENCES public.treatment_reminder_sounds(id);


--
-- TOC entry 2662 (class 2606 OID 17053)
-- Name: treatments treatments_app_user_auth_key_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT treatments_app_user_auth_key_fk FOREIGN KEY (app_user_auth_id) REFERENCES public.app_user(app_user_auth_id);


--
-- TOC entry 2811 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO pg_database_owner;


-- Completed on 2022-06-02 20:47:22 EDT

--
-- PostgreSQL database dump complete
--
