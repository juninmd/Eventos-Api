-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: eventos
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.21-MariaDB

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
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evento` (
  `IDEVENTO` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(45) NOT NULL,
  `DATA` datetime NOT NULL,
  `DESCRICAO` varchar(45) NOT NULL,
  PRIMARY KEY (`IDEVENTO`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES (1,'Festa Junina','2017-12-12 07:00:00','Comemoração dia de Santo Antonio');
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_detalhe`
--

DROP TABLE IF EXISTS `evento_detalhe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evento_detalhe` (
  `IDDETALHE` int(11) NOT NULL,
  `IDEVENTO` int(11) NOT NULL,
  `DESCRICAO` varchar(140) NOT NULL,
  `DATA` datetime NOT NULL,
  `TIPOMIDIA` tinyint(4) NOT NULL COMMENT '1 - Texto\n2 - Vídeo\n3 - Áudio\n4 - Imagem',
  PRIMARY KEY (`IDDETALHE`),
  UNIQUE KEY `IDDETALHE_UNIQUE` (`IDDETALHE`),
  KEY `FK_EVENT_DET_EVENT_idx` (`IDEVENTO`),
  CONSTRAINT `FK_EVENT_DET_EVENT` FOREIGN KEY (`IDEVENTO`) REFERENCES `evento` (`IDEVENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_detalhe`
--

LOCK TABLES `evento_detalhe` WRITE;
/*!40000 ALTER TABLE `evento_detalhe` DISABLE KEYS */;
INSERT INTO `evento_detalhe` VALUES (1,1,'Inicio da queima de fogos','2017-12-12 07:00:00',1),(2,1,'Inicio da quadrilha','2017-12-12 08:00:00',1),(3,1,'Aperitivos','2017-12-12 09:00:00',4),(4,1,'Dança','2017-12-12 10:00:00',4),(5,1,'Dança','2017-12-12 10:20:00',3),(6,1,'Dança','2017-12-12 10:20:00',2);
/*!40000 ALTER TABLE `evento_detalhe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `EMAIL` varchar(45) NOT NULL,
  `SENHA` varchar(45) NOT NULL,
  `ISADMIN` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`EMAIL`),
  UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'eventos'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-09  0:57:47
