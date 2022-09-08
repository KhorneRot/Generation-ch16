CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;


CREATE TABLE cohorte(
cohorte12_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

SELECT * FROM cohorte;

CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

SELECT * FROM alumno;

CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);

SELECT * FROM instructor;

CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL);

SELECT * FROM equipo;

CREATE TABLE direccion(
direccion_id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

SELECT * FROM direccion;


SELECT * FROM alumno;

INSERT INTO alumno (nombre, edad, CURP, RFC, nivel_ingles, amonestaciones)
VALUES ('Alejandro', 25, 'RAML9120HDFMNSA2', 'RAML960920TG3', 'B1', 2),
('Juan', 25, 'LOMJ9120HDFPRNA5', 'LVV031107ED4', 'C1', 0);

INSERT INTO instructor (nombre, edad, cumpleanios, RFC, supervisor, sesiones)
VALUES ('Raul', 42, '2022-09-05', 'RAML960920TG3', 'Marina Pardo', '9'),
('Jonathan', 25, '2022-09-06', 'LVV031107ED4', 'Marina Pardo', 10);


/* Agregar llave foranea:
ALTER TABLE compra
ADD CONSTRAINT fk_clientes_compra
FOREIGN KEY (cliente_id)
REFERENCES clientes (cliente_id);
*/

ALTER TABLE equipo
ADD CONSTRAINT fk_alumno_equipo
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);


INSERT INTO equipo (alumno_id, nombre, cantidad_integrantes,logo)
VALUES (1,'SHADES', 7, 'Maquillaje'),
(2, 'DINOS', 7, 'DinoMensos');

SELECT * FROM equipo;
SELECT * FROM alumno;

