SELECT artist_name AS artista, album_name AS album
FROM SpotifyClone.albums AS album JOIN SpotifyClone.artists AS art ON album.artist_id = art.artist_id AND art.artist_name = 'Elis Regina';
