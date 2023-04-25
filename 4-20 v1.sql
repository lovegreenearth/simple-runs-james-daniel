/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.8-MariaDB : Database - simple_runs
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`simple_runs` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `simple_runs`;

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`description`) values 
(1,'admin',NULL),
(2,'driver',NULL),
(3,'subcontractor',NULL),
(4,'customer',NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT 2,
  `phone` varchar(255) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `profilePhoto` varchar(255) DEFAULT NULL,
  `vehicle` int(11) DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `isDeleted` tinyint(4) DEFAULT 0,
  `createdAt` datetime(6) DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) DEFAULT current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`firstName`,`lastName`,`email`,`password`,`role`,`phone`,`gender`,`address`,`profilePhoto`,`vehicle`,`createdBy`,`isDeleted`,`createdAt`,`updatedAt`) values 
(2,'James','Daniel','jamesdanieladmin@gmail.com','$2b$10$okCM3foP5mRRz8vRA0UVZueFezWAcf3uPDr2O/lX5fo4UUq9HxX6G',1,'123456789','Male',NULL,NULL,NULL,NULL,0,'2023-04-18 06:11:02.179708','2023-04-18 06:11:02.179708'),
(3,'John','Doe','driver1@gmail.com','$2b$10$6ChBcJnLTxB6gQ5TH7GuAO4k7CAUzi4OL7k4QC1JVqD0borPoPndW',2,'123456789','Male',NULL,NULL,NULL,NULL,0,'2023-04-19 17:02:56.950937','2023-04-19 17:02:56.950937'),
(4,'Michael','Smith','driver2@gmail.com','$2b$10$U5piGKF6H1ZLtZENbM9ziec66.QEvdSi5OaE5hq/ArdzA2p1PGyni',2,'321654987','Male',NULL,NULL,NULL,NULL,0,'2023-04-19 17:03:43.425104','2023-04-19 17:03:43.425104');

/*Table structure for table `vehicles` */

DROP TABLE IF EXISTS `vehicles`;

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `isDeleted` tinyint(4) DEFAULT 0,
  `createdAt` datetime(6) DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) DEFAULT current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `vehicles` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
