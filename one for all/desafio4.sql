SELECT users.user_name as usuario, IF (YEAR(MAX(u.reproduction_date)) >= 2021, 'Usuário ativo', 'Usuário inativo') AS status_usuario
FROM SpotifyClone.users AS users JOIN SpotifyClone.user_history AS u ON u.user_id = users.user_id
GROUP BY user_name
ORDER BY user_name;
