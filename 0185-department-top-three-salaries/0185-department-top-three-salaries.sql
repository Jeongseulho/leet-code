# Write your MySQL query statement below
SELECT D.name AS Department, E3.name AS Employee, E3.salary AS Salary
FROM
    (SELECT E2.id AS id, E2.name AS name, E2.salary AS salary, E2.departmentId AS departmentId
    FROM
        (SELECT
            E1.id AS id,
            E1.name AS name,
            E1.salary AS salary,
            E1.departmentId AS departmentId,
            DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) as rank_num
        FROM
            Employee AS E1) AS E2
    WHERE E2.rank_num <= 3) AS E3
JOIN Department AS D ON E3.departmentId = D.id