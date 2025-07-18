# Write your MySQL query statement below
SELECT P1.product_id, IFNULL(P2.new_price, 10) AS price 
FROM (SELECT DISTINCT product_id FROM Products) AS P1
LEFT JOIN 
    (SELECT product_id, new_price
    FROM Products
    WHERE (product_id, change_date) IN (SELECT product_id, MAX(change_date) AS change_date
                                        FROM Products 
                                        WHERE change_date <= '2019-08-16'
                                        GROUP BY product_id)
    GROUP BY product_id) AS P2
ON P1.product_id = P2.product_id;