USE tienda;

/*INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (3, '2022-09-06', 100, 1);*/

-- Inner Join
-- Explicita

SELECT *
FROM clientes
INNER JOIN compra 
ON clientes.cliente_id = compra.cliente_id; 

SELECT 
clientes.cliente_id AS 'Número de cliente',
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.clientes_id = compra.cliente_id;

-- Unión implícita
SELECT * 
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN

SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;


-- Mostrar las direcciones de cada pais

USE sakila;

/*
adress - city_id / address
city   - city_id / city / county_id
county - country_id
*/

SELECT
address.address, 
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT 
country.country AS Pais, 
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON  city.country_id = country.country_id  
INNER JOIN address ON address.city_id = city.city_id;





