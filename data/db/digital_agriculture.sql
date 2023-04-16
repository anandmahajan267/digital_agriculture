-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2023 at 05:49 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digital_agriculture`
--

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_on` datetime NOT NULL,
  `updated_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`id`, `name`, `description`, `user_id`, `created_on`, `updated_on`) VALUES
(1, 'Action Institute', 'Action Institute', 1, '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(2, 'Helping Hands', 'Helping Hands', 1, '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(3, 'Angel Reach', 'Angel Reach', 1, '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(4, 'Impact Hub', 'Impact Hub', 1, '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(5, 'Syngenta AG', 'Syngenta helps millions of farmers around the world to grow safe and nutritious food, while taking care of the planet.', 3, '2023-04-16 15:05:30', '2023-04-16 15:05:30');

-- --------------------------------------------------------

--
-- Table structure for table `organizations_properties`
--

CREATE TABLE `organizations_properties` (
  `organization_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `organizations_properties`
--

INSERT INTO `organizations_properties` (`organization_id`, `property_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(5, 1),
(5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `region_field_id` int(11) NOT NULL,
  `created_on` datetime NOT NULL,
  `updated_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`id`, `name`, `description`, `region_field_id`, `created_on`, `updated_on`) VALUES
(1, 'Cotton Property 1', 'Cotton Property 1', 3, '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(2, 'Cotton Property 2', 'Cotton Property 2', 4, '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(3, 'Wheat and Sugarcane Property', 'Wheat and Sugarcane Property', 5, '2023-04-16 15:01:07', '2023-04-16 15:01:07');

-- --------------------------------------------------------

--
-- Table structure for table `region_field`
--

CREATE TABLE `region_field` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `row_type` enum('REGION','FIELD') NOT NULL DEFAULT 'REGION',
  `created_on` datetime NOT NULL,
  `updated_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `region_field`
--

INSERT INTO `region_field` (`id`, `name`, `description`, `parent_id`, `row_type`, `created_on`, `updated_on`) VALUES
(1, 'Cotton Master Region', 'Cotton Master Region', 0, 'REGION', '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(2, 'Cotton sub Region', 'Cotton sub Region', 1, 'REGION', '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(3, 'Cotton Field 1', 'Cotton Field 1', 2, 'FIELD', '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(4, 'Cotton Field 2', 'Cotton Field 2', 2, 'FIELD', '2023-04-16 12:20:11', '2023-04-16 12:20:11'),
(5, 'Wheat and Sugarcane Region', 'Wheat and Sugarcane Region', 0, 'REGION', '2023-04-16 14:59:39', '2023-04-16 14:59:39');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221130180559-create-users-table.js'),
('20221130180610-create-organization-table.js'),
('20221130180611-create-region-field-table.js'),
('20221130180612-create-property-table.js'),
('20221130180613-create-organization-property-table.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `display_name`, `email`, `password`) VALUES
(1, 'Anand Mahajan', 'anandmahajan267@gmail.com', 'test123'),
(2, 'Anand test Account', 'anand.testaccount@gmail.com', 'test123'),
(3, 'Anand Mahajan', 'anand@test.com', 'test123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `organizations_properties`
--
ALTER TABLE `organizations_properties`
  ADD PRIMARY KEY (`organization_id`,`property_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`id`),
  ADD KEY `region_field_id` (`region_field_id`);

--
-- Indexes for table `region_field`
--
ALTER TABLE `region_field`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `region_field`
--
ALTER TABLE `region_field`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `organization`
--
ALTER TABLE `organization`
  ADD CONSTRAINT `organization_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `organizations_properties`
--
ALTER TABLE `organizations_properties`
  ADD CONSTRAINT `organizations_properties_ibfk_1` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `organizations_properties_ibfk_2` FOREIGN KEY (`property_id`) REFERENCES `property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`region_field_id`) REFERENCES `region_field` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
