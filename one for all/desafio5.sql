SELECT song_name as cancao, COUNT(*) as reproducoes
FROM SpotifyClone.user_history AS u JOIN SpotifyClone.songs AS s ON u.song_id = s.song_id
GROUP BY song_name
ORDER BY reproducoes DESC, cancao
LIMIT 2;
