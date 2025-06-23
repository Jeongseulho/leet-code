# Write your MySQL query statement below
SELECT
    ROUND(
        COUNT(T2.player_id) / (SELECT COUNT(DISTINCT player_id) FROM Activity), 
        2
    ) AS fraction
FROM (
    -- 1. 각 플레이어의 첫 접속일을 구함
    SELECT 
        player_id, 
        MIN(event_date) AS first_login
    FROM Activity
    GROUP BY player_id
) AS T1
JOIN Activity AS T2
    -- 2. 첫 접속일의 바로 다음 날에 접속한 기록을 가진 경우만 JOIN
    ON T1.player_id = T2.player_id AND T2.event_date = DATE_ADD(T1.first_login, INTERVAL 1 DAY);