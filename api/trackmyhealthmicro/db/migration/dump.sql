PGDMP             	            z           track_my_health    14.3    14.3 s    3           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            4           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            5           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            6           1262    16386    track_my_health    DATABASE     d   CREATE DATABASE track_my_health WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE track_my_health;
                postgres    false            7           0    0    SCHEMA public    ACL     1   GRANT ALL ON SCHEMA public TO pg_database_owner;
                   postgres    false    5                        3079    17127    citext 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
    DROP EXTENSION citext;
                   false            8           0    0    EXTENSION citext    COMMENT     S   COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';
                        false    2                        3079    17457 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            9           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    3            ?           1247    17233    public    DOMAIN        CREATE DOMAIN public.public AS public.citext
	CONSTRAINT email_check CHECK ((VALUE OPERATOR(public.~) '^[a-zA-Z0-9.!#$%&''*+\=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'::public.citext));
    DROP DOMAIN public.public;
       public          postgres    false    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2    2            "           1255    17235    gen_hasura_uuid()    FUNCTION     o   CREATE FUNCTION public.gen_hasura_uuid() RETURNS uuid
    LANGUAGE sql
    AS $$

SELECT gen_random_uuid()
$$;
 (   DROP FUNCTION public.gen_hasura_uuid();
       public          postgres    false            #           1255    17236    protect_default_bucket_delete()    FUNCTION     ?   CREATE FUNCTION public.protect_default_bucket_delete() RETURNS trigger
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
 6   DROP FUNCTION public.protect_default_bucket_delete();
       public          postgres    false            $           1255    17237    protect_default_bucket_update()    FUNCTION       CREATE FUNCTION public.protect_default_bucket_update() RETURNS trigger
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
 6   DROP FUNCTION public.protect_default_bucket_update();
       public          postgres    false            %           1255    17238 "   set_current_timestamp_updated_at()    FUNCTION     ?   CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
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
 9   DROP FUNCTION public.set_current_timestamp_updated_at();
       public          postgres    false            ?            1259    17468    app_user    TABLE     i  CREATE TABLE public.app_user (
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
    meta text,
    app_user_auth_id uuid DEFAULT public.uuid_generate_v1()
);
    DROP TABLE public.app_user;
       public         heap    root    false    3            ?            1259    17491    app_user_auth_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.app_user_auth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.app_user_auth_id_seq;
       public          postgres    false            ?            1259    17242    app_user_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.app_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.app_user_id_seq;
       public          root    false    232            :           0    0    app_user_id_seq    SEQUENCE OWNED BY     J   ALTER SEQUENCE public.app_user_id_seq OWNED BY public.app_user.user_name;
          public          root    false    211            ?            1259    17243    appointment_events    TABLE     P  CREATE TABLE public.appointment_events (
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
 &   DROP TABLE public.appointment_events;
       public         heap    postgres    false            ?            1259    17251    appointments    TABLE     ?  CREATE TABLE public.appointments (
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
     DROP TABLE public.appointments;
       public         heap    postgres    false            ?            1259    17259    buckets    TABLE     ^  CREATE TABLE public.buckets (
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
    DROP TABLE public.buckets;
       public         heap    postgres    false            ?            1259    17273 
   crud_event    TABLE     y  CREATE TABLE public.crud_event (
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
    DROP TABLE public.crud_event;
       public         heap    root    false            ?            1259    17278    crud_event_id_seq    SEQUENCE     z   CREATE SEQUENCE public.crud_event_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.crud_event_id_seq;
       public          root    false    215            ;           0    0    crud_event_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.crud_event_id_seq OWNED BY public.crud_event.id;
          public          root    false    216            ?            1259    17279    files    TABLE     ?  CREATE TABLE public.files (
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
    DROP TABLE public.files;
       public         heap    postgres    false            ?            1259    17289    measurement_details    TABLE     ?  CREATE TABLE public.measurement_details (
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
 '   DROP TABLE public.measurement_details;
       public         heap    postgres    false            ?            1259    17297    measurement_types    TABLE     W  CREATE TABLE public.measurement_types (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    name text,
    description character varying(3000),
    treatment_type_id uuid
);
 %   DROP TABLE public.measurement_types;
       public         heap    postgres    false            ?            1259    17305    measurements    TABLE     ?  CREATE TABLE public.measurements (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    name text,
    description character varying(3000),
    treatment_id uuid,
    treatment_type character varying(3) DEFAULT 'MED'::character varying NOT NULL
);
     DROP TABLE public.measurements;
       public         heap    postgres    false            ?            1259    17314 
   migrations    TABLE     ?   CREATE TABLE public.migrations (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.migrations;
       public         heap    postgres    false            ?            1259    17319 	   schedules    TABLE     u  CREATE TABLE public.schedules (
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
    DROP TABLE public.schedules;
       public         heap    postgres    false            ?            1259    17327    schema_migrations    TABLE     c   CREATE TABLE public.schema_migrations (
    version bigint NOT NULL,
    dirty boolean NOT NULL
);
 %   DROP TABLE public.schema_migrations;
       public         heap    postgres    false            ?            1259    17330    test    SEQUENCE     m   CREATE SEQUENCE public.test
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.test;
       public          postgres    false            ?            1259    17331    treatment_reminder_sounds    TABLE     ?   CREATE TABLE public.treatment_reminder_sounds (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text,
    description character varying(3000)
);
 -   DROP TABLE public.treatment_reminder_sounds;
       public         heap    postgres    false            ?            1259    17338    treatment_scheduled_events    TABLE     ?  CREATE TABLE public.treatment_scheduled_events (
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
 .   DROP TABLE public.treatment_scheduled_events;
       public         heap    postgres    false            ?            1259    17348 
   treatments    TABLE     X  CREATE TABLE public.treatments (
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
    DROP TABLE public.treatments;
       public         heap    postgres    false            ?            1259    17356    user_auth_details    TABLE     ?  CREATE TABLE public.user_auth_details (
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
 %   DROP TABLE public.user_auth_details;
       public         heap    root    false            ?            1259    17361    user_auth_details_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_auth_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.user_auth_details_id_seq;
       public          root    false    228            <           0    0    user_auth_details_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.user_auth_details_id_seq OWNED BY public.user_auth_details.id;
          public          root    false    229            ?            1259    17362    user_auth_role    TABLE     .  CREATE TABLE public.user_auth_role (
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
 "   DROP TABLE public.user_auth_role;
       public         heap    root    false            ?            1259    17367    user_auth_role_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_auth_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.user_auth_role_id_seq;
       public          root    false    230            =           0    0    user_auth_role_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.user_auth_role_id_seq OWNED BY public.user_auth_role.id;
          public          root    false    231            J           2604    17476    app_user id    DEFAULT     j   ALTER TABLE ONLY public.app_user ALTER COLUMN id SET DEFAULT nextval('public.app_user_id_seq'::regclass);
 :   ALTER TABLE public.app_user ALTER COLUMN id DROP DEFAULT;
       public          root    false    211    232    232            )           2604    17477    crud_event id    DEFAULT     n   ALTER TABLE ONLY public.crud_event ALTER COLUMN id SET DEFAULT nextval('public.crud_event_id_seq'::regclass);
 <   ALTER TABLE public.crud_event ALTER COLUMN id DROP DEFAULT;
       public          root    false    216    215            H           2604    17478    user_auth_details id    DEFAULT     |   ALTER TABLE ONLY public.user_auth_details ALTER COLUMN id SET DEFAULT nextval('public.user_auth_details_id_seq'::regclass);
 C   ALTER TABLE public.user_auth_details ALTER COLUMN id DROP DEFAULT;
       public          root    false    229    228            I           2604    17479    user_auth_role id    DEFAULT     v   ALTER TABLE ONLY public.user_auth_role ALTER COLUMN id SET DEFAULT nextval('public.user_auth_role_id_seq'::regclass);
 @   ALTER TABLE public.user_auth_role ALTER COLUMN id DROP DEFAULT;
       public          root    false    231    230            /          0    17468    app_user 
   TABLE DATA             COPY public.app_user (profile_url, last_login_ip, last_login_date, id, user_name, email, primary_email, phone_number, first_name, last_name, display_name, company, birth_date, birth_date_raw, address, address2, city, state, country, culture, full_name, gender, language, mail_address, nickname, postal_code, time_zone, salt, password_hash, digest_ha1_hash, roles, permissions, created_date, modified_date, invalid_login_attempts, last_login_attempt, locked_date, recovery_token, ref_id, ref_id_str, meta, app_user_auth_id) FROM stdin;
    public          root    false    232   +?                 0    17243    appointment_events 
   TABLE DATA           ?   COPY public.appointment_events (id, created_at, updated_at, deleted_at, date_time_event_planned, date_time_user_confirmed, date_time_user_skipped, appt_date_time, place, place_notes, appointment_id, appointment_event_notes) FROM stdin;
    public          postgres    false    212   H?                 0    17251    appointments 
   TABLE DATA           ?   COPY public.appointments (id, created_at, updated_at, deleted_at, appt_date_time, place, place_notes, provider_name, app_user_auth_id) FROM stdin;
    public          postgres    false    213   e?                 0    17259    buckets 
   TABLE DATA           ?   COPY public.buckets (id, created_at, updated_at, download_expiration, min_upload_file_size, max_upload_file_size, cache_control, presigned_urls_enabled) FROM stdin;
    public          postgres    false    214   ??                 0    17273 
   crud_event 
   TABLE DATA           ?   COPY public.crud_event (id, event_type, model, model_id, event_date, rows_updated, request_type, request_body, user_auth_id, user_auth_name, remote_ip, urn, ref_id, ref_id_str, meta) FROM stdin;
    public          root    false    215   ??                  0    17279    files 
   TABLE DATA           ?   COPY public.files (id, created_at, updated_at, bucket_id, name, size, mime_type, etag, is_uploaded, uploaded_by_user_id) FROM stdin;
    public          postgres    false    217   ??       !          0    17289    measurement_details 
   TABLE DATA           ?   COPY public.measurement_details (id, created_at, updated_at, deleted_at, treatment_id, treatment_name, measurement_type_id, measurement_type_name, unit_id, customer_notes, name) FROM stdin;
    public          postgres    false    218   ٭       "          0    17297    measurement_types 
   TABLE DATA           y   COPY public.measurement_types (id, created_at, updated_at, deleted_at, name, description, treatment_type_id) FROM stdin;
    public          postgres    false    219   ??       #          0    17305    measurements 
   TABLE DATA              COPY public.measurements (id, created_at, updated_at, deleted_at, name, description, treatment_id, treatment_type) FROM stdin;
    public          postgres    false    220   ?       $          0    17314 
   migrations 
   TABLE DATA           A   COPY public.migrations (id, name, hash, executed_at) FROM stdin;
    public          postgres    false    221   0?       %          0    17319 	   schedules 
   TABLE DATA           ?   COPY public.schedules (id, created_at, updated_at, deleted_at, schedule_time, start_date, end_date, treatment_id, treatment_name, is_weekend_different, appointment_id, treatment_user_id, last_run_time, last_run_status, next_run_date_time) FROM stdin;
    public          postgres    false    222   M?       &          0    17327    schema_migrations 
   TABLE DATA           ;   COPY public.schema_migrations (version, dirty) FROM stdin;
    public          postgres    false    223   j?       (          0    17331    treatment_reminder_sounds 
   TABLE DATA           V   COPY public.treatment_reminder_sounds (id, created_at, name, description) FROM stdin;
    public          postgres    false    225   ??       )          0    17338    treatment_scheduled_events 
   TABLE DATA           ?  COPY public.treatment_scheduled_events (id, created_at, updated_at, deleted_at, mood, schedule_id, treatment_id, treatment_name, treatment_user_id, treatment_user_name, treatment_description, completed, treatment_type, measurement_type_name, measurement_id, measurement_name, units_planned, units_taken, unit_types_id, units_type_name, date_time_event_planned, date_time_user_confirmed_event, date_time_skipped_event, customer_notes) FROM stdin;
    public          postgres    false    226   ??       *          0    17348 
   treatments 
   TABLE DATA              COPY public.treatments (id, created_at, updated_at, deleted_at, name, description, treatment_type, app_user_auth_id, units_id, treatment_reminder_sound_id, is_muted, daily_frequency, measurement_types_id, measurement_types_name, units_planned) FROM stdin;
    public          postgres    false    227   ??       +          0    17356    user_auth_details 
   TABLE DATA           ?  COPY public.user_auth_details (id, user_auth_id, provider, user_id, user_name, full_name, display_name, first_name, last_name, company, email, phone_number, birth_date, birth_date_raw, address, address2, city, state, country, culture, gender, language, mail_address, nickname, postal_code, time_zone, refresh_token, refresh_token_expiry, request_token, request_token_secret, items, access_token, access_token_secret, created_date, modified_date, ref_id, ref_id_str, meta) FROM stdin;
    public          root    false    228   ޮ       -          0    17362    user_auth_role 
   TABLE DATA           ?   COPY public.user_auth_role (id, user_auth_id, role, permission, created_date, modified_date, ref_id, ref_id_str, meta) FROM stdin;
    public          root    false    230   k?       >           0    0    app_user_auth_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.app_user_auth_id_seq', 1, false);
          public          postgres    false    233            ?           0    0    app_user_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.app_user_id_seq', 1, true);
          public          root    false    211            @           0    0    crud_event_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.crud_event_id_seq', 1, false);
          public          root    false    216            A           0    0    test    SEQUENCE SET     3   SELECT pg_catalog.setval('public.test', 1, false);
          public          postgres    false    224            B           0    0    user_auth_details_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.user_auth_details_id_seq', 1, true);
          public          root    false    229            C           0    0    user_auth_role_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.user_auth_role_id_seq', 1, false);
          public          root    false    231            P           2606    17372    appointments app_user_auth_id 
   CONSTRAINT     d   ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT app_user_auth_id UNIQUE (app_user_auth_id);
 G   ALTER TABLE ONLY public.appointments DROP CONSTRAINT app_user_auth_id;
       public            postgres    false    213            t           2606    17513    treatments app_user_auth_id_key 
   CONSTRAINT     f   ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT app_user_auth_id_key UNIQUE (app_user_auth_id);
 I   ALTER TABLE ONLY public.treatments DROP CONSTRAINT app_user_auth_id_key;
       public            postgres    false    227            ~           2606    17481    app_user app_user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.app_user DROP CONSTRAINT app_user_pkey;
       public            root    false    232            M           2606    17374 8   appointment_events appointment_events_appointment_id_key 
   CONSTRAINT     }   ALTER TABLE ONLY public.appointment_events
    ADD CONSTRAINT appointment_events_appointment_id_key UNIQUE (appointment_id);
 b   ALTER TABLE ONLY public.appointment_events DROP CONSTRAINT appointment_events_appointment_id_key;
       public            postgres    false    212            R           2606    17376    appointments appointments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.appointments DROP CONSTRAINT appointments_pkey;
       public            postgres    false    213            U           2606    17378    crud_event crud_event_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.crud_event
    ADD CONSTRAINT crud_event_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.crud_event DROP CONSTRAINT crud_event_pkey;
       public            root    false    215            Z           2606    17380 ,   measurement_details measurement_details_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.measurement_details
    ADD CONSTRAINT measurement_details_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.measurement_details DROP CONSTRAINT measurement_details_pkey;
       public            postgres    false    218            ]           2606    17382 (   measurement_types measurement_types_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.measurement_types
    ADD CONSTRAINT measurement_types_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.measurement_types DROP CONSTRAINT measurement_types_pkey;
       public            postgres    false    219            `           2606    17384    measurements measurements_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT measurements_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.measurements DROP CONSTRAINT measurements_pkey;
       public            postgres    false    220            b           2606    17386    migrations migrations_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_name_key;
       public            postgres    false    221            d           2606    17388    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public            postgres    false    221            g           2606    17390    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    222            i           2606    17392 )   schedules schedules_treatment_user_id_key 
   CONSTRAINT     q   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_treatment_user_id_key UNIQUE (treatment_user_id);
 S   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_treatment_user_id_key;
       public            postgres    false    222            k           2606    17394 (   schema_migrations schema_migrations_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);
 R   ALTER TABLE ONLY public.schema_migrations DROP CONSTRAINT schema_migrations_pkey;
       public            postgres    false    223            m           2606    17396 8   treatment_reminder_sounds treatment_reminder_sounds_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.treatment_reminder_sounds
    ADD CONSTRAINT treatment_reminder_sounds_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.treatment_reminder_sounds DROP CONSTRAINT treatment_reminder_sounds_pkey;
       public            postgres    false    225            p           2606    17398 :   treatment_scheduled_events treatment_scheduled_events_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT treatment_scheduled_events_pkey PRIMARY KEY (id);
 d   ALTER TABLE ONLY public.treatment_scheduled_events DROP CONSTRAINT treatment_scheduled_events_pkey;
       public            postgres    false    226            r           2606    17400 K   treatment_scheduled_events treatment_scheduled_events_treatment_user_id_key 
   CONSTRAINT     ?   ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT treatment_scheduled_events_treatment_user_id_key UNIQUE (treatment_user_id);
 u   ALTER TABLE ONLY public.treatment_scheduled_events DROP CONSTRAINT treatment_scheduled_events_treatment_user_id_key;
       public            postgres    false    226            w           2606    17402    treatments treatments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT treatments_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.treatments DROP CONSTRAINT treatments_pkey;
       public            postgres    false    227            y           2606    17404 (   user_auth_details user_auth_details_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.user_auth_details
    ADD CONSTRAINT user_auth_details_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.user_auth_details DROP CONSTRAINT user_auth_details_pkey;
       public            root    false    228            {           2606    17406 "   user_auth_role user_auth_role_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.user_auth_role
    ADD CONSTRAINT user_auth_role_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.user_auth_role DROP CONSTRAINT user_auth_role_pkey;
       public            root    false    230            |           1259    17501     app_user_app_user_auth_id_uindex    INDEX     h   CREATE UNIQUE INDEX app_user_app_user_auth_id_uindex ON public.app_user USING btree (app_user_auth_id);
 4   DROP INDEX public.app_user_app_user_auth_id_uindex;
       public            root    false    232            N           1259    17407 !   idx_appointment_events_deleted_at    INDEX     f   CREATE INDEX idx_appointment_events_deleted_at ON public.appointment_events USING btree (deleted_at);
 5   DROP INDEX public.idx_appointment_events_deleted_at;
       public            postgres    false    212            S           1259    17408    idx_appointments_deleted_at    INDEX     Z   CREATE INDEX idx_appointments_deleted_at ON public.appointments USING btree (deleted_at);
 /   DROP INDEX public.idx_appointments_deleted_at;
       public            postgres    false    213                       1259    17483    idx_appuser_email    INDEX     G   CREATE INDEX idx_appuser_email ON public.app_user USING btree (email);
 %   DROP INDEX public.idx_appuser_email;
       public            root    false    232            ?           1259    17484    idx_appuser_username    INDEX     N   CREATE INDEX idx_appuser_username ON public.app_user USING btree (user_name);
 (   DROP INDEX public.idx_appuser_username;
       public            root    false    232            V           1259    17409    idx_crudevent_model    INDEX     K   CREATE INDEX idx_crudevent_model ON public.crud_event USING btree (model);
 '   DROP INDEX public.idx_crudevent_model;
       public            root    false    215            W           1259    17410    idx_crudevent_modelid    INDEX     P   CREATE INDEX idx_crudevent_modelid ON public.crud_event USING btree (model_id);
 )   DROP INDEX public.idx_crudevent_modelid;
       public            root    false    215            X           1259    17411 "   idx_measurement_details_deleted_at    INDEX     h   CREATE INDEX idx_measurement_details_deleted_at ON public.measurement_details USING btree (deleted_at);
 6   DROP INDEX public.idx_measurement_details_deleted_at;
       public            postgres    false    218            [           1259    17412     idx_measurement_types_deleted_at    INDEX     d   CREATE INDEX idx_measurement_types_deleted_at ON public.measurement_types USING btree (deleted_at);
 4   DROP INDEX public.idx_measurement_types_deleted_at;
       public            postgres    false    219            ^           1259    17413    idx_measurements_deleted_at    INDEX     Z   CREATE INDEX idx_measurements_deleted_at ON public.measurements USING btree (deleted_at);
 /   DROP INDEX public.idx_measurements_deleted_at;
       public            postgres    false    220            e           1259    17414    idx_schedules_deleted_at    INDEX     T   CREATE INDEX idx_schedules_deleted_at ON public.schedules USING btree (deleted_at);
 ,   DROP INDEX public.idx_schedules_deleted_at;
       public            postgres    false    222            n           1259    17415 )   idx_treatment_scheduled_events_deleted_at    INDEX     v   CREATE INDEX idx_treatment_scheduled_events_deleted_at ON public.treatment_scheduled_events USING btree (deleted_at);
 =   DROP INDEX public.idx_treatment_scheduled_events_deleted_at;
       public            postgres    false    226            u           1259    17416    idx_treatments_deleted_at    INDEX     V   CREATE INDEX idx_treatments_deleted_at ON public.treatments USING btree (deleted_at);
 -   DROP INDEX public.idx_treatments_deleted_at;
       public            postgres    false    227            ?           2620    17417 #   buckets check_default_bucket_delete    TRIGGER     ?   CREATE TRIGGER check_default_bucket_delete BEFORE DELETE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.protect_default_bucket_delete();
 <   DROP TRIGGER check_default_bucket_delete ON public.buckets;
       public          postgres    false    214    291            ?           2620    17418 #   buckets check_default_bucket_update    TRIGGER     ?   CREATE TRIGGER check_default_bucket_update BEFORE UPDATE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.protect_default_bucket_update();
 <   DROP TRIGGER check_default_bucket_update ON public.buckets;
       public          postgres    false    214    292            ?           2620    17419 %   buckets set_public_buckets_updated_at    TRIGGER     ?   CREATE TRIGGER set_public_buckets_updated_at BEFORE UPDATE ON public.buckets FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
 >   DROP TRIGGER set_public_buckets_updated_at ON public.buckets;
       public          postgres    false    293    214            ?           2620    17420 !   files set_public_files_updated_at    TRIGGER     ?   CREATE TRIGGER set_public_files_updated_at BEFORE UPDATE ON public.files FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
 :   DROP TRIGGER set_public_files_updated_at ON public.files;
       public          postgres    false    217    293            ?           2606    17502 6   appointments appointments_app_user_app_user_auth_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_app_user_app_user_auth_id_fk FOREIGN KEY (app_user_auth_id) REFERENCES public.app_user(app_user_auth_id);
 `   ALTER TABLE ONLY public.appointments DROP CONSTRAINT appointments_app_user_app_user_auth_id_fk;
       public          postgres    false    232    3708    213            ?           2606    17421 &   measurements fk_measurements_treatment    FK CONSTRAINT     ?   ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT fk_measurements_treatment FOREIGN KEY (treatment_id) REFERENCES public.treatments(id);
 P   ALTER TABLE ONLY public.measurements DROP CONSTRAINT fk_measurements_treatment;
       public          postgres    false    220    227    3703            ?           2606    17426 "   schedules fk_schedules_appointment    FK CONSTRAINT     ?   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT fk_schedules_appointment FOREIGN KEY (appointment_id) REFERENCES public.appointments(id);
 L   ALTER TABLE ONLY public.schedules DROP CONSTRAINT fk_schedules_appointment;
       public          postgres    false    213    3666    222            ?           2606    17431 J   treatment_scheduled_events fk_treatment_scheduled_events_measurement_types    FK CONSTRAINT     ?   ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_measurement_types FOREIGN KEY (measurement_type_name) REFERENCES public.measurement_types(id);
 t   ALTER TABLE ONLY public.treatment_scheduled_events DROP CONSTRAINT fk_treatment_scheduled_events_measurement_types;
       public          postgres    false    219    3677    226            ?           2606    17436 E   treatment_scheduled_events fk_treatment_scheduled_events_measurements    FK CONSTRAINT     ?   ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_measurements FOREIGN KEY (measurement_id) REFERENCES public.measurements(id);
 o   ALTER TABLE ONLY public.treatment_scheduled_events DROP CONSTRAINT fk_treatment_scheduled_events_measurements;
       public          postgres    false    3680    226    220            ?           2606    17441 A   treatment_scheduled_events fk_treatment_scheduled_events_schedule    FK CONSTRAINT     ?   ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_schedule FOREIGN KEY (schedule_id) REFERENCES public.schedules(id);
 k   ALTER TABLE ONLY public.treatment_scheduled_events DROP CONSTRAINT fk_treatment_scheduled_events_schedule;
       public          postgres    false    222    226    3687            ?           2606    17446 B   treatment_scheduled_events fk_treatment_scheduled_events_treatment    FK CONSTRAINT     ?   ALTER TABLE ONLY public.treatment_scheduled_events
    ADD CONSTRAINT fk_treatment_scheduled_events_treatment FOREIGN KEY (treatment_id) REFERENCES public.treatments(id);
 l   ALTER TABLE ONLY public.treatment_scheduled_events DROP CONSTRAINT fk_treatment_scheduled_events_treatment;
       public          postgres    false    226    3703    227            ?           2606    17451 1   treatments fk_treatments_treatment_reminder_sound    FK CONSTRAINT     ?   ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT fk_treatments_treatment_reminder_sound FOREIGN KEY (treatment_reminder_sound_id) REFERENCES public.treatment_reminder_sounds(id);
 [   ALTER TABLE ONLY public.treatments DROP CONSTRAINT fk_treatments_treatment_reminder_sound;
       public          postgres    false    3693    227    225            ?           2606    17514 (   schedules schedules_app_user_auth_id__fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_app_user_auth_id__fk FOREIGN KEY (treatment_user_id) REFERENCES public.treatments(app_user_auth_id);
 R   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_app_user_auth_id__fk;
       public          postgres    false    3700    222    227            ?           2606    17507 *   treatments treatments_app_user_auth_id__fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.treatments
    ADD CONSTRAINT treatments_app_user_auth_id__fk FOREIGN KEY (app_user_auth_id) REFERENCES public.app_user(app_user_auth_id);
 T   ALTER TABLE ONLY public.treatments DROP CONSTRAINT treatments_app_user_auth_id__fk;
       public          postgres    false    227    3708    232            /      x?????? ? ?            x?????? ? ?            x?????? ? ?            x?????? ? ?            x?????? ? ?             x?????? ? ?      !      x?????? ? ?      "      x?????? ? ?      #      x?????? ? ?      $      x?????? ? ?      %      x?????? ? ?      &      x?????? ? ?      (      x?????? ? ?      )      x?????? ? ?      *      x?????? ? ?      +   }  x??P[O?@~????,t??l"?ZZ[cB?7??i?n??/??G}??<|??|_??3?S"@?1Ba8??C?B}u?5?:r6g?p??x????(^滨?r?v????-6-?JJ?Z*?Ă???M??@?g?CGڄ՜?|L?F???
??Ex
?o??֫?8Urt??W?;?j@m?@s?????ФD<??-???!{i?=?A?,?(8???c?>R9?ߦѭ????f???<~q???-?VZ薕?I?\?????A?b??y???1'??????f????z?ѕ??x?,?Yj??6$wX?1ok?o\n;ϋ&V??e????&ć?j	=?z:??ًU???????? E??&|?\̐.cC?|g????U?L&???       -      x?????? ? ?     