CREATE TABLE orders (
  id serial primary key,
  datetime timestamp with time zone NOT NULL default current_timestamp,
  name character varying(255) NOT NULL,
  email character varying(255) NOT NULL,
  amount integer NOT NULL,
  ssn character varying(16)
);
