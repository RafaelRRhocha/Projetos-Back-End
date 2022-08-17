SELECT COUNT(h.song_id) quantidade_musicas_no_historico
FROM SpotifyClone.user_history AS h JOIN SpotifyClone.users AS u ON h.user_id = u.user_id
WHERE u.user_name = 'Barbara Liskov';
