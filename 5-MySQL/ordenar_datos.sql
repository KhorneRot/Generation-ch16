USE world;

SELECT * FROM country;

SELECT NAME, Population FROM country ORDER BY Population DESC;

SELECT NAME, Population FROM country ORDER BY Population DESC;

SELECT NAME, Population FROM country WHERE NAME = 'Mexico';

SELECT * FROM country WHERE NAME = 'Mexico';

-- Alias
SELECT 5 + 5;

SELECT NAME AS Nombre_de_pais, Population AS 'Población de país' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- DICTINCT filta los datos repetidos 

-- WHERE Cláusula

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC; 

SELECT * FROM country WHERE Continent != 'North America';

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;


-- OR / AND / != -- Lógicos
SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';
SELECT * FROM country WHERE Continent = 'Asia' AND Continent != 'Europe' AND Continent != 'North America';



-- operador insert
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent;

-- Filtrar valores nulos NULL
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL;

-- LIKE sive para buscar un patron en específico
-- '%' busca cualquier cantidad de caracteres
-- '_' especificar un caracter 

SELECT * FROM country WHERE Name LIKE '%and%';
SELECT * FROM country WHERE Name LIKE '%e_a';
SELECT * FROM country WHERE Continent LIKE 'asia';