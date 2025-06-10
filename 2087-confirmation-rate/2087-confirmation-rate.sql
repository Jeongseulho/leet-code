# Write your MySQL query statement below
SELECT user_id, ROUND(COUNT(IF(action = 'confirmed', 1, NULL)) / COUNT(*), 2) AS confirmation_rate
FROM Signups
LEFT JOIN Confirmations USING(user_id)
GROUP BY user_id