CREATE TABLE SpotifyClone.artists (
    artist_id INT NOT NULL AUTO_INCREMENT,
    artist_name VARCHAR(60) NOT NULL,
    CONSTRAINT PRIMARY KEY (artist_id)
)  ENGINE=INNODB;

CREATE TABLE SpotifyClone.albums(
	album_id INT NOT NULL AUTO_INCREMENT,
	album_name VARCHAR(200) NOT NULL,
    release_year YEAR NOT NULL,
    artist_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (album_id),
    FOREIGN KEY (artist_id) REFERENCES SpotifyClone.artists(artist_id)
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.plans(
	plan_id INT NOT NULL AUTO_INCREMENT,
    plan_name VARCHAR(60) NOT NULL,
    plan_price DOUBLE NOT NULL,
    CONSTRAINT PRIMARY KEY(plan_id)
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.songs (
	song_id INT NOT NULL AUTO_INCREMENT,
    album_id INT NOT NULL,
    song_name VARCHAR(60) NOT NULL,
    song_seconds_duration INT NOT NULL,
    CONSTRAINT PRIMARY KEY (song_id),
    FOREIGN KEY (album_id) REFERENCES SpotifyClone.albums(album_id)
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.users (
	user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(60) NOT NULL,
	user_age INT NOT NULL,
    user_signature_date DATE NOT NULL,
    plan_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (user_id),
    FOREIGN KEY (plan_id) REFERENCES SpotifyClone.plans(plan_id)
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.user_history(
	user_id INT NOT NULL,
	song_id INT NOT NULL,
	reproduction_date DATETIME NOT NULL,
	FOREIGN KEY (user_id) REFERENCES SpotifyClone.users(user_id),
  FOREIGN KEY (song_id) REFERENCES SpotifyClone.songs(song_id),
  CONSTRAINT PRIMARY KEY (user_id, song_id)
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.followers(
	user_id INT NOT NULL,
	artist_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES SpotifyClone.users(user_id),
  FOREIGN KEY (artist_id) REFERENCES SpotifyClone.artists(artist_id),
  CONSTRAINT PRIMARY KEY (user_id, artist_id)
) ENGINE = InnoDB;

INSERT INTO SpotifyClone.artists (artist_id, artist_name) VALUES
	(NULL, 'Beyoncé'),
	(NULL, 'Queen'),
	(NULL, 'Elis Regina'),
	(NULL, 'Baco Exu do Blues'),
	(NULL, 'Blind Guardian'),
	(NULL, 'Nina Simone');

INSERT INTO SpotifyClone.plans (plan_id, plan_name, plan_price) VALUES
	(NULL, 'gratuito', 0),
	(NULL, 'universitário', 5.99),
	(NULL, 'pessoal', 6.99),
	(NULL, 'familiar', 7.99);

INSERT INTO SpotifyClone.users (user_id, user_name, user_age, user_signature_date, plan_id) VALUES
	(1, 'Barbara Liskov', 82, DATE('2019-10-20'), 1),
	(2, 'Robert Cecil Martin', 58, DATE('2017-01-06'), 1),
	(3, 'Ada Lovelace', 37, DATE('2017-12-30'), 4),
	(4, 'Martin Fowler', 46, DATE('2017-01-17'), 4),
	(5, 'Sandi Metz', 58, DATE('2018-04-29'), 4),
	(6, 'Paulo Freire', 19, DATE('2018-02-14'), 2),
	(7, 'Bell Hooks', 26, DATE('2018-01-05'), 2),
	(8, 'Christopher Alexander', 85, DATE('2019-06-05'), 3),
	(9, 'Judith Butler', 45, DATE('2020-05-13'), 3),
	(10, 'Jorge Amado', 58, DATE('2017-02-17'), 3);

INSERT INTO SpotifyClone.albums (album_id, album_name, release_year, artist_id) VALUES
	(1, 'Renaissance', '2022', 1),
	(2, 'Jazz', '1978', 2),
	(3, 'Hot Space', '1982', 2),
	(4, 'Falso Brilhante', '1998', 3),
	(5, 'Vento de Maio', '2001', 3),
	(6, 'QVVJFA?', '2003', 4),
	(7, 'Somewhere Far Beyond', '2007', 5),
	(8, 'I Put A Spell On You', '2012', 6);

INSERT INTO SpotifyClone.songs (song_id, album_id, song_name, song_seconds_duration) VALUES
	(NULL, 1, 'BREAK MY SOUL', 279),
	(NULL, 1, "VIRGO’S GROOVE", 369),
	(NULL, 1, 'ALIEN SUPERSTAR', 116),
	(NULL, 2, "Don’t Stop Me Now", 203),
	(NULL, 3, 'Under Pressure', 152),
	(NULL, 4, 'Como Nossos Pais', 105),
	(NULL, 5, 'O Medo de Amar é o Medo de Ser Livre', 207),
	(NULL, 6, "Samba em Paris", 267),
	(NULL, 7, "The Bard’s Song", 244),
	(NULL, 8, 'Feeling Good', 100);

INSERT INTO SpotifyClone.followers ( user_id, artist_id) VALUES
	  (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 3),
    (3, 2),
    (4, 4),
    (5, 5),
    (5, 6),
    (6, 6),
    (6, 1),
    (7, 6),
    (9, 3),
    (10, 2);

INSERT INTO SpotifyClone.user_history (user_id, song_id, reproduction_date) VALUES
	(1, 8, '2022-02-28 10:45:55'),
  (1, 2, '2020-05-02 05:30:35'),
  (1, 10, '2020-03-06 11:22:33'),
  (2, 10, '2022-08-05 08:05:17'),
  (2, 7, '2020-01-02 07:40:33'),
  (3, 10, '2020-11-13 16:55:13'),
  (3, 2, '2020-12-05 18:38:30'),
  (4, 8, '2021-08-15 17:10:10'),
  (5, 8, '2022-01-09 01:44:33'),
  (5, 5, '2020-08-06 15:23:43'),
  (6, 7, '2017-01-24 00:31:17'),
  (6, 1, '2017-10-12 12:35:20'),
  (7, 4, '2011-12-15 22:30:49'),
  (8, 4, '2012-03-17 14:56:41'),
  (9, 9, '2022-02-24 21:14:22'),
  (10, 3, '2015-12-13 08:30:22');
