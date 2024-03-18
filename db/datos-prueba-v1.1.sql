create database if not exists reunion_amigos;

-- users
INSERT INTO users (username, nickname, email, phone_number, password) VALUES
( 'sammy vera', 'Sammy1', 'sammy@gmail.com', '+57 3133838656', '123344'), 
( 'Sulma Garcia', 'Sulma1', 'sulma@gmail.com', '+54 3193837756', '123354'), 
( 'Fernando Rodriguez', 'Fernando1', 'Fernando@gmail.com', '+52 3195838756', '123344'),
( 'Jeri Pimentel', 'Jeri1', 'Jeri@gmail.com', '+57 3153338676', '163344'), 
( 'Andres Rauch', 'Andres1', 'Andres@gmail.com', '+57 3163827657', '123344'); 
-- meetings

INSERT INTO meetings ( id_user_org, title, description, id_suggestion) 
VALUES
(  1, 'salir un rato', 'salir a comer y tomar unas cervezas', 2), 
(  3, 'salir a tomar una birra', 'salir a comer y tomar unas cervezas', 1);

-- suggestion
INSERT INTO suggestions( datetime, location, description_location, createdAt, updatedAt) 
VALUES 
('2023-02-02 12:23:00', 'Dirección: Av. Córdoba 634, C1054AAS Buenos Aires, Argentina', 'Gong Disco Senior', '2023-02-02 12:23:00', '2023-02-02 12:23:00'), 
('2023-02-02 19:23:00', 'Dirección: Av. Coronel Marcelino E. Freyre, Buenos Aires, Argentina', 'Crobar', '2023-02-02 19:23:00', '2023-02-02 19:23:00');

select * from users;
select * from meetings;