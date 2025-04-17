-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 13, 2025 at 10:56 AM
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
-- Database: `sc11111`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(45) NOT NULL,
  `info_1` mediumtext NOT NULL,
  `info_2` mediumtext NOT NULL,
  `info_3` mediumtext NOT NULL,
  `region_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`city_id`, `city_name`, `info_1`, `info_2`, `info_3`, `region_id`) VALUES
(1, 'Baguio City', 'Baguio City, the regional center of the Cordillera Administrative Region, was originally called Kafagway, where the Igorots and Ibalois lived before. The Spaniards attempted to seize Kafagway but they failed  multiple times. ', 'The Americans then developed Baguio as the “Summer Capital of the Philippines” in the year 1909. During this time, Kennon Road and Camp John Hay were built by the Americans and used as a rest place for the military. ', 'In 1990, Baguio was one of the places that had severe destruction from the 7.5 magnitude earthquake. The rebuilding of structures had donors from Japan, Singapore, and the United States. ', 8);

-- --------------------------------------------------------

--
-- Table structure for table `city_barangays`
--

CREATE TABLE `city_barangays` (
  `city_id` int(11) NOT NULL,
  `barangay_id` int(11) NOT NULL,
  `barangay_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city_barangays`
--

INSERT INTO `city_barangays` (`city_id`, `barangay_id`, `barangay_name`) VALUES
(1, 1, 'A. Bonifacio-Caguioa-Rimando (ABCR)'),
(1, 2, 'Abanao-Zandueta-Kayong-Chugum-Otek (AZKCO)'),
(1, 3, 'Alfonso Tabora'),
(1, 4, 'Ambiong'),
(1, 5, 'Andres Bonifacio (Lower Bokawkan)'),
(1, 6, 'Apugan-Loakan'),
(1, 7, 'Asin Road'),
(1, 8, 'Atok Trail'),
(1, 9, 'Aurora Hill Proper (Malvar-Sgt. Floresca)'),
(1, 10, 'Aurora Hill, North Central'),
(1, 11, 'Aurora Hill, South Central'),
(1, 12, 'Bagong Lipunan (Market Area)'),
(1, 13, 'Bakakeng Central'),
(1, 14, 'Bakakeng North'),
(1, 15, 'Bal-Marcoville (Marcoville)'),
(1, 16, 'Balsigan'),
(1, 17, 'Bayan Park East'),
(1, 18, 'Bayan Park Village'),
(1, 19, 'Bayan Park West (Bayan Park, Leonila Hill)'),
(1, 20, 'BGH Compound'),
(1, 21, 'Brookside'),
(1, 22, 'Brookspoint'),
(1, 23, 'Cabinet Hill-Teacher\'s Camp'),
(1, 24, 'Camdas Subdivision'),
(1, 25, 'Camp 7'),
(1, 26, 'Camp 8'),
(1, 27, 'Camp Allen'),
(1, 28, 'Campo Filipino'),
(1, 29, 'City Camp Central'),
(1, 30, 'City Camp Proper'),
(1, 31, 'Country Club Village'),
(1, 32, 'Cresencia Village'),
(1, 33, 'Dagsian, Lower'),
(1, 34, 'Dagsian, Upper'),
(1, 35, 'Dizon Subdivision'),
(1, 36, 'Dominican Hill-Mirador'),
(1, 37, 'Dontogan'),
(1, 38, 'DPS Compound'),
(1, 39, 'Engineers\' Hill'),
(1, 40, 'Fairview Village'),
(1, 41, 'Ferdinand (Happy Homes-Campo Sioco)'),
(1, 42, 'Fort del Pilar'),
(1, 43, 'Gabriela Silang'),
(1, 44, 'General Emilio F. Aguinaldo (Quirino‑Magsaysay, Lower)'),
(1, 45, 'General Luna, Upper'),
(1, 46, 'General Luna, Lower'),
(1, 47, 'Gibraltar'),
(1, 48, 'Greenwater Village'),
(1, 49, 'Guisad Central'),
(1, 50, 'Guisad Sorong'),
(1, 51, 'Happy Hollow'),
(1, 52, 'Happy Homes (Happy Homes-Lucban)'),
(1, 53, 'Harrison-Claudio Carantes'),
(1, 54, 'Hillside'),
(1, 55, 'Holy Ghost Extension'),
(1, 56, 'Holy Ghost Proper'),
(1, 57, 'Honeymoon (Honeymoon-Holy Ghost)'),
(1, 58, 'Imelda R. Marcos (La Salle)'),
(1, 59, 'Imelda Village'),
(1, 60, 'Irisan'),
(1, 61, 'Kabayanihan'),
(1, 62, 'Kagitingan'),
(1, 63, 'Kayang Extension'),
(1, 64, 'Kayang-Hilltop'),
(1, 65, 'Kias'),
(1, 66, 'Legarda-Burnham-Kisad'),
(1, 67, 'Liwanag-Loakan'),
(1, 68, 'Loakan Proper'),
(1, 69, 'Lopez Jaena'),
(1, 70, 'Lourdes Subdivision Extension'),
(1, 71, 'Lourdes Subdivision, Lower'),
(1, 72, 'Lourdes Subdivision, Proper'),
(1, 73, 'Lualhati'),
(1, 74, 'Lucnab'),
(1, 75, 'Magsaysay Private Road'),
(1, 76, 'Magsaysay, Lower'),
(1, 77, 'Magsaysay, Upper'),
(1, 78, 'Malcolm Square-Perfecto (Jose Abad Santos)'),
(1, 79, 'Manuel A. Roxas'),
(1, 80, 'Market Subdivision, Upper'),
(1, 81, 'Middle Quezon Hill Subdivision (Quezon Hill Middle)'),
(1, 82, 'Military Cut-off'),
(1, 83, 'Mines View Park'),
(1, 84, 'Modern Site, East'),
(1, 85, 'Modern Site, West'),
(1, 86, 'MRR-Queen of Peace'),
(1, 87, 'New Lucban'),
(1, 88, 'Outlook Drive'),
(1, 89, 'Pacdal'),
(1, 90, 'Padre Burgos'),
(1, 91, 'Padre Zamora'),
(1, 92, 'Palma-Urbano (Cariño-Palma)'),
(1, 93, 'Phil-Am'),
(1, 94, 'Pinget'),
(1, 95, 'Pinsao Pilot Project'),
(1, 96, 'Pinsao Proper'),
(1, 97, 'Poliwes'),
(1, 98, 'Pucsusan'),
(1, 99, 'Quezon Hill Proper'),
(1, 100, 'Quezon Hill, Upper'),
(1, 101, 'Quirino Hill, East'),
(1, 102, 'Quirino Hill, Lower'),
(1, 103, 'Quirino Hill, Middle'),
(1, 104, 'Quirino Hill, West'),
(1, 105, 'Quirino-Magsaysay, Upper (Upper QM)'),
(1, 106, 'Rizal Monument Area'),
(1, 107, 'Rock Quarry, Lower'),
(1, 108, 'Rock Quarry, Middle'),
(1, 109, 'Rock Quarry, Upper'),
(1, 110, 'Saint Joseph Village'),
(1, 111, 'Salud Mitra'),
(1, 112, 'San Antonio Village'),
(1, 113, 'San Luis Village'),
(1, 114, 'San Roque Village'),
(1, 115, 'San Vicente'),
(1, 116, 'Sanitary Camp, North'),
(1, 117, 'Sanitary Camp, South'),
(1, 118, 'Santa Escolastica'),
(1, 119, 'Santo Rosario'),
(1, 120, 'Santo Tomas Proper'),
(1, 121, 'Santo Tomas School Area'),
(1, 122, 'Scout Barrio'),
(1, 123, 'Session Road Area'),
(1, 124, 'Slaughter House Area (Santo Niño Slaughter)'),
(1, 125, 'SLU-SVP Housing Village'),
(1, 126, 'South Drive'),
(1, 127, 'Teodora Alonzo'),
(1, 128, 'Trancoville');

-- --------------------------------------------------------

--
-- Table structure for table `city_ethnic_groups`
--

CREATE TABLE `city_ethnic_groups` (
  `city_id` int(11) NOT NULL,
  `eg_id` int(11) NOT NULL,
  `percentage` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city_ethnic_groups`
--

INSERT INTO `city_ethnic_groups` (`city_id`, `eg_id`, `percentage`) VALUES
(1, 2, 1.40),
(1, 3, 6.00),
(1, 4, 0.10),
(1, 5, 0.40),
(1, 6, 3.30);

-- --------------------------------------------------------

--
-- Table structure for table `city_images`
--

CREATE TABLE `city_images` (
  `city_id` int(11) NOT NULL,
  `city_img` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city_images`
--

INSERT INTO `city_images` (`city_id`, `city_img`) VALUES
(1, 'baguio_1.png'),
(1, 'baguio_2.png'),
(1, 'baguio_3.png'),
(1, 'baguio_4.png'),
(1, 'baguio_5.png'),
(1, 'baguio_6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `city_languages`
--

CREATE TABLE `city_languages` (
  `city_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `percentage` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city_languages`
--

INSERT INTO `city_languages` (`city_id`, `language_id`, `percentage`) VALUES
(1, 0, 50.00),
(1, 3, 3.00),
(1, 11, 23.00),
(1, 17, 4.00),
(1, 18, 13.00),
(1, 19, 10.00);

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
(12, 'Tuwali'),
(13, 'Ayangan-Henanga'),
(14, 'Applai'),
(15, 'Bontok'),
(16, 'Balangao'),
(17, 'Pangasinense'),
(18, 'Others'),
(19, 'Indigenous Dialects'),
(20, 'Maeng'),
(21, 'Masadiit'),
(22, 'Adasen'),
(23, 'Inlaud');

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
(1, 1, 'Bangued', 'Bangued is the capital municipality of Abra. The name Bangued evolved from the Ilocano word, “Bangan,” meaning roadblock or blockade as the Tinguians placed roadblocks on all roads leading to the place which prevented Spanish forces in invading Bangued.'),
(2, 1, 'Boliney', 'The municipality of Boliney constitues 5.21% (216.92 square kilometers) of the total area of Abra. It is bounded to the north by the municipaliteis of Sallpadan, Bucloc, and Daguioman, to the east by Tubo, Kalinga, and the Mountain Province, ten west by Luba and Manabo.'),
(3, 1, 'Bucay', 'Bucay was established on October 29, 1846 as the provincial capital of Abra during the military government was established. Priro to Spanish colonization, however, Bucay was the footfalls of invading headhunters from the dense jungles of the Cordillera mountain range.'),
(4, 1, 'Bucloc', 'Bucloc has a land area of 63.77 square kilometers, consituting 1.53% of the total area of Abra.'),
(5, 1, 'Daguioman', 'The municipality of Daguioman constitutes 2.75% (114.37 square kilometers of Abra. Daguioman is located on the northeastern part of Abra, passing through the Bangued-Bucay route.'),
(6, 1, 'Danglas', 'Danglas constitutes 3.75% (156.02 square kilometers) of the total area of Abra. It was established as a municipal district in 192 and became a regular district in 1937.'),
(7, 1, 'Dolores', 'The municipality of Dolores was first named Bucao, named after the first chieftain who settled years before the Spanish colonization. Initially, it was part of the municipality of Tayum until they separated in 1882. It was then named to Dolores in 1885 to honor their patron saint, Neusta Senora de los Dolores. Dolores constitutes 1.14% (47.45 square kilometers) of total land area of Abra.'),
(8, 1, 'La Paz', 'The municipalityof La PAz constitues 1.23% (51.41 square kilometers) of the total land area of Abra. The area was originally inhabited by the ancestors of Bontics, Ifugaos, and the Tinguians/Itnegs.'),
(9, 1, 'Lacub', 'The municipality of Lacub constitutes 7.09% (295.30 square kilometers) of the total land area of Abra.'),
(10, 1, 'Lagangilang', 'The municipality of Langangilang is a heritage town near Bangued, constituting 2.44% (101.44 square kilometers) of the total land area of Abra.'),
(11, 1, 'Lagayan', 'Lagayan was created by a Spanish decree in 1926 to serve as a political unit for governance and service delivery. The name originated fromt “laga,” meaning to weave. Earlier, in 1846, it was a politico-military province previously part of the old Ilocos Province.'),
(12, 1, 'Langiden', 'The name Langiden originated from the word “langi,” meaning bamboo shoot. This municipality is known as the oldest inhabited localities in Abra.'),
(13, 1, 'Licuan-Baay', 'The name of Licuan-Baay originates from the name of Licuanan, a woman of extraordinary size and strength who onced rule the place.'),
(14, 1, 'Luba', 'The earliest known settlement in the municipality of Luba was in Barit. It was then a thickly forested area with tall and big trees interconnected with myriads of rattan vines called barit. The early settlers were hunters as the place was abundant with wild pigs, deer and fruit trees. The first formal collective name of the municipality of Luba was Barit-Amtuagan, presumably to include all other settlers from the east side of the kayan (river).'),
(15, 1, 'Malibcong', 'There were various ethnic groups who settled in Malibcong during the olden times. Three distinct tribes the Banao, Mabaka, and the Gubang with distinct dialects and traditions were the early settlers of Malibcong. Apparently however, the three were in the relative peace and harmony, bound irrevocably by their common heritage and geography. Bannao leaders named the place “Liwang” which means “entrance” in the local dialect. Years later however, it was renamed Malibcong.'),
(16, 1, 'Manabo', 'Manabo derives its name from the thorny herb \"Anabo\" used for rope-making, which the Spaniards inquired about during the Spanish regime. Originally inhabited by Tinguians from Mountain Province, Manabo is now politically divided into 11 barangays.'),
(17, 1, 'Peñarrubia', 'In 1903, the Americans came and subdued the Spaniards. They changed the name of the community from Alfonso XII to Peñarrubia in honor of the Spanish Governor who was said to be the harshest to the Itnegs.'),
(18, 1, 'Pilar', 'The area that would become Pilar was part of the old Ilocos Province and later Ilocos Sur when Abra was still a politico-military govenment.'),
(19, 1, 'Sallapadan', 'Sallapadan, a municipality in Abra, Philippines, was the first Tinguian settlement organized under the American regime in the highlands, named after the \"Sahipa-chan\" wild bush that was prevalent in the area. During the Spanish period, it was part of Bucay, but became a separate district under American rule and later a town in 1917.'),
(20, 1, 'San Isidro', 'The municipality of San Isidro in Abra was named in honor of Senator Quintin Paredes\' son, Isidro, who died as a hero in World War II, and established on April 10, 1950, through a bill authored by Senator Paredes'),
(21, 1, 'San Juan', 'The Spanish named the place San Juan. From 1907 to 1929, San Juan was a barrio of Dolores. By virtue of a Philippine Legislature bill sponsored by Abra\'s then-Representative Quintín Paredes and through the initiative of Dolores\'s then-Vice Mayor Manuel Magala, San Juan became a separate municipality.'),
(22, 1, 'San Quintin', 'San Quintin, a municipality in Abra province, Philippines, gained independence from Pidigan in 1884 and became a town during the American Occupation in 1901, with Don Hilario Pira appointed as its first leader. San Quintin is currently politically subdivided into six barangays: Labaan, Palang, Pantoc, Poblacion, Tangadan, and Villa Mercedes.'),
(23, 1, 'Tayum', 'Tayum was named after the indigo plant, which the Ilocanos referred to as tayum-tayum. Indigo once flourished in Tayum, and it was a source of wealth for the Ilocanos. Tayum, also known as Bukaw, was founded in 1626 by an enterprising priest named Father Juan Pareja. Tayum was formally organized as a political unit under the Spanish Regime in 1725. With the construction of the solid bricks walled church under the successive Augustinian missions, Tayum transformed from a mere visita of Bangued into an independent mission in the year 1807.'),
(24, 1, 'Tineg', 'Tineg, a municipality in Abra province, Philippines, became an independent municipality in 1958, with Sulyan Layugan and Vidal Baoalan as its first mayor and vice mayor, respectively. Prior to that, it was composed of six districts and now consists of ten barangays.'),
(25, 1, 'Tubo', 'The Municipality of Tubo was established by Republic Act No. 5161, passed by the Congress of the Philippines on June 17, 1967.'),
(26, 1, 'Villaviciosa', 'Villaviciosa, Abra, a municipality in the province of Abra, has a history marked by early settlements, American occupation, and the establishment of a regular municipality. The town was created in 1904, initially centered at the former Pueblo de Lumaba, later shifting to Barangay Calao.'),
(27, 2, 'Calanasan', 'Formerly known as Bayag, Calanasan has a land area of 1,256.15 square kilometers which constitutes 27.90% of Apayao\'s total area. Calanasan is the source of the Apayao River which empties into the West Philippines Sea, as well as being the only navigable river in Apayao.'),
(28, 2, 'Conner', 'The municipality of Conner constitues 15.73% of the total area of Apayao. The municipality was named after American Norman Conner who spearheaded the construction of the main roads within the province of Apayao early on in the American era.'),
(29, 2, 'Flora', 'Flora constitues 9.18% of Apayao\'s total area. It is 135 kilometeres away for Kabugao and 684 kilometers from Manila.'),
(30, 2, 'Kabugao', 'Kabugao is the capital municipality of the province that constitutes 20.77% (935.12 square kilometers) of Apayao\'s total area (935.12 square kilometers).'),
(31, 2, 'Luna', 'The municipality of Luna, formerly known as Macatel, was founded by Ilocano explorer, Antonino Barroga. It constitues 13.73% (606.04 square kilometers) of Apayao’s total area.'),
(32, 2, 'Pudtol', 'Pudtol was a municipality formerly part of the Luna municipality until it became its own municipal district on December 3, 1956 through executive order no. 217. Prior to its establishment as an official municipality, it served as the center of the Spanish mission in the entire province of Apayao – thus, being once the center of catholicism of the province. It constitutes 9.32% (411.37 square kilometers) of the total area of Apayao. Currently, Pudtol is a famous tourist destination for trekking, swimming, climbing and hiking with its rocky mountains, forest, and rivers.'),
(33, 2, 'Santa Marcela', 'Santa Marcela became its own municipal district after several barrios from Luna and Flora constituted to become its own; and was officially recognized as a municipality on June 17, 1967. It constitutes 4.45% (196.32 square kilometers) of the total area of Apayao.'),
(34, 3, 'Atok', 'Atok is a medium-sized municipality with a total land area of 10,860 hectares occupied by 11,000 persons, according to the 1960 census. It is surrounded by Kibungan and Bakun to the north, Tublay to the south, Kapangan to the west, and Kabayan to the east.'),
(35, 3, 'Bakun', 'Bakun is a rugged, mountainous region located at the north-eastern part of the Province of Benguet. She is bounded on the south by the municipality of Buguias, on the northeast by the municipality of Mankayan and on the west by the province of Ilocos Sur.'),
(36, 3, 'Bokod', 'Bokod, a municipality in Benguet, covers a total land area of 39,423 hectares and is the second largest town in the province. According to the Provincial Health Office, its estimated population is 11,900. The primary sources of income for the municipality are lumbering, fruit and vegetable growing, and cattle raising. The average annual income is Php 168,501.64, and it is classified as a third-class municipality.'),
(37, 3, 'Buguias', 'Buguias is known for its captivating natural beauty, featuring white, sparkling waterfalls, cascading rivers, fresh and hot springs, rolling hills, and vast fertile valleys. Located to the north of Bauko, south of Atok, and west of Kapangan, it covers a land area of 16,260 hectares and had a population of 8,658 based on the 1960 census.'),
(38, 3, 'Itogon', 'Itogon, with its abundant resources and forward-thinking population, has achieved an economic prominence comparable to other prosperous towns not only in Benguet but also in other regions of the country. Itogon is bordered by Baguio and La Trinidad to the north, Pangasinan to the south, Tuba to the west, and Bokod to the east.'),
(39, 3, 'Kabayan', 'The name Kabayan is closely associated with Henry A. Kamora, the late esteemed elder of the community. Kamora played a key role in the completion of Kabayan\'s road, market building, and hospital. The municipality\'s primary sources of income include rice, coffee, vegetables, and lumber products.'),
(40, 3, 'Kapangan', 'Kapangan covers a land area of 164.39 square kilometers (63.47 square miles), making up 5.94% of Benguet\'s total area. According to the 2020 Census, its population was 19,297, which accounts for 4.19% of Benguet\'s total population and 1.07% of the overall population of the Cordillera Administrative Region.'),
(41, 3, 'Kibungan', 'The Municipality of Kibungan is bordered to the north by Bakun, to the east by Buguias, to the south by Atok and Kapangan, and to the west by the Province of Ilocos Sur. The economic development of Kibungan is currently stagnant. The primary products of the municipality include rice, vegetables, and camote. This slow growth may be attributed to the insufficient road infrastructure.'),
(42, 3, 'La Trinidad', 'La Trinidad is commonly referred to as the \"Salad Bowl of the Philippines.\" However, this may no longer be an appropriate name in the near future, as the valley, once abundant with vegetables, is gradually being overtaken by urbanization. This change is expected, given that La Trinidad is the capital town, with hopes of it eventually becoming the second city of Benguet.'),
(43, 3, 'Mankayan', 'The abundant copper mines crisscrossing the land in the prosperous town of Mankayan contribute to its status as one of the richest towns in the Philippines today. Despite being relatively small in size, with a total land area of 10,370 hectares and a sparse population of 13,812 according to the 1960 census, Mankayan is rich in human resources.'),
(44, 3, 'Sablan', 'Sablan is known for producing the juiciest Hawaiian pineapples and the most delicious bananas in Benguet. A significant portion of Sablan\'s fertile 8,640 hectares is dedicated to cultivating these profitable crops. The remaining land is used for rice, coffee, and various fruit trees.'),
(45, 3, 'Tuba', 'Tuba is the third largest town in Benguet, covering a total land area of 34,710 hectares and an estimated population of 12,400. It borders Naguilian municipality to the north, Sablan municipality and the City of Baguio to the east, the province of Pangasinan to the south, and the province of La Union to the west.'),
(46, 3, 'Tublay', 'Tublay Municipality is located thirteen kilometers north of Baguio City. It is bordered to the north by Atok and Kapangan, to the east by Bokod, to the south by Itogon and La Trinidad, and to the west by Kapangan and Sablan municipalities.'),
(47, 4, 'Aguinaldo', 'The municipality was formerly part of Mayoyao, known as Bunhian. It has 16 barangays and was named after Emilio Aguinaldo, the first President of the Philippines.'),
(48, 4, 'Alfonso Lista', 'The municipality was previously called Potia. The Ifugao natives originally named it Mun-uupag, meaning \"bubbles of foam.\"'),
(49, 4, 'Asipulo', 'Asipulo was once part of Kiangan, it has 10 barangays, some with puroks and sitios.'),
(50, 4, 'Banaue', 'Banaue, also spelled \"Banawe,\" is famous for the Batad and Bangaan Rice Terraces, a UNESCO World Heritage Site. It has 18 barangays.'),
(51, 4, 'Hingyon', 'Named after the Ifugao word Hingngiyon, meaning \"a diversion from a route.\" It has 12 barangays.'),
(52, 4, 'Hungduan', 'The least populated town in Ifugao, covering 260.30 square kilometers or 9.94% of the province’s land area.'),
(53, 4, 'Kiangan', 'The oldest town in Ifugao, named after Kiyyangan, an ancient village near the Ibulao River.'),
(54, 4, 'Lamut', 'Known as the \"Gateway to Ifugao,\" Lamut has 4 barangays and a population of 26,235 people.'),
(55, 4, 'Lagawe', 'Lagawe is the Capital of Ifugao, and it consists of 18.876 people and it is 316 km away from Manila.'),
(56, 4, 'Mayoyao', 'This municipality is home to 15,621 people (Census 2020). It has 27 barangays, some with puroks and sitios.'),
(57, 4, 'Tinoc', 'Tinoc has a population of 18,475 (Census 2020) and 12 barangays, each with puroks and sitios.'),
(58, 5, 'Balbalan', 'This town\'s name originates from an ancient tradition. It is said that war parties from northern Kalinga, possibly from the ancient settlement of Salegseg, would gather by a creek to plan their attacks or regroup after raiding a village. As they routinely washed (balbal in the local dialect) their blood-stained bodies and weapons in the creek, the area and its surroundings eventually became known as Balbalan.'),
(59, 5, 'Lubuagan', 'Lubuagan, officially known as the Municipality of Lubuagan, is a 4th-class municipality in Kalinga, Philippines. As per the 2020 census, it has a population of 9,323. Located 460 kilometers north of Manila, it sits approximately 50 kilometers from Tabuk.'),
(60, 5, 'Pasil', 'Pasil is a municipality in the landlocked province of Kalinga. It has a land area of 189.00 square kilometers, which accounts for 5.76% of Kalinga\'s total area. According to the 2020 Census, its population is 10,577.'),
(61, 5, 'Pinukpuk', 'Pinukpuk, officially the Municipality of Pinukpuk, is a 1st-class municipality in Kalinga, Philippines. Based on the 2020 census, it has a population of 34,275. Situated in the northern part of Kalinga, it serves as a gateway to Tuao in Cagayan and Conner in Apayao.'),
(62, 5, 'Rizal', 'Rizal, formerly known as Liwan, is a 4th-class municipality in the province of Kalinga, Philippines. According to the 2020 census, it has a population of 19,554. The town is renowned for its Pleistocene sites, which contain rhino bones, tools, deer bones, turtle remains, and stegodon fossils.'),
(63, 5, 'Tabuk City', 'Tabuk, officially known as the City of Tabuk (Ilocano: Siudad ti Tabuk; Tagalog: Lungsod ng Tabuk), is a 5th-class component city and the capital of Kalinga province, Philippines.'),
(64, 5, 'Tanudan', 'Tanudan, officially the Municipality of Tanudan, is a 4th-class municipality in Kalinga, Philippines. According to the 2020 census, it has a population of 8,746. The town is famous for Mount Binaratan, which is steeped in legend. It is said that the supreme god of the Kalinga people went to the mountain to hunt, but the noise made by the birds irritated him. He commanded the birds to be quiet, and when he finished hunting, he forgot to lift the order. As a result, the mountain remains silent to this day.'),
(65, 5, 'Tinglayan', 'Tinglayan, officially the Municipality of Tinglayan, is a 4th-class municipality in Kalinga, Philippines. As of the 2020 census, it has a population of 13,148.'),
(66, 6, 'Barlig', 'Barlig was earlier called as Eastern Bontoc when it was still a subprovince of Bontoc, the capital of Mt. Province. This was later separated and had its own government and officially named Barlig. In local term, Barlig is called “Fiallig”, from the root and original name “Fialikia”.'),
(67, 6, 'Bauko', 'Bauko is the largest municipality in Mountain Province, constituting 7.13% of Mountain Province\'s total area.'),
(68, 6, 'Besao', 'Besao is known for the Agawa people\'s Agricultural Stone Calendar of Gueday. The stone calendar is one of the most enigmatic artifacts in the Cordillera mountains. It is a testimony to the accurate scientific outlook of the ancient Agawa people in the cycle of weathers, agriculture, and heavenly bodies.'),
(69, 6, 'Bontoc', 'Bontoc is the capital municipality of the province of Benguet.'),
(70, 6, 'Natonin', 'Natonin is bordered by Kalinga to the north, Paracelis to the east, Barlig to the west, and Ifugao to the south. The barangays are mostly carved at the foot of the mountains along which the now National Highway was carved, with the exception of Barangay Maducayan and some far-flung sitios of Barangay Banawel.'),
(71, 6, 'Paracelis', 'Paracelis was first settled by the Ga\'dang ethnic group, who were migrants from Cagayan Valley. Through the years, Paracelis has become the main entry point to the rest of Mountain Province. Paracelis became a regular town named Paracales with the enactment of Republic Act 3488 on June 16, 1962. The town was renamed Paracelis on June 18, 1966 under Republic Act 4738.'),
(72, 6, 'Sabangan', 'Sabangan was among several municipalities in Mountain Province along with Bauko, Bontoc, Sadanga, Sagada, and parts of Barlig that would have been submerged by the Chico River Dam Project during the Marcos dictatorship.'),
(73, 6, 'Sadanga', 'The municipality is the only place in the world where the Sinadanga language is used. The language is highly significant in the Sinadanga culture, making its conservation of utmost importance to the survival of the Sinadanga people\'s traditions.'),
(74, 6, 'Sagada', 'Sagada is famous for its hanging coffins. This is a traditional way of burying people that is still utilized. The elderly carve their own coffins out of hollowed logs. Moreover, due to the lack of transportation and willing guides, few conquistadors set foot in Sagada during the Spanish Era, and a Spanish Mission was not founded until 1882. As a result, it is one of a few places in the Philippines that has preserved its indigenous culture with little Spanish influence.'),
(75, 6, 'Tadian', 'Tadian was formerly known as Kayan. In 1957, the seat of government was transferred to the barrio of Tadian. Two years later the town was renamed to Tadian.');

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
  `percentage` decimal(5,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `province_ethnic_group`
--

INSERT INTO `province_ethnic_group` (`province_id`, `eg_id`, `percentage`) VALUES
(3, 6, 12.000),
(3, 2, 7.300),
(3, 3, 1.700),
(3, 5, 0.400),
(1, 3, 8.100),
(1, 2, 0.010),
(1, 6, 0.030),
(1, 5, 0.020),
(1, 4, 5.200),
(2, 3, 2.700),
(2, 1, 1.600),
(2, 5, 0.300),
(2, 6, 0.300),
(2, 4, 0.200),
(2, 2, 0.100),
(4, 3, 1.500),
(4, 6, 0.200),
(4, 5, 0.030),
(4, 2, 0.030),
(4, 4, 0.020),
(5, 5, 8.600),
(5, 3, 1.800),
(5, 6, 0.400),
(5, 2, 0.040),
(5, 4, 0.020),
(6, 3, 0.400),
(6, 6, 2.900),
(6, 5, 0.200),
(6, 2, 0.100),
(6, 4, 0.004);

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
(1, 0, 75.50),
(1, 20, 5.20),
(1, 21, 3.60),
(1, 22, 3.10),
(1, 23, 2.30),
(2, 0, 61.20),
(2, 4, 27.50),
(2, 6, 2.40),
(2, 9, 3.70),
(2, 11, 1.20),
(3, 0, 33.90),
(3, 3, 16.50),
(3, 7, 2.90),
(3, 8, 36.30),
(3, 11, 7.30),
(4, 0, 19.60),
(4, 1, 27.90),
(4, 7, 11.20),
(4, 12, 32.30),
(4, 13, 4.40),
(5, 0, 44.00),
(5, 2, 0.32),
(5, 6, 52.40),
(5, 10, 0.30),
(5, 11, 1.60),
(6, 0, 13.30),
(6, 8, 31.30),
(6, 14, 17.90),
(6, 15, 14.60),
(6, 16, 6.70);

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
-- Indexes for table `city_barangays`
--
ALTER TABLE `city_barangays`
  ADD PRIMARY KEY (`barangay_id`),
  ADD KEY `fk_city_id_cb` (`city_id`);

--
-- Indexes for table `city_ethnic_groups`
--
ALTER TABLE `city_ethnic_groups`
  ADD UNIQUE KEY `city_id` (`city_id`,`eg_id`),
  ADD KEY `fk_city_id_ceg` (`city_id`),
  ADD KEY `fk_eg_id_ceg` (`eg_id`);

--
-- Indexes for table `city_images`
--
ALTER TABLE `city_images`
  ADD UNIQUE KEY `city_id` (`city_id`,`city_img`),
  ADD KEY `fk_city_id_ci` (`city_id`);

--
-- Indexes for table `city_languages`
--
ALTER TABLE `city_languages`
  ADD UNIQUE KEY `city_id` (`city_id`,`language_id`),
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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city_barangays`
--
ALTER TABLE `city_barangays`
  MODIFY `barangay_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `fk_region_id_r` FOREIGN KEY (`region_id`) REFERENCES `region` (`region_id`);

--
-- Constraints for table `city_barangays`
--
ALTER TABLE `city_barangays`
  ADD CONSTRAINT `fk_city_id_cb` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`);

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
