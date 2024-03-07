DROP TABLE IF EXISTS passwords CASCADE;


CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  stored_password VARCHAR(255) NOT NULL,
  website_id INTEGER REFERENCES websites(id) ON DELETE CASCADE
);
