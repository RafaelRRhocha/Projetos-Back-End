SELECT artist_name AS artista, album_name AS album, COUNT(user_id) AS seguidores
FROM SpotifyClone.albums AS album JOIN SpotifyClone.artists AS artist ON album.artist_id = artist.artist_id JOIN SpotifyClone.followers AS fol ON fol.artist_id = artist.artist_id
GROUP BY album_name , artist_name
ORDER BY seguidores DESC , artist_name , album_name;
