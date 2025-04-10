-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 10, 2025 at 10:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

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
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(45) NOT NULL,
  `region_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`city_id`, `city_name`, `region_id`) VALUES
(1, 'Baguio City', 8);

-- --------------------------------------------------------

--
-- Table structure for table `city_ethnic_groups`
--

CREATE TABLE `city_ethnic_groups` (
  `city_id` int(11) NOT NULL,
  `eg_id` int(11) NOT NULL,
  `percentage` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `city_images`
--

CREATE TABLE `city_images` (
  `city_id` int(11) NOT NULL,
  `city_img` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `city_languages`
--

CREATE TABLE `city_languages` (
  `city_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `percentage` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Table structure for table `ethnic_groups`
--

CREATE TABLE `ethnic_groups` (
  `eg_id` int(11) NOT NULL,
  `eg_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ethnic_groups`
--

INSERT INTO `ethnic_groups` (`eg_id`, `eg_name`) VALUES
(1, 'Foreign'),
(2, 'Ibaloy'),
(3, 'Ilocano'),
(4, 'Itneg/Tingguian'),
(5, 'Kalinga'),
(6, 'Kankanaey');

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
(0, 'Ilocano'),
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
  `province_id` int(11) NOT NULL,
  `m_name` char(45) NOT NULL,
  `m_information` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `municipalities`
--

INSERT INTO `municipalities` (`municipality_id`, `province_id`, `m_name`, `m_information`) VALUES
(1, 3, 'Atok', 'Atok is a medium-sized municipality with a total land area of 10,860 hectares occupied by 11,000 persons, according to the 1960 census. It is surrounded by Kibungan and Bakun to the north, Tublay to the south, Kapangan to the west, and Kabayan to the east.'),
(2, 3, 'Bakun', 'Bakun is a rugged, mountainous region located at the north-eastern part of the Province of Benguet. It is bounded on the south by the municipality of Buguias, on the northeast by the municipality of Mankayan, and on the west by the province of Ilocos Sur.'),
(3, 3, 'Bokod', 'Bokod, a municipality in Benguet, covers a total land area of 39,423 hectares and is the second largest town in the province. According to the Provincial Health Office, its estimated population is 11,900. The primary sources of income for the municipality are lumbering, fruit and vegetable growing, and cattle raising. The average annual income is Php 168,501.64, and it is classified as a third-class municipality.'),
(4, 3, 'Buguias', 'Buguias is known for its captivating natural beauty, featuring white, sparkling waterfalls, cascading rivers, fresh and hot springs, rolling hills, and vast fertile valleys. Located to the north of Bauko, south of Atok, and west of Kapangan, it covers a land area of 16,260 hectares and had a population of 8,658 based on the 1960 census.'),
(5, 3, 'Itogon', 'Itogon, with its abundant resources and forward-thinking population, has achieved an economic prominence comparable to other prosperous towns not only in Benguet but also in other regions of the country. Itogon is bordered by Baguio and La Trinidad to the north, Pangasinan to the south, Tuba to the west, and Bokod to the east.'),
(6, 3, 'Kabayan', 'The name Kabayan is closely associated with Henry A. Kamora, the late esteemed elder of the community. Kamora played a key role in the completion of Kabayan\'s road, market building, and hospital. The municipality\'s primary sources of income include rice, coffee, vegetables, and lumber products.'),
(7, 3, 'Kapangan', 'Kapangan covers a land area of 164.39 square kilometers (63.47 square miles), making up 5.94% of Benguet\'s total area. According to the 2020 Census, its population was 19,297, which accounts for 4.19% of Benguet\'s total population and 1.07% of the overall population of the Cordillera Administrative Region.'),
(8, 3, 'Kibungan', 'The Municipality of Kibungan is bordered to the north by Bakun, to the east by Buguias, to the south by Atok and Kapangan, and to the west by the Province of Ilocos Sur. The economic development of Kibungan is currently stagnant. The primary products of the municipality include rice, vegetables, and camote. This slow growth may be attributed to the insufficient road infrastructure.'),
(9, 3, 'La Trinidad', 'La Trinidad is commonly referred to as the \"Salad Bowl of the Philippines.\" However, this may no longer be an appropriate name in the near future, as the valley, once abundant with vegetables, is gradually being overtaken by urbanization. This change is expected, given that La Trinidad is the capital town, with hopes of it eventually becoming the second city of Benguet.'),
(10, 3, 'Mankayan', 'The abundant copper mines crisscrossing the land in the prosperous town of Mankayan contribute to its status as one of the richest towns in the Philippines today. Despite being relatively small in size, with a total land area of 10,370 hectares and a sparse population of 13,812 according to the 1960 census, Mankayan is rich in human resources.'),
(11, 3, 'Sablan', 'Sablan is known for producing the juiciest Hawaiian pineapples and the most delicious bananas in Benguet. A significant portion of Sablan\'s fertile 8,640 hectares is dedicated to cultivating these profitable crops. The remaining land is used for rice, coffee, and various fruit trees.'),
(12, 3, 'Tuba', 'Tuba is the third largest town in Benguet, covering a total land area of 34,710 hectares and an estimated population of 12,400. It borders Naguilian municipality to the north, Sablan municipality and the City of Baguio to the east, the province of Pangasinan to the south, and the province of La Union to the west.'),
(13, 3, 'Tublay', 'Tublay Municipality is located thirteen kilometers north of Baguio City. It is bordered to the north by Atok and Kapangan, to the east by Bokod, to the south by Itogon and La Trinidad, and to the west by Kapangan and Sablan municipalities.'),
(14, 5, 'Balbalan', 'This town\'s name originates from an ancient tradition. It is said that war parties from northern Kalinga, possibly from the ancient settlement of Salegseg, would gather by a creek to plan their attacks or regroup after raiding a village. As they routinely washed (balbal in the local dialect) their blood-stained bodies and weapons in the creek, the area and its surroundings eventually became known as Balbalan.'),
(15, 5, 'Lubuagan', 'Lubuagan, officially known as the Municipality of Lubuagan, is a 4th-class municipality in Kalinga, Philippines. As per the 2020 census, it has a population of 9,323. Located 460 kilometers (290 miles) north of Manila, it sits approximately 50 kilometers (31 miles) from Tabuk.'),
(16, 5, 'Pasil', 'Pasil is a municipality in the landlocked province of Kalinga. It has a land area of 189.00 square kilometers (72.97 square miles), which accounts for 5.76% of Kalinga\'s total area. According to the 2020 Census, its population is 10,577.'),
(17, 5, 'Pinukpuk', 'Pinukpuk, officially the Municipality of Pinukpuk, is a 1st-class municipality in Kalinga, Philippines. Based on the 2020 census, it has a population of 34,275. Situated in the northern part of Kalinga, it serves as a gateway to Tuao in Cagayan and Conner in Apayao.'),
(18, 5, 'Rizal', 'Rizal, formerly known as Liwan, is a 4th-class municipality in the province of Kalinga, Philippines. According to the 2020 census, it has a population of 19,554. The town is renowned for its Pleistocene sites, which contain rhino bones, tools, deer bones, turtle remains, and stegodon fossils.'),
(19, 5, 'Tabuk City', 'Tabuk, officially known as the City of Tabuk (Ilocano: Siudad ti Tabuk; Tagalog: Lungsod ng Tabuk), is a 5th-class component city and the capital of Kalinga province, Philippines. As of the 2020 census, it has a population of 121,033.'),
(20, 5, 'Tanudan', 'Tanudan, officially the Municipality of Tanudan, is a 4th-class municipality in Kalinga, Philippines. According to the 2020 census, it has a population of 8,746. The town is famous for Mount Binaratan, which is steeped in legend. It is said that the supreme god of the Kalinga people went to the mountain to hunt, but the noise made by the birds irritated him. He commanded the birds to be quiet, and when he finished hunting, he forgot to lift the order. As a result, the mountain remains silent to this day.'),
(21, 5, 'Tinglayan', 'Tinglayan, officially the Municipality of Tinglayan, is a 4th-class municipality in Kalinga, Philippines. As of the 2020 census, it has a population of 13,148.'),
(35, 2, 'Calanasan', 'Formerly known as Bayag, Calanasan has a land area of 1,256.15 square kilometers, which constitutes 27.90% of Apayao\'s total area. Calanasan is the source of the Apayao River, which empties into the West Philippine Sea, as well as being the only navigable river in Apayao.'),
(36, 2, 'Conner', 'The municipality of Conner constitutes 15.73% of the total area of Apayao. The municipality was named after American Norman Conner, who spearheaded the construction of the main roads within the province of Apayao early on in the American era.'),
(37, 2, 'Flora', 'Flora constitutes 9.18% of Apayao\'s total area. It is 135 kilometers away from Kabugao and 684 kilometers from Manila.'),
(38, 2, 'Kabugao (Capital)', 'Kabugao is the capital municipality of the province that constitutes 20.77% (935.12 square kilometers) of Apayao\'s total area.'),
(39, 2, 'Luna', 'The municipality of Luna, formerly known as Macatel, was founded by Ilocano explorer Antonino Barroga. It constitutes 13.73% (606.04 square kilometers) of Apayao’s total area.'),
(40, 2, 'Pudtol', 'Pudtol was formerly part of the Luna municipality until it became its own municipal district on December 3, 1956, through Executive Order No. 217. Before its establishment as an official municipality, it served as the center of the Spanish mission in the entire province of Apayao, thus being once the center of Catholicism in the province. It constitutes 9.32% (411.37 square kilometers) of Apayao\'s total area. Currently, Pudtol is a famous tourist destination for trekking, swimming, climbing, and hiking with its rocky mountains, forests, and rivers.'),
(41, 2, 'Santa Marcela', 'Santa Marcela became its own municipal district after several barrios from Luna and Flora merged to form a new municipality. It was officially recognized as a municipality on June 17, 1967. It constitutes 4.45% (196.32 square kilometers) of the total area of Apayao.');

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
-- Table structure for table `province_ethnic_group`
--

CREATE TABLE `province_ethnic_group` (
  `province_id` int(11) NOT NULL,
  `eg_id` int(11) NOT NULL,
  `percentage` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `province_ethnic_group`
--

INSERT INTO `province_ethnic_group` (`province_id`, `eg_id`, `percentage`) VALUES
(3, 6, 12.00),
(3, 2, 7.30),
(3, 3, 1.70),
(3, 5, 0.40);

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
(1, 'abra_1.jpg'),
(1, 'abra_2.jpg'),
(1, 'abra_3.jpg'),
(1, 'abra_4.jpg'),
(1, 'abra_5.jpg'),
(1, 'abra_6.jpg'),
(2, 'apayao_1.jpg'),
(2, 'apayao_2.jpg'),
(2, 'apayao_3.jpg'),
(2, 'apayao_4.jpg'),
(2, 'apayao_5.jpg'),
(2, 'apayao_6.jpg'),
(3, 'benguet_1.jpg'),
(3, 'benguet_2.jpg'),
(3, 'benguet_3.jpg'),
(3, 'benguet_4.jpg'),
(4, 'ifugao_1.jpg'),
(4, 'ifugao_2.jpg'),
(4, 'ifugao_3.jpg'),
(4, 'ifugao_4.jpg'),
(5, 'kalinga_1.jpg'),
(5, 'kalinga_2.jpg'),
(5, 'kalinga_3.jpg'),
(5, 'kalinga_4.jpg'),
(5, 'kalinga_5.jpg'),
(5, 'kalinga_6.jpg'),
(6, 'mountain_province_1.jpg'),
(6, 'mountain_province_2.jpg'),
(6, 'mountain_province_3.jpg'),
(6, 'mountain_province_4.jpg'),
(6, 'mountain_province_5.jpg'),
(6, 'mountain_province_6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `province_languages`
--

CREATE TABLE `province_languages` (
  `province_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `percentage` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `province_languages`
--

INSERT INTO `province_languages` (`province_id`, `language_id`, `percentage`) VALUES
(3, 0, 34.30),
(3, 3, 33.90),
(3, 7, 16.50),
(3, 8, 7.30),
(3, 11, 2.90);

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

-- --------------------------------------------------------

--
-- Table structure for table `region_images`
--

CREATE TABLE `region_images` (
  `region_id` int(11) NOT NULL,
  `img_url` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `fk_region_id_r` (`region_id`);

--
-- Indexes for table `city_ethnic_groups`
--
ALTER TABLE `city_ethnic_groups`
  ADD KEY `fk_city_id_ceg` (`city_id`),
  ADD KEY `fk_eg_id_ceg` (`eg_id`);

--
-- Indexes for table `city_images`
--
ALTER TABLE `city_images`
  ADD KEY `fk_city_id_ci` (`city_id`);

--
-- Indexes for table `city_languages`
--
ALTER TABLE `city_languages`
  ADD KEY `fk_city_id_cl` (`city_id`),
  ADD KEY `fk_language_id_cl` (`language_id`);

--
-- Indexes for table `dialects`
--
ALTER TABLE `dialects`
  ADD PRIMARY KEY (`dialect_id`),
  ADD KEY `fk_language_id_d` (`language_id`);

--
-- Indexes for table `ethnic_groups`
--
ALTER TABLE `ethnic_groups`
  ADD PRIMARY KEY (`eg_id`);

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
  ADD KEY `fk_province_id_m` (`province_id`);

--
-- Indexes for table `municipality_languages`
--
ALTER TABLE `municipality_languages`
  ADD KEY `fk_dialect_id_ml` (`dialect_id`),
  ADD KEY `fk_language_id_ml` (`language_id`),
  ADD KEY `fk_municipality_id_ml` (`municipality_id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`province_id`),
  ADD KEY `fk_region_id_p` (`region_id`);

--
-- Indexes for table `province_ethnic_group`
--
ALTER TABLE `province_ethnic_group`
  ADD KEY `fk_eg_id_peg` (`eg_id`),
  ADD KEY `fk_province_id_peg` (`province_id`);

--
-- Indexes for table `province_images`
--
ALTER TABLE `province_images`
  ADD UNIQUE KEY `img_url` (`img_url`),
  ADD KEY `fk_province_images_pi` (`province_id`);

--
-- Indexes for table `province_languages`
--
ALTER TABLE `province_languages`
  ADD UNIQUE KEY `province_id` (`province_id`,`language_id`),
  ADD KEY `fk_language_id_pl` (`language_id`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`region_id`);

--
-- Indexes for table `region_images`
--
ALTER TABLE `region_images`
  ADD PRIMARY KEY (`region_id`,`img_url`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `fk_region_id_r` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`);

--
-- Constraints for table `city_ethnic_groups`
--
ALTER TABLE `city_ethnic_groups`
  ADD CONSTRAINT `fk_city_id_ceg` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`),
  ADD CONSTRAINT `fk_eg_id_ceg` FOREIGN KEY (`eg_id`) REFERENCES `ethnic_groups` (`eg_id`);

--
-- Constraints for table `city_images`
--
ALTER TABLE `city_images`
  ADD CONSTRAINT `fk_city_id_ci` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`);

--
-- Constraints for table `city_languages`
--
ALTER TABLE `city_languages`
  ADD CONSTRAINT `fk_city_id_cl` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`),
  ADD CONSTRAINT `fk_language_id_cl` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`);

--
-- Constraints for table `dialects`
--
ALTER TABLE `dialects`
  ADD CONSTRAINT `fk_language_id_d` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`);

--
-- Constraints for table `municipalities`
--
ALTER TABLE `municipalities`
  ADD CONSTRAINT `fk_province_id_m` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`) ON UPDATE CASCADE;

--
-- Constraints for table `municipality_languages`
--
ALTER TABLE `municipality_languages`
  ADD CONSTRAINT `fk_language_id_ml` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_municipality_id_ml` FOREIGN KEY (`municipality_id`) REFERENCES `municipalities` (`municipality_id`) ON UPDATE CASCADE;

--
-- Constraints for table `provinces`
--
ALTER TABLE `provinces`
  ADD CONSTRAINT `fk_region_id_p` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`);

--
-- Constraints for table `province_ethnic_group`
--
ALTER TABLE `province_ethnic_group`
  ADD CONSTRAINT `fk_eg_id_peg` FOREIGN KEY (`eg_id`) REFERENCES `ethnic_groups` (`eg_id`),
  ADD CONSTRAINT `fk_province_id_peg` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`);

--
-- Constraints for table `province_images`
--
ALTER TABLE `province_images`
  ADD CONSTRAINT `fk_province_images_pi` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`) ON UPDATE CASCADE;

--
-- Constraints for table `province_languages`
--
ALTER TABLE `province_languages`
  ADD CONSTRAINT `fk_language_id_pl` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`),
  ADD CONSTRAINT `fk_province_id_pl` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`province_id`) ON UPDATE CASCADE;

--
-- Constraints for table `region_images`
--
ALTER TABLE `region_images`
  ADD CONSTRAINT `fk_region_id_ri` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
