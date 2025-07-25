# Write your MySQL query statement below
SELECT Q1.person_name as person_name
FROM Queue AS Q1
JOIN Queue AS Q2 ON Q1.turn >= Q2.turn
GROUP BY Q1.turn
HAVING SUM(Q2.weight) <= 1000
ORDER BY SUM(Q2.weight) DESC
LIMIT 1;