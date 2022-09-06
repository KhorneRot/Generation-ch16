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

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC ; 

SELECT * FROM country WHERE Continent != 'North America';
