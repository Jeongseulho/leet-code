# Write your MySQL query statement below
SELECT 'High Salary' AS category, COUNT(account_id) AS accounts_count 
FROM Accounts 
WHERE income > 50000
UNION ALL
SELECT 'Average Salary' AS category, COUNT(account_id) AS accounts_count 
FROM Accounts 
WHERE 20000 <= income AND income <= 50000
UNION ALL
SELECT 'Low Salary' AS category, COUNT(account_id) AS accounts_count 
FROM Accounts 
WHERE 20000 > income