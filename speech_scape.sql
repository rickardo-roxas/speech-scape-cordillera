-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2025 at 05:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `speech_scape`
--

-- --------------------------------------------------------

--
-- Table structure for table `dialects`
--

CREATE TABLE `dialects` (
  `dialect_id` int(11) NOT NULL,
  `dialect_name` char(45) NOT NULL,
  `language_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `language_id` int(11) NOT NULL,
  `l_name` char(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `municipalities`
--

CREATE TABLE `municipalities` (
  `municipality_id` int(11) NOT NULL,
  `m_name` char(45) NOT NULL,
  `m_information` mediumtext NOT NULL,
  `province_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `municipality_languages`
--

CREATE TABLE `municipality_languages` (
  `municipality_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `dialect_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phrases`
--

CREATE TABLE `phrases` (
  `phrase_id` int(11) NOT NULL,
  `content` tinytext NOT NULL,
  `language_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `province_id` int(11) NOT NULL,
  `p_name` char(45) NOT NULL,
  `info_1` mediumtext NOT NULL,
  `info_2` mediumtext NOT NULL,
  `info_3` mediumtext NOT NULL,
  `region_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `province_ethnicities`
--

CREATE TABLE `province_ethnicities` (
  `province_id` int(11) NOT NULL,
  `ethnic_group` int(11) NOT NULL,
  `percentage` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `province_images`
--

CREATE TABLE `province_images` (
  `province_id` int(11) NOT NULL,
  `img_url` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `province_languages`
--

CREATE TABLE `province_languages` (
  `province_id` int(11) NOT NULL,
  `dialect_id` int(11) NOT NULL,
  `percentage` decimal(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE `region` (
  `region_id` int(11) NOT NULL,
  `region_name` varchar(45) NOT NULL,
  `info_1` mediumtext NOT NULL,
  `info_2` mediumtext NOT NULL,
  `info_3` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dialects`
--
ALTER TABLE `dialects`
  ADD PRIMARY KEY (`dialect_id`),
  ADD KEY `fk_language_id_d` (`language_id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`language_id`);

--
-- Indexes for table `municipalities`
--
ALTER TABLE `municipalities`
  ADD PRIMARY KEY (`municipality_id`),
  ADD KEY `fk_province_id` (`province_id`);

--
-- Indexes for table `municipality_languages`
--
ALTER TABLE `municipality_languages`
  ADD KEY `fk_dialect_id_ml` (`dialect_id`),
  ADD KEY `fk_language_id_ml` (`language_id`),
  ADD KEY `fk_municipality_id_ml` (`municipality_id`);

--
-- Indexes for table `phrases`
--
ALTER TABLE `phrases`
  ADD PRIMARY KEY (`phrase_id`),
  ADD KEY `fk_language_id_p` (`language_id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`province_id`),
  ADD KEY `fk_region_id_p` (`region_id`);

--
-- Indexes for table `province_ethnicities`
--
ALTER TABLE `province_ethnicities`
  ADD KEY `fk_province_id_pe` (`province_id`);

--
-- Indexes for table `province_images`
--
ALTER TABLE `province_images`
  ADD KEY `fk_province_id_pi` (`province_id`);

--
-- Indexes for table `province_languages`
--
ALTER TABLE `province_languages`
  ADD KEY `fk_dialect_id_pl` (`dialect_id`),
  ADD KEY `fk_province_id_pl` (`province_id`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`region_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dialects`
--
ALTER TABLE `dialects`
  ADD CONSTRAINT `fk_language_id_d` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`);

--
-- Constraints for table `municipalities`
--
ALTER TABLE `municipalities`
  ADD CONSTRAINT `fk_province_id` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`) ON UPDATE CASCADE;

--
-- Constraints for table `municipality_languages`
--
ALTER TABLE `municipality_languages`
  ADD CONSTRAINT `fk_dialect_id_ml` FOREIGN KEY (`dialect_id`) REFERENCES `dialects` (`dialect_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_language_id_ml` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_municipality_id_ml` FOREIGN KEY (`municipality_id`) REFERENCES `municipalities` (`municipality_id`) ON UPDATE CASCADE;

--
-- Constraints for table `phrases`
--
ALTER TABLE `phrases`
  ADD CONSTRAINT `fk_language_id_p` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`);

--
-- Constraints for table `provinces`
--
ALTER TABLE `provinces`
  ADD CONSTRAINT `fk_region_id_p` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`);

--
-- Constraints for table `province_ethnicities`
--
ALTER TABLE `province_ethnicities`
  ADD CONSTRAINT `fk_province_id_pe` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`) ON UPDATE CASCADE;

--
-- Constraints for table `province_languages`
--
ALTER TABLE `province_languages`
  ADD CONSTRAINT `fk_dialect_id_pl` FOREIGN KEY (`dialect_id`) REFERENCES `dialects` (`dialect_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_province_id_pl` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
