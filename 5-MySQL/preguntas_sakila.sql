USE sakila;

SELECT actor, description FROM film_text;

SELECT * FROM film_text;

SELECT NAME, film, desciption FROM film_id;

SELECT film_id, AVG(amount) AS total FROM payment GROUP BY film ORDER BY total DESC

SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;

SELECT title, language_id FROM film GROUP BY title;
