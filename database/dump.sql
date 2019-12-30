-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: getBeerHere
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartItems` (
  `cartItemId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`cartItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (1,7,4,999),(2,8,2,2595),(3,9,2,2595),(4,10,2,2595),(5,11,2,2595),(6,12,2,2595),(7,13,2,2595),(8,14,2,2595),(9,15,2,2595),(10,16,2,2595),(11,17,3,2900),(12,18,2,2595),(13,19,2,2595),(14,20,2,2595),(15,21,4,999),(16,22,4,999),(17,23,5,9900),(18,24,5,9900),(19,25,5,9900),(20,26,5,9900),(21,27,5,9900),(22,28,5,9900),(23,29,5,9900),(24,30,5,9900),(25,31,5,9900),(26,32,3,2900),(27,0,3,2900),(28,0,4,999),(29,0,2,2595),(30,22,2,2595),(31,22,2,2595),(32,22,4,999),(33,22,5,9900),(34,22,5,9900),(35,22,2,2595),(36,22,3,2900),(37,22,4,999),(38,33,1,2999),(39,38,1,2999),(40,38,1,2999),(41,38,1,2999),(42,38,1,2999),(43,38,1,2999),(44,38,1,2999),(45,38,1,2999),(46,38,1,2999),(47,38,1,2999),(48,38,1,2999),(49,38,1,2999),(50,38,3,2900),(51,38,5,9900),(52,38,2,2595),(53,38,2,2595),(54,38,2,2595),(55,38,2,2595),(56,38,2,2595),(57,38,1,2999),(58,38,1,2999),(59,38,2,2595),(60,38,2,2595),(61,38,3,2900),(62,38,6,830),(63,22,2,2595),(64,34,4,999),(65,64,2,2595),(66,64,1,2999),(67,64,5,9900),(68,35,2,2595),(69,68,5,9900),(70,68,6,830),(71,68,2,2595),(72,36,2,2595),(73,72,4,999),(74,72,1,2999),(75,37,1,2999),(76,75,4,999),(77,38,4,999),(78,77,2,2595),(79,77,2,2595),(80,39,4,999),(81,80,2,2595),(82,80,2,2595),(83,40,5,9900),(84,83,6,830),(85,83,2,2595),(86,83,1,2999),(87,83,1,2999),(88,83,1,2999),(89,83,2,2595),(90,83,5,9900);
/*!40000 ALTER TABLE `cartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'2019-11-20 19:43:16'),(2,'2019-11-20 20:35:54'),(3,'2019-11-20 20:36:05'),(4,'2019-11-20 20:37:57'),(5,'2019-11-20 20:40:11'),(6,'2019-11-20 20:41:51'),(7,'2019-11-20 20:43:12'),(8,'2019-11-20 20:43:49'),(9,'2019-11-20 20:47:23'),(10,'2019-11-20 20:48:02'),(11,'2019-11-20 21:02:50'),(12,'2019-11-20 21:03:29'),(13,'2019-11-20 21:07:33'),(14,'2019-11-20 21:09:29'),(15,'2019-11-20 21:11:15'),(16,'2019-11-20 21:11:55'),(17,'2019-11-20 21:12:27'),(18,'2019-11-20 21:12:31'),(19,'2019-11-20 21:13:13'),(20,'2019-11-20 21:14:35'),(21,'2019-11-20 21:14:56'),(22,'2019-11-20 21:17:09'),(23,'2019-11-20 21:17:14'),(24,'2019-11-20 21:17:45'),(25,'2019-11-20 21:17:50'),(26,'2019-11-20 21:18:18'),(27,'2019-11-20 21:19:14'),(28,'2019-11-20 21:23:15'),(29,'2019-11-20 21:23:26'),(30,'2019-11-20 21:32:22'),(31,'2019-11-20 22:36:51'),(32,'2019-11-20 22:36:59'),(33,'2019-11-21 01:51:58'),(34,'2019-11-21 22:54:36'),(35,'2019-11-21 22:58:23'),(36,'2019-11-21 23:00:24'),(37,'2019-11-21 23:01:48'),(38,'2019-11-21 23:02:40'),(39,'2019-11-21 23:08:46'),(40,'2019-11-21 23:31:05');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,22,'Kris Ringler','12345677','123 lfz','2019-11-21 21:20:45'),(2,22,'kringler','47582731','1234567 lfz','2019-11-21 22:50:42'),(3,64,'kris','12345678','123 lfz again','2019-11-21 22:55:06'),(4,68,'kris','12345678','123 lfz again','2019-11-21 22:59:53'),(5,72,'kris','12345678','123 lfz again','2019-11-21 23:00:33'),(6,75,'kris','12345678','123 lfz again','2019-11-21 23:01:55'),(7,77,'kris','12345678','123 lfz again again again','2019-11-21 23:02:55'),(8,80,'kris','12345678','123 lfz again again again','2019-11-21 23:09:14');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Shake Weight',2999,'/images/shake-weight.jpg','Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros elit, tincidunt non nibh et, pretium mollis tellus. Vestibulum ut orci sit amet nisl lacinia tincidunt. Aliquam hendrerit justo id dui porta molestie. Donec eget mattis eros. Fusce tincidunt, felis sit amet dapibus congue, libero sapien commodo erat, at vestibulum nunc massa ut est. Proin suscipit elementum ante non tincidunt. Suspendisse potenti. Nulla efficitur ac ante nec lacinia. '),(2,'ShamWow',2595,'/images/shamwow.jpg','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros elit, tincidunt non nibh et, pretium mollis tellus. Vestibulum ut orci sit amet nisl lacinia tincidunt. Aliquam hendrerit justo id dui porta molestie. Donec eget mattis eros. Fusce tincidunt, felis sit amet dapibus congue, libero sapien commodo erat, at vestibulum nunc massa ut est. Proin suscipit elementum ante non tincidunt. Suspendisse potenti. Nulla efficitur ac ante nec lacinia. '),(3,'Snuggie',2900,'/images/snuggie.jpg','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros elit, tincidunt non nibh et, pretium mollis tellus. Vestibulum ut orci sit amet nisl lacinia tincidunt. Aliquam hendrerit justo id dui porta molestie. Donec eget mattis eros. Fusce tincidunt, felis sit amet dapibus congue, libero sapien commodo erat, at vestibulum nunc massa ut est. Proin suscipit elementum ante non tincidunt. Suspendisse potenti. Nulla efficitur ac ante nec lacinia. '),(4,'Wax Vac',999,'/images/wax-vac.jpg','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros elit, tincidunt non nibh et, pretium mollis tellus. Vestibulum ut orci sit amet nisl lacinia tincidunt. Aliquam hendrerit justo id dui porta molestie. Donec eget mattis eros. Fusce tincidunt, felis sit amet dapibus congue, libero sapien commodo erat, at vestibulum nunc massa ut est. Proin suscipit elementum ante non tincidunt. Suspendisse potenti. Nulla efficitur ac ante nec lacinia. '),(5,'Ostrich Pillow',9900,'/images/ostrich-pillow.jpg','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros elit, tincidunt non nibh et, pretium mollis tellus. Vestibulum ut orci sit amet nisl lacinia tincidunt. Aliquam hendrerit justo id dui porta molestie. Donec eget mattis eros. Fusce tincidunt, felis sit amet dapibus congue, libero sapien commodo erat, at vestibulum nunc massa ut est. Proin suscipit elementum ante non tincidunt. Suspendisse potenti. Nulla efficitur ac ante nec lacinia. '),(6,'Tater Mitts',830,'/images/tater-mitts.jpg','8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros elit, tincidunt non nibh et, pretium mollis tellus. Vestibulum ut orci sit amet nisl lacinia tincidunt. Aliquam hendrerit justo id dui porta molestie. Donec eget mattis eros. Fusce tincidunt, felis sit amet dapibus congue, libero sapien commodo erat, at vestibulum nunc massa ut est. Proin suscipit elementum ante non tincidunt. Suspendisse potenti. Nulla efficitur ac ante nec lacinia. ');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-30 21:26:08
