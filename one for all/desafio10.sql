SELECT song_name AS nome, COUNT(*) AS reproducoes
FROM SpotifyClone.songs AS son JOIN SpotifyClone.user_history AS ush ON ush.song_id = son.song_id JOIN SpotifyClone.users AS usr ON usr.user_id = ush.user_id JOIN SpotifyClone.plans AS pln ON usr.plan_id = pln.plan_id
WHERE plan_name = 'gratuito' OR plan_name = 'pessoal'
GROUP BY song_name
ORDER BY nome;
