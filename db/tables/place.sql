create table place (
   id           number
      generated always as identity
   primary key,
   display_name varchar(255) not null, 
  -- "fake" ENUM with a constraint as OracleDB does not support it
   place_type   varchar2(50) not null,
   latitude     float,
   longitude    float,
   country      varchar(255),
   state        varchar(255),
   city         varchar(255),
   address      varchar(255),
   postal_code  varchar(255),
   created_at   timestamp default current_timestamp,
   updated_at   timestamp default current_timestamp, 
  -- Only populated if the place is deleted
   deleted_at   timestamp,
   constraint place_type_check
      check ( place_type in ( 'germplasm_bank',
                              'university',
                              'lab',
                              'farm',
                              'company',
                              'other' ) )
);