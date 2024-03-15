/*==============================================================*/
/* DBMS name:      PostgreSQL 13                              */
/* Created on:     19-09-2022 1:28:39                          */
/*==============================================================*/


/*==============================================================*/
/* Table: client                                                */
/*==============================================================*/
create table client (
   id                   int4                NOT NULL GENERATED ALWAYS AS IDENTITY,
   trade_name           varchar(100)         null,
   deleted              bool                 null,
   uuid                 uuid                 null,
   constraint pk_client primary key (id)
);

/*==============================================================*/
/* Table: account                                               */
/*==============================================================*/
create table account (
   id                   int8                 NOT NULL GENERATED ALWAYS AS IDENTITY,
   client_id            int4                 null,
   name                 varchar(100)         null,
   deleted              bool                 null,
   country_name         varchar(50)          null,
   created              timestamp with time zone null,
   modified             timestamp with time zone null,
   constraint pk_account primary key (id),
   constraint fk_account_client foreign key (client_id)
      references client (id)
);

/*==============================================================*/
/* Table: platform_owner                                        */
/*==============================================================*/
create table platform_owner (
   id                   int2                 not null,
   name                 varchar(50)          null,
   code                 varchar(50)          null,
   constraint pk_platform_owner primary key (id)
);

/*==============================================================*/
/* Table: account_platform_status                               */
/*==============================================================*/
create table account_platform_status (
   id                   int2                 not null,
   name                 varchar(20)          null,
   code                 varchar(10)          null,
   constraint pk_account_platform_status primary key (id)
);

/*==============================================================*/
/* Table: account_platform                                      */
/*==============================================================*/
create table account_platform (
   id                   int4                NOT NULL GENERATED ALWAYS AS IDENTITY,
   account_id           int8                 null,
   business_manager_id  varchar(50)          null,
   business_manager_name varchar(100)         null,
   status_id            int2                 null,
   platform_owner_id    int2                 null,
   created              timestamp with time zone null,
   modified             timestamp with time zone null,
   constraint pk_account_platform primary key (id),
   constraint fk_account_platform_account foreign key (account_id)
      references account (id),
   constraint fk_account_platform_owner foreign key (platform_owner_id)
      references platform_owner (id),
   constraint fk_account_platform_status foreign key (status_id)
      references account_platform_status (id)
);

/*==============================================================*/
/* Table: platform                                              */
/*==============================================================*/
create table platform (
   id                   int2                 not null,
   name                 varchar(20)          null,
   code                 varchar(20)          null,
   enabled              bool                 null,
   platform_owner_id    int2                 null,
   constraint pk_platform primary key (id),
   constraint fk_platform_platform_ower foreign key (platform_owner_id)
      references platform_owner (id)
);

/*==============================================================*/
/* Table: account_page                                          */
/*==============================================================*/
create table account_page (
   id                   int8                 NOT NULL GENERATED ALWAYS AS IDENTITY,
   account_platform_id  int4                 null,
   platform_id          int2                 null,
   page_id              varchar(50)          null,
   page_name            varchar(100)         null,
   deleted              bool                 null,
   created              timestamp with time zone null,
   modified             timestamp with time zone null,
   constraint pk_account_page primary key (id),
   constraint fk_acc_page_acc_platform foreign key (account_platform_id)
      references account_platform (id),
   constraint fk_account_page_platform foreign key (platform_id)
      references platform (id)
);

/*==============================================================*/
/* Table: campaign_status                                       */
/*==============================================================*/
create table campaign_status (
   id                   int2                 not null,
   name                 varchar(20)          null,
   code                 varchar(10)          null,
   constraint pk_campaign_status primary key (id)
);

/*==============================================================*/
/* Table: campaign                                              */
/*==============================================================*/
create table campaign (
   id                   int8                NOT NULL GENERATED ALWAYS AS IDENTITY,
   account_id           int8                 null,
   name                 varchar(100)         null,
   start_date           date                 null,
   end_date             date                 null,
   budget               decimal              null,
   kpi                  varchar(20)          null,
   goal                 numeric              null,
   template_name        varchar(100)         null,
   status_id            int2                 null,
   created              timestamp with time zone null,
   modified             timestamp with time zone null,
   type_description     varchar(100)         null,
   constraint pk_campaign primary key (id),
   constraint fk_campaign_account foreign key (account_id)
      references account (id),
   constraint fk_campaign_campaign_status foreign key (status_id)
      references campaign_status (id)
);

/*==============================================================*/
/* Table: creative_matrix_status                                */
/*==============================================================*/
create table creative_matrix_status (
   id                   int2                 not null,
   name                 varchar(20)          null,
   code                 varchar(20)          null,
   constraint pk_creative_matrix_status primary key (id)
);

/*==============================================================*/
/* Table: creative_matrix                                       */
/*==============================================================*/
create table creative_matrix (
   id                   int8                  NOT NULL GENERATED ALWAYS AS IDENTITY,
   name                 varchar(100)         null,
   template_name        varchar(100)         null,
   status_id            int2                 null,
   last_update          timestamp with time zone null,
   deleted              bool                 null,
   account_id           int8                 null,
   created              timestamp with time zone null,
   modified             timestamp with time zone null,
   type_description     varchar(100)         null,
   constraint pk_creative_matrix primary key (id),
   constraint fk_creative_matrix_account foreign key (account_id)
      references account (id),
   constraint fk_creative_matrix_status foreign key (status_id)
      references creative_matrix_status (id)
);

/*==============================================================*/
/* Table: campaign_rule_priority_level                          */
/*==============================================================*/
create table campaign_rule_priority_level (
   id                   int2                 not null,
   name                 varchar(20)          null,
   code                 varchar(20)          null,
   constraint pk_campaign_rule_priority_leve primary key (id)
);

/*==============================================================*/
/* Table: campaign_rule                                         */
/*==============================================================*/
create table campaign_rule (
   id                   int8                 NOT NULL GENERATED ALWAYS AS IDENTITY,
   campaign_id          int8                 null,
   creative_matrix_id   int8                 null,
   name                 varchar(20)          null,
   priority_level_id    int2                 null,
   created              timestamp with time zone null,
   modified             timestamp with time zone null,
   constraint pk_campaign_rule primary key (id),
   constraint fk_campaign_rule_campaign foreign key (campaign_id)
      references campaign (id),
   constraint fk_camp_rule_creative_matrix foreign key (creative_matrix_id)
      references creative_matrix (id),
   constraint fk_camp_rule_priority_level foreign key (priority_level_id)
      references campaign_rule_priority_level (id)
);

/*==============================================================*/
/* Table: creative                                              */
/*==============================================================*/
create table creative (
   id                   int8                  NOT NULL GENERATED ALWAYS AS IDENTITY,
   name                 varchar(50)          null,
   creative_type_id     int2                 null,
   media_url            varchar(200)         null,
   media_s3_id          varchar(200)         null,
   constraint pk_creative primary key (id)
);

/*==============================================================*/
/* Table: campaign_rule_creative                                */
/*==============================================================*/
create table campaign_rule_creative (
   id                   int8                 NOT NULL GENERATED ALWAYS AS IDENTITY,
   campaign_rule_id     int8                 null,
   creative_id          int8                 null,
   constraint pk_campaign_rule_creative primary key (id),
   constraint fk_camp_rule_creati_camp_rule foreign key (campaign_rule_id)
      references campaign_rule (id),
   constraint fk_camp_rule_crea_creative foreign key (creative_id)
      references creative (id)
);

/*==============================================================*/
/* Table: campaign_rule_platform                                */
/*==============================================================*/
create table campaign_rule_platform (
   id                   int8                 NOT NULL GENERATED ALWAYS AS IDENTITY,
   platform_id          int2                 null,
   campaign_rule_id     int8                 null,
   active               bool                 null,
   constraint pk_campaign_rule_platform primary key (id),
   constraint fk_campaign_rule_platform foreign key (platform_id)
      references platform (id),
   constraint fk_camp_rule_camp_rule_platform foreign key (campaign_rule_id)
      references campaign_rule (id)
);

/*==============================================================*/
/* Table: creative_matrix_creative                              */
/*==============================================================*/
create table creative_matrix_creative (
   id                   int8                  NOT NULL GENERATED ALWAYS AS IDENTITY,
   creative_matrix_id   int8                 null,
   creative_id          int8                 null,
   account_platform_id  int4                 null,
   external_campaign_id varchar(100)         null,
   reporting_label      varchar(100)         null,
   constraint pk_creative_matrix_creative primary key (id),
   constraint fk_crea_matrix_creative foreign key (creative_matrix_id)
      references creative_matrix (id),
   constraint fk_crea_matrix_crea_creative foreign key (creative_id)
      references creative (id),
   constraint fk_crea_matrix_crea_platform foreign key (account_platform_id)
      references account_platform (id)
);

/*==============================================================*/
/* Table: creative_matrix_option                                */
/*==============================================================*/
create table creative_matrix_option (
   id                   int8                  NOT NULL GENERATED ALWAYS AS IDENTITY,
   creative_matrix_id   int8                 null,
   code                 varchar(20)          null,
   value                varchar(20)          null,
   constraint pk_creative_matrix_option primary key (id),
   constraint fk_creative_matrix_option foreign key (creative_matrix_id)
      references creative_matrix (id)
);

