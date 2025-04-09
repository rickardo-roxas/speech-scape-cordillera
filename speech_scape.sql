-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2025 at 06:11 PM
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

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`language_id`, `l_name`) VALUES
(1, 'Ayangan'),
(2, 'Baliwon'),
(3, 'Ibaloi'),
(4, 'Isnag'),
(5, 'Itneg'),
(6, 'Kalinga'),
(7, 'Kalanguya'),
(8, 'Kankanaey'),
(9, 'Malaueg'),
(10, 'Sinadanga'),
(11, 'Tagalog'),
(12, 'Tuwali');

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

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`province_id`, `p_name`, `info_1`, `info_2`, `info_3`, `region_id`) VALUES
(1, 'Abra', 'Abra was created as a politico-military province in 1846, before which it was part of the old Ilocos province – and later Ilocos Sur – and the Ilocos Region was divided into two provinces in 1818.', 'In 1899, a revolutionary government was established in Abra through the leadership of Don Blas Villamor. Leocadio Valera became the Provincial Governor until Abra fell into the American Civil Government established on August 19, 1909.', 'On March 9, 1917, the Philippine Assembly re-established Abra as a province. It is bordered by Ilocos Norte on the northwest, Apayao on the northeast, Kalinga on the mid-east, Mountain Province on the southeast, and Ilocos Sur on the southwest.', 8),
(2, 'Apayao', 'Apayao was among the earliest areas penetrated by the Spaniards in the Cordilleras.', 'Isnegs are the indigenous people of the Apayao province. The term “Isneg” was derived from the combination of “is,” meaning recede, and “uneg” meaning interior. Thus, the Isneg are people who have gone into the interior.', 'On August 18, 1908, by Act No. 1876, the Philippine Legislature created the Mountain Province. Apayao, which had been attached to the province of Cagayan, was made a sub-province of the Mountain Province. The old Mountain Province then was divided into four provinces by virtue of Republic Act No. 4695 on June 18, 1966. The sub-provinces of Apayao and Kalinga were fused into the province of Kalinga-Apayao. Eventually, Apayao was created as a distinct province from out of Kalinga-Apayao on February 14, 1995 with the passage of Republic Act No. 7878.', 8),
(3, 'Benguet', 'The name Benguet was first pronounced in La Trinidad, a thriving settlement at the crossroads to the lowland trading sites during the period of Spanish expeditions.', 'Benguet was established as a Province in 1899 under the First Philip­pine Republic with Juan Oraa “Ahino” Carino appointed as Governor and Presi­dent of the Board. The seat of the provincial government was in Tuel, Tublay.', 'On June 18, 1966 by virtue of Republic Act 4695 Mountain Province was divided into four provinces namely Benguet, Mountain Province, Ifugao and Kalinga-Apayao. Once-again, Benguet became a distinct and regular province.\r\n', 8),
(4, 'Ifugao', 'The Ifugao people trace their ancestry to Wigan and Bugan from the Skyworld (Kabunyan), settling in Kiyangan and later expanding across the region.', 'The Spaniards attempted to conquer Ifugao but failed because of local resistance of ifugao people, withdrawing in 1897 before American forces arrived in 1902.', 'Ifugao became a sub-province under Mt. Province in 1905 and gained full provincial status in 1966, now thriving in agriculture, crafts, and tourism.\r\n', 8),
(5, 'Kalinga', 'The name \"Kalinga\" originates from the Ibanag and Gaddang languages, where it refers to an \"enemy,\" \"fighter,\" or \"headtaker.\"', 'Kalinga was carved out from the provinces of Cagayan and Isabela and officially established as a sub-province of Lepanto-Bontoc by the Americans through Philippine Commission Act No. 1642 on May 9, 1907.', 'Kalinga was merged with Apayao to form a single province when the old Mountain Province was divided into four separate provinces under Republic Act No. 4695 in 1966. Later, along with Abra, it became part of the Cordillera Administrative Region, established through Executive Order No. 220 in 1987.', 8),
(6, 'Mountain Province', 'Originally, the whole Cordillera region was identified as \'Mountain Province\' ,a special province of the Philippines composed of the sub-provinces of Bontoc-Lepanto-Amburayan, Ifugao, Kalinga, Benguet, Apayao. Mr. Samuel Kane, the Provincial Supervisor was appointed Governor and Bontoc was made the provincial capital.', 'On June 18, 1966 the Mountain Province which we have now was politically created by virtue of RA 4695, the Subdivision Law of Mountain Province approved by then President Ferdinand E. Marcos. The five (5) distinct provinces of Benguet, Kalinga, Apayao, Ifugao and Mountain Province were finally born.', 'On Friday, April 7, 1967, a year after the Subdivision Law was approved, the “new” Mountain Province had become legally and officially operational with the following set of officials: Congressman-Luis Hora, Governor – Alfredo G. Lamen, Vice-Governor- Victor S. Dominguez, Board Member- Pio Felwa, Alfonso Layug and Alejo Manao where President Fidel V. Ramos declared April 7 as the Mountain Province Foundation Day on February 28,1993\r\n', 8);

-- --------------------------------------------------------

--
-- Table structure for table `province_ethnicities`
--

CREATE TABLE `province_ethnicities` (
  `province_id` int(11) NOT NULL,
  `ethnic_group` char(45) NOT NULL,
  `percentage` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `province_ethnicities`
--

INSERT INTO `province_ethnicities` (`province_id`, `ethnic_group`, `percentage`) VALUES
(1, 'Ilocano', 8.10),
(1, 'Kankanaey', 0.03),
(1, 'Kalinga', 0.02),
(1, 'Ibaloy', 0.01),
(1, 'Itneg/Tingguian', 5.20),
(2, 'Kalinga', 8.60),
(2, 'Ilocano', 1.80),
(2, 'Kankanaey', 0.40),
(2, 'Ibaloy', 0.04),
(2, 'Itneg/Tingguian', 0.02),
(3, 'Kankanaey', 12.00),
(3, 'Ibaloy', 7.30),
(3, 'Ilocano', 1.70),
(3, 'Kalinga', 0.40);

-- --------------------------------------------------------

--
-- Table structure for table `province_images`
--

CREATE TABLE `province_images` (
  `province_id` int(11) NOT NULL,
  `img_url` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `province_images`
--

INSERT INTO `province_images` (`province_id`, `img_url`) VALUES
(3, 'baguio_1.jpg'),
(3, 'baguio_2.jpg'),
(3, 'baguio_3.jpg'),
(3, 'baguio_4.jpg');

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
-- Dumping data for table `region`
--

INSERT INTO `region` (`region_id`, `region_name`, `info_1`, `info_2`, `info_3`) VALUES
(1, 'Ilocos Region', '', '', ''),
(2, 'Cagayan Valley', '', '', ''),
(3, 'Central Luzon', '', '', ''),
(4, 'CALABARZON', '', '', ''),
(5, 'MIMAROPA', '', '', ''),
(6, 'Bicol Region', '', '', ''),
(7, 'National Capital Region (NCR)', '', '', ''),
(8, 'Cordillera Administrative Region (CAR)', 'The Cordillera Administrative Region (CAR) was established on July 15, 1987 through executive Order No. 220 issued by President Corazon Aquino.', 'The Cordillera Administrative Region is the only land-locked region of the Philippines.\r\n', 'The region is rich in ancient culture. It is the home of the indigenous tribe called the Igorot. The way of life of the people in this region existed way back to ancient Filipinos before the Spanish colonization.\r\n'),
(9, 'Western Visayas', '', '', ''),
(10, 'Central Visayas', '', '', ''),
(11, 'Eastern Visayas', '', '', ''),
(12, 'Zamboanga Peninsula', '', '', ''),
(13, 'Northern Mindanao', '', '', ''),
(14, 'Davao Region', '', '', ''),
(15, 'SOCCSKSARGEN', '', '', ''),
(16, 'Caraga', '', '', ''),
(17, 'Bangsamoro Autonomous Region in Muslim Mindan', '', '', '');

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
  ADD KEY `fk_province_images_pi` (`province_id`);

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
-- Constraints for table `province_images`
--
ALTER TABLE `province_images`
  ADD CONSTRAINT `fk_province_images_pi` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`) ON UPDATE CASCADE;

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
