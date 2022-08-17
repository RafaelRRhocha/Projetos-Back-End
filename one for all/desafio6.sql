SELECT 
    FORMAT(MIN(plan_price), 2) as faturamento_minimo,
    FORMAT(MAX(plan_price), 2) as faturamento_maximo,
    FORMAT(AVG(plan_price), 2) as faturamento_medio,
    FORMAT(SUM(plan_price), 2) as faturamento_total
FROM SpotifyClone.users AS u JOIN SpotifyClone.plans AS p ON u.plan_id = p.plan_id;
