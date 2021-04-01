CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  email VARCHAR(200) UNIQUE not null,
  password VARCHAR(200) not null,
  f_name VARCHAR(280) not null,
  l_name VARCHAR(280) not null,
);

- 'add user to users table'
INSERT INTO users(_id, email, password, f_name, l_name )
VALUES (default, 'zephyr@gmail.com', '12345', 'zephyr', 'crew')