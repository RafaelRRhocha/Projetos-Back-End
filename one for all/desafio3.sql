SELECT user_name AS usuario, COUNT(*) AS qt_de_musicas_ouvidas, ROUND(SUM(song_seconds_duration) / 60, 2) AS total_minutos
FROM SpotifyClone.users AS users JOIN SpotifyClone.user_history AS u ON u.user_id = users.user_id JOIN SpotifyClone.songs AS songs ON songs.song_id = u.song_id
GROUP BY user_name
ORDER BY user_name ASC;
