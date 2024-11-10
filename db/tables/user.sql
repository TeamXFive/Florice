START TRANSACTION;
create table florice_user (
   id         number generated always as identity primary key,
   username   varchar(255) not null,
   email      varchar(255) not null,
   password   varchar(255) not null,
   created_at timestamp default current_timestamp,
   updated_at timestamp default current_timestamp,
   deleted_at timestamp,
   CONSTRAINT unique_user UNIQUE (username, email)
);
commit;