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
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`cartItemId`) USING BTREE,
  UNIQUE KEY `SECONDARY` (`cartId`,`productId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=277 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'2019-11-20 19:43:16'),(2,'2019-11-20 20:35:54'),(3,'2019-11-20 20:36:05'),(4,'2019-11-20 20:37:57'),(5,'2019-11-20 20:40:11'),(6,'2019-11-20 20:41:51'),(7,'2019-11-20 20:43:12'),(8,'2019-11-20 20:43:49'),(9,'2019-11-20 20:47:23'),(10,'2019-11-20 20:48:02'),(11,'2019-11-20 21:02:50'),(12,'2019-11-20 21:03:29'),(13,'2019-11-20 21:07:33'),(14,'2019-11-20 21:09:29'),(15,'2019-11-20 21:11:15'),(16,'2019-11-20 21:11:55'),(17,'2019-11-20 21:12:27'),(18,'2019-11-20 21:12:31'),(19,'2019-11-20 21:13:13'),(20,'2019-11-20 21:14:35'),(21,'2019-11-20 21:14:56'),(22,'2019-11-20 21:17:09'),(23,'2019-11-20 21:17:14'),(24,'2019-11-20 21:17:45'),(25,'2019-11-20 21:17:50'),(26,'2019-11-20 21:18:18'),(27,'2019-11-20 21:19:14'),(28,'2019-11-20 21:23:15'),(29,'2019-11-20 21:23:26'),(30,'2019-11-20 21:32:22'),(31,'2019-11-20 22:36:51'),(32,'2019-11-20 22:36:59'),(33,'2019-11-21 01:51:58'),(34,'2019-11-21 22:54:36'),(35,'2019-11-21 22:58:23'),(36,'2019-11-21 23:00:24'),(37,'2019-11-21 23:01:48'),(38,'2019-11-21 23:02:40'),(39,'2019-11-21 23:08:46'),(40,'2019-11-21 23:31:05'),(41,'2020-01-07 23:26:21'),(42,'2020-01-10 22:58:22'),(43,'2020-01-10 23:05:17'),(44,'2020-01-14 22:11:26'),(45,'2020-01-15 00:36:07'),(46,'2020-01-15 01:14:43'),(47,'2020-01-15 01:23:18'),(48,'2020-01-15 01:23:41'),(49,'2020-02-08 00:30:17'),(50,'2020-02-09 02:31:16');
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,22,'Kris Ringler','12345677','123 lfz','2019-11-21 21:20:45'),(2,22,'kringler','47582731','1234567 lfz','2019-11-21 22:50:42'),(3,64,'kris','12345678','123 lfz again','2019-11-21 22:55:06'),(4,68,'kris','12345678','123 lfz again','2019-11-21 22:59:53'),(5,72,'kris','12345678','123 lfz again','2019-11-21 23:00:33'),(6,75,'kris','12345678','123 lfz again','2019-11-21 23:01:55'),(7,77,'kris','12345678','123 lfz again again again','2019-11-21 23:02:55'),(8,80,'kris','12345678','123 lfz again again again','2019-11-21 23:09:14'),(9,91,'n','n','n','2020-01-10 22:28:56'),(10,109,'sadfasdfasdf','123123123','asdasdfasdf','2020-01-10 22:58:37'),(11,142,'Kris Ringler','1234566879879879','123456 Main Street','2020-02-08 00:30:07');
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
INSERT INTO `products` VALUES (1,'Tulip Glass',1999,'/images/tulip-glass-clear.jpg','A wide range of modern assortment glasses ','An expert tasting panel made up of master brewers and industry professionals have approved Spiegelau beer glasses. The custom shapes successfully deliver complex aromas, and enhance the texture, balance and flavor of your favorite beers.\r\n\r\n'),(2,'German Stein',7595,'/images/german-stein-clear.jpg','30 oz handcrafted German Stein','This German stein celebrates the 100th Anniversary of the Free State of Bavaria (100 Jahre Freistaat Bayern) with all things Bavarian.  Bavaria officially proclaimed it\'s independence in 1918.  The festivities will culminate with a big celebration in Munich on Nov. 8th, 2018.  Events celebrating this anniversary will be going on throughout the year focused on bringing everyone closer to the essence being a Bavarian; the unique customs, traditions, way of life and of course the natural beauty of the area. '),(3,'Gift Set',17500,'/images/glass-gift-set-clear.jpg','Assortment of pitcher glasses for any pub or restaurant ','Invite friends over to enjoy a nice cold one, served in these Susquehanna Glass Monogrammed Block Letter Glasses. This set of 4 glasses features a laser-cut rim and is sand-etched by hand with a letter. '),(4,'Brew Kit',49999,'/images/brewing-kit-clear.jpg','Everything-You-Need Beer Kit','The Premium Homebrewing Starter Kit is our \"get the best to start with\" kit and comes with all the bells and whistles!  Included in this beer brewing starter kit is a massive 8.5 gallon stainless steel brewing kettle, 7 gallon Fermonster fermenter, copper wort chiller,  American Pale Ale ingredient kit, and all the time tested brewing equipment you need to make beer at home.  Long story short, this kit has everything you need to start home brewing!\r\n\r\n'),(5,'Das Boot',3000,'/images/das-boot-clear.jpg','The Beer glass to rule them all..','This is DAS BOOT! This two liter machine pressed beer boot is perfect for the budget minded boot drinker looking for a more durable \"Das Boot\".\r\n\r\n\r\n\r\n\r\n'),(6,'Modern Collection',15000,'/images/full-pint-glasses-clear.jpg','Modern collection for every style','The perfect accessory to a fun night with friends or family, this tasting set includes 4 true taster size glasses, wood serving paddle, and a beer tasting guide. This beer tasting set has everything you need to educate your palate.');
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

-- Dump completed on 2020-02-09 21:01:56
