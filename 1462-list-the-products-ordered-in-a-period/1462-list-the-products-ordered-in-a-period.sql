# Write your MySQL query statement below
SELECT product_name, SUM(unit) AS unit
FROM Products
JOIN Orders USING (product_id)
WHERE YEAR(order_date) = '2020' AND MONTH(order_date) = '02'
GROUP BY product_id, YEAR(order_date)
HAVING SUM(unit) >= 100