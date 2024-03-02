CREATE DATABASE `reunion_amigos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- users

CREATE TABLE  `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `nickname` varchar(120) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `nickname` (`nickname`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone_number` (`phone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- suggestions

CREATE TABLE  `suggestions` (
  `id_suggestion` int NOT NULL AUTO_INCREMENT,
  `datetime` datetime NOT NULL,
  `location` text NOT NULL,
  `description_location` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_suggestion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- meeting

CREATE TABLE  `meetings` (
  `id_meeting` int NOT NULL AUTO_INCREMENT,
  `id_user_org` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `id_suggestion` int DEFAULT NULL,
  PRIMARY KEY (`id_meeting`),
  KEY `id_user_org` (`id_user_org`),
  KEY `id_suggestion` (`id_suggestion`),
  CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`id_user_org`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `meetings_ibfk_2` FOREIGN KEY (`id_suggestion`) REFERENCES `suggestions` (`id_suggestion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- guests

CREATE TABLE  `guests` (
  `id_user_guest` int NOT NULL AUTO_INCREMENT,
  `status_meeting_viewed` tinyint(1) DEFAULT '0',
  `status_accept` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_guest` int DEFAULT NULL,
  `id_meeting` int DEFAULT NULL,
  PRIMARY KEY (`id_user_guest`),
  KEY `user_guest` (`user_guest`),
  KEY `id_meeting` (`id_meeting`),
  CONSTRAINT `guests_ibfk_1` FOREIGN KEY (`user_guest`) REFERENCES `users` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `guests_ibfk_2` FOREIGN KEY (`id_meeting`) REFERENCES `meetings` (`id_meeting`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
