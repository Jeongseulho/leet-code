# Write your MySQL query statement below


SELECT R.id, COUNT(*) AS num
FROM

(SELECT requester_id AS id
FROM RequestAccepted
UNION ALL
SELECT accepter_id
FROM RequestAccepted) AS R

GROUP BY R.id
ORDER BY COUNT(*) DESC
LIMIT 1;