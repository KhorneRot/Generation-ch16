USE sakila;
-- ceil -> es para promediar hacia arriba
-- floor -> es para promdediar hacia abajo 
-- ABS es para mostgrar un valor absoluto 
-- SUM(), AVG(), COUNT ()

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas'FROM payment; 

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- COUNT () cuenta con las filas de una tabla
SELECT COUNT(*) FROM payment WHERE staff_id=1;

-- Cantidad de clientes distintos 
SELECT COUNT(DISTINCT customer_id) FROM payment;

-- SUM()

SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- Cual cliente relalizó más rentas?

SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- Group BY
-- Order BY - ordena según la columna o función que le indiquemos ASC / DESC

SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

SELECT * FROM payment;

SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;


-- AVG() - regresaa el promedio

SELECT AVG(amount) AS Promedio FROM payment;
SELECT customer_id, AVG(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;

