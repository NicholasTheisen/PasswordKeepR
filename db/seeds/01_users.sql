-- Users table seeds here (Example)
/* INSERT INTO users (name) VALUES ('Alice');
INSERT INTO users (name) VALUES ('Kira'); */

INSERT INTO users (first_name, last_name, user_name, password, email, profile_photo, organization_id)
VALUES
('Mike', 'Lowry', 'MikeLowry89', 'password123', 'mikelowry@yoohoo.com', 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg', 1),



INSERT INTO websites (url, logo, user_id, password_id, category_id)
VALUES
('www.netflix.com', 'https://i.pinimg.com/originals/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.png', 1, 1, 1),
('www.facebook.com', 'https://cdn.logojoy.com/wp-content/uploads/20230921104408/Facebook-logo-600x319.png', 1, 1, 1);

INSERT INTO passwords (stored_password, user_id, website_id)
VALUES
('')
