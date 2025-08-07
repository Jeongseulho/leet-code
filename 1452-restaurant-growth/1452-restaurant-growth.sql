SELECT
    s.visited_on,
    SUM(s2.amount) AS amount,
    ROUND(AVG(s2.amount), 2) AS average_amount
FROM
    (SELECT visited_on, SUM(amount) AS amount FROM Customer GROUP BY visited_on) AS s,
    (SELECT visited_on, SUM(amount) AS amount FROM Customer GROUP BY visited_on) AS s2
WHERE
    s2.visited_on BETWEEN DATE_SUB(s.visited_on, INTERVAL 6 DAY) AND s.visited_on
    AND s.visited_on >= (SELECT MIN(visited_on) + INTERVAL 6 DAY FROM Customer)
GROUP BY
    s.visited_on
ORDER BY
    s.visited_on;