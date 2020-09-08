-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2020 at 12:39 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `atlantix_solutions`
--

-- --------------------------------------------------------

--
-- Table structure for table `employeeservice_tbl`
--

CREATE TABLE `employeeservice_tbl` (
  `es_id` int(11) NOT NULL,
  `e_mobile` varchar(10) NOT NULL,
  `s_id` int(11) NOT NULL,
  `es_status` tinyint(1) DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employeeservice_tbl`
--

INSERT INTO `employeeservice_tbl` (`es_id`, `e_mobile`, `s_id`, `es_status`) VALUES
(1, '7575232099', 4, 0),
(2, '7575232099', 3, 0),
(3, '8585606060', 5, 0),
(4, '8585606060', 6, 0),
(5, '7575232132', 6, 0),
(6, '8128410106', 1, 0),
(7, '8128410106', 11, 0),
(8, '8128410106', 12, 0),
(11, '7575232132', 2, 0),
(12, '9426045045', 7, 0),
(13, '9426045045', 8, 0),
(14, '9426045045', 9, 0),
(15, '9426045045', 10, 0);

-- --------------------------------------------------------

--
-- Table structure for table `employee_tbl`
--

CREATE TABLE `employee_tbl` (
  `e_mobile` varchar(10) NOT NULL,
  `aadharcard_no` varchar(12) NOT NULL,
  `e_name` varchar(20) NOT NULL,
  `e_image` varchar(4000) NOT NULL,
  `e_address` varchar(250) NOT NULL,
  `e_pincode` int(6) NOT NULL,
  `e_workingstatus` tinyint(1) NOT NULL COMMENT '0 for unavailable and 1 for available',
  `e_addedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `e_updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `e_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_tbl`
--

INSERT INTO `employee_tbl` (`e_mobile`, `aadharcard_no`, `e_name`, `e_image`, `e_address`, `e_pincode`, `e_workingstatus`, `e_addedAt`, `e_updatedAt`, `e_status`) VALUES
('7575232099', '234523452345', 'Ramesh Patel', 'emp_image.png', 'Suman Flat, near reliance circle, prahalad nagar, ahmedabad', 380002, 0, '2020-08-01 17:30:55', '2020-08-01 17:37:39', 0),
('7575232132', '234523452345', 'Kanak Vyas', 'emp_image.png', 'Poonam Flat, near visat circle, sarkhej, ahmedabad', 380008, 0, '2020-07-29 16:30:11', '2020-07-29 16:30:11', 0),
('8128410106', '820012001818', 'Harsh Shah', 'emp_image.png', 'Pooja Flat, near Chandra nagar, paldi, ahmedabad', 380007, 1, '2020-08-16 16:30:11', '2020-08-16 16:30:11', 0),
('8585606060', '123412341234', 'Ram Mehta', 'emp_image.png', 'Parshwa Flat, near shantivan paldi, ahmedabad', 380007, 1, '2020-07-29 16:30:11', '2020-07-29 16:30:11', 0),
('9426045045', '982422001350', 'Pratik Shah', 'emp_image.png', 'Sumeru flat, opp. Krishna hotel, parasnagar, ahmedabad', 380012, 1, '2020-08-16 16:30:11', '2020-08-16 16:30:11', 0);

-- --------------------------------------------------------

--
-- Table structure for table `feedback_tbl`
--

CREATE TABLE `feedback_tbl` (
  `f_id` int(11) NOT NULL,
  `f_experience` varchar(30) NOT NULL,
  `f_comment` varchar(200) NOT NULL,
  `p_mobile` varchar(10) NOT NULL,
  `f_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback_tbl`
--

INSERT INTO `feedback_tbl` (`f_id`, `f_experience`, `f_comment`, `p_mobile`, `f_status`) VALUES
(1, 'Good', 'Supportive worker. very helpful. Nice work..', '9612345678', 1),
(2, 'Very Good', 'Supportive worker. very helpful. Nice work..', '8200023993', 0),
(3, 'Good', 'Supportive worker. very helpful. Nice work..', '9825944949', 0);

-- --------------------------------------------------------

--
-- Table structure for table `image_tbl`
--

CREATE TABLE `image_tbl` (
  `i_id` int(11) NOT NULL,
  `i_name` varchar(4000) NOT NULL,
  `s_id` int(11) NOT NULL,
  `i_addedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `i_updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `i_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image_tbl`
--

INSERT INTO `image_tbl` (`i_id`, `i_name`, `s_id`, `i_addedAt`, `i_updatedAt`, `i_status`) VALUES
(3, 'S1_1.jpg', 1, '2020-08-16 15:10:30', '2020-08-16 15:45:24', 0),
(4, 'S1_3.jpg', 1, '2020-08-06 15:10:30', '2020-08-08 15:45:24', 0),
(5, 'S1_2.jpg', 1, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(6, 'S1_4.jpg', 1, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(7, 'S1_5.jpg', 1, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(8, 'S2_1.jpg', 2, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(9, 'S2_2.jpg', 2, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(10, 'S2_3.jpg', 2, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(11, 'S2_4.jpg', 2, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(13, 'S3_1.jpg', 3, '2020-08-06 15:10:30', '2020-08-06 15:10:30', 0),
(14, 'S3_2.jpg', 3, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(15, 'S3_3.jpg', 3, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(16, 'S3_4.jpg', 3, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(17, 'S3_5.jpg', 3, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(18, 'S4_1.jpg', 4, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(19, 'S4_2.jpg', 4, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(20, 'S4_3.jpg', 4, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(21, 'S4_4.jpg', 4, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(22, 'S4_5.jpg', 4, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(23, 'S5_1.jpg', 5, '2020-08-06 15:13:03', '2020-08-06 15:13:03', 0),
(24, 'S5_2.jpg', 5, '2020-08-06 15:13:39', '2020-08-06 15:13:39', 0),
(25, 'S5_3.jpg', 5, '2020-08-06 15:13:39', '2020-08-06 15:13:39', 0),
(26, 'S5_4.jpg', 5, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(27, 'S5_5.jpg', 5, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(28, 'S6_1.jpg', 6, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(29, 'S6_2.jpg', 6, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(30, 'S6_3.jpg', 6, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(31, 'S6_4.jpg', 6, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(33, 'S7_1.jpg', 7, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(34, 'S7_2.jpg', 7, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(35, 'S7_3.jpg', 7, '2020-08-06 15:16:09', '2020-08-06 15:16:09', 0),
(36, 'S7_4.jpg', 7, '2020-08-06 15:16:42', '2020-08-06 15:16:42', 0),
(37, 'S7_5.jpg', 7, '2020-08-06 15:16:42', '2020-08-06 15:16:42', 0),
(38, 'S8_1.jpg', 8, '2020-08-06 15:17:58', '2020-08-06 15:17:58', 0),
(39, 'S8_2.jpg', 8, '2020-08-06 15:17:58', '2020-08-06 15:17:58', 0),
(40, 'S8_3.jpg', 8, '2020-08-06 15:17:58', '2020-08-06 15:17:58', 0),
(41, 'S8_4.jpg', 8, '2020-08-06 15:17:58', '2020-08-06 15:17:58', 0),
(42, 'S8_5.jpg', 8, '2020-08-06 15:17:58', '2020-08-06 15:17:58', 0),
(43, 'S9_1.jpg', 9, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(44, 'S9_2.jpg', 9, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(45, 'S9_3.jpg', 9, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(46, 'S9_4.jpg', 9, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(47, 'S9_5.jpg', 9, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(48, 'S10_1.jpg', 10, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(49, 'S10_2.jpg', 10, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(50, 'S10_3.jpg', 10, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(51, 'S10_4.jpg', 10, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(52, 'S11_1.jpg', 11, '2020-08-06 15:37:40', '2020-08-06 15:37:40', 0),
(53, 'S11_2.jpg', 11, '2020-08-06 15:39:23', '2020-08-06 15:39:23', 0),
(54, 'S11_3.jpg', 11, '2020-08-06 15:39:23', '2020-08-06 15:39:23', 0),
(55, 'S11_4.jpg', 11, '2020-08-06 15:39:23', '2020-08-06 15:39:23', 0),
(56, 'S11_5.jpg', 11, '2020-08-06 15:39:23', '2020-08-06 15:39:23', 0),
(57, 'S12_1.jpg', 12, '2020-08-06 15:39:23', '2020-08-06 15:39:23', 0),
(58, 'S12_2.jpg', 12, '2020-08-06 15:39:49', '2020-08-06 15:39:49', 0),
(59, 'S12_3.jpg', 12, '2020-08-06 15:39:49', '2020-08-06 15:39:49', 0),
(60, 'S12_4.jpg', 12, '2020-08-06 15:40:20', '2020-08-06 15:40:20', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ordermaintain_tbl`
--

CREATE TABLE `ordermaintain_tbl` (
  `om_id` int(11) NOT NULL,
  `pp_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `e_mobile` varchar(10) NOT NULL,
  `om_status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0 for complete, 1 for pending and 2 for failed'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordermaintain_tbl`
--

INSERT INTO `ordermaintain_tbl` (`om_id`, `pp_id`, `s_id`, `e_mobile`, `om_status`) VALUES
(1, 1, 1, '8128410106', 0),
(2, 1, 4, '7575232099', 1),
(3, 2, 7, '9426045045', 1),
(4, 3, 3, '7575232099', 1),
(5, 3, 10, '9426045045', 0),
(6, 4, 6, '8585606060', 1),
(7, 4, 5, '8585606060', 0),
(8, 4, 11, '8128410106', 0);

-- --------------------------------------------------------

--
-- Table structure for table `packagepurchase_tbl`
--

CREATE TABLE `packagepurchase_tbl` (
  `pp_id` int(11) NOT NULL,
  `p_mobile` varchar(10) NOT NULL,
  `pp_date` date NOT NULL,
  `pp_amount` double NOT NULL,
  `pk_id` int(11) NOT NULL,
  `pp_endDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `packagepurchase_tbl`
--

INSERT INTO `packagepurchase_tbl` (`pp_id`, `p_mobile`, `pp_date`, `pp_amount`, `pk_id`, `pp_endDate`) VALUES
(1, '9612345678', '2020-08-01', 1000, 1, '2020-08-31'),
(2, '8000161200', '2020-08-01', 1000, 1, '2020-08-30'),
(3, '8000161299', '2020-08-01', 450, 2, '2020-08-31'),
(4, '8200023993', '2020-08-01', 650, 3, '2020-08-31'),
(5, '9825944949', '2020-08-16', 850, 4, '2020-09-15');

-- --------------------------------------------------------

--
-- Table structure for table `packageservice_tbl`
--

CREATE TABLE `packageservice_tbl` (
  `ps_id` int(11) NOT NULL,
  `pk_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `ps_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `packageservice_tbl`
--

INSERT INTO `packageservice_tbl` (`ps_id`, `pk_id`, `s_id`, `ps_status`) VALUES
(1, 1, 1, 0),
(2, 1, 2, 0),
(3, 1, 3, 0),
(4, 1, 4, 0),
(5, 1, 5, 0),
(6, 1, 6, 0),
(7, 1, 7, 0),
(8, 1, 8, 0),
(9, 1, 9, 0),
(10, 1, 10, 0),
(11, 1, 11, 0),
(12, 1, 12, 0),
(13, 2, 1, 0),
(14, 2, 2, 0),
(15, 2, 5, 0),
(16, 2, 11, 0),
(17, 2, 12, 0),
(18, 3, 3, 0),
(19, 3, 4, 0),
(20, 3, 6, 0),
(21, 3, 7, 0),
(22, 3, 11, 0),
(23, 3, 12, 0),
(24, 4, 4, 0),
(25, 4, 6, 0),
(26, 4, 7, 0),
(27, 4, 8, 0),
(28, 4, 9, 0),
(29, 4, 11, 0),
(30, 4, 12, 0);

-- --------------------------------------------------------

--
-- Table structure for table `package_tbl`
--

CREATE TABLE `package_tbl` (
  `pk_id` int(11) NOT NULL,
  `pk_name` varchar(50) NOT NULL,
  `pk_description` varchar(400) NOT NULL,
  `pk_price` double NOT NULL,
  `pk_discount` int(11) NOT NULL COMMENT 'In %(percentage)',
  `pk_includedser` int(11) NOT NULL,
  `pk_duration` int(11) NOT NULL COMMENT 'In month',
  `pk_addedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `pk_updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `pk_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `package_tbl`
--

INSERT INTO `package_tbl` (`pk_id`, `pk_name`, `pk_description`, `pk_price`, `pk_discount`, `pk_includedser`, `pk_duration`, `pk_addedAt`, `pk_updatedAt`, `pk_status`) VALUES
(1, 'My home care package', 'Package includes total 12 different services. Some of them are free of cost and some of are at discount price. you can select any service and you get free upto 200 rs for 3 services\r\na month including visiting charge.', 1000, 55, 12, 1, '2020-07-29 16:39:48', '2020-07-29 16:39:48', 0),
(2, 'Silver package', 'Package includes total 5 different services. Some of them are free of cost and some of are at discount price. you can select any service and you get free upto 100 rs for 2 services\r\na month including visiting charge.', 450, 25, 5, 1, '2020-08-06 11:34:09', '2020-08-06 11:34:09', 0),
(3, 'Gold package', 'Package includes total 6 different services. Some of them are free of cost and some of are at discount price. you can select any service and you get free upto 100 rs for 3 services\r\na month including visiting charge.', 650, 25, 6, 1, '2020-08-06 11:34:09', '2020-08-06 11:34:09', 0),
(4, 'Platinum package', 'Package includes total 7 different services. Some of them are free of cost and some of are at discount price. you can select any service and you get free upto 100 rs for 4 services\r\na month including visiting charge.', 850, 25, 7, 1, '2020-08-06 11:34:09', '2020-08-06 11:34:09', 0);

-- --------------------------------------------------------

--
-- Table structure for table `persondetail_tbl`
--

CREATE TABLE `persondetail_tbl` (
  `p_mobile` varchar(10) NOT NULL,
  `p_name` varchar(20) NOT NULL,
  `p_password` varchar(16) NOT NULL,
  `p_address` varchar(250) NOT NULL,
  `p_pincode` int(6) NOT NULL,
  `p_id` int(11) NOT NULL,
  `p_addedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `p_updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `p_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block',
  `p_loginattempts` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `persondetail_tbl`
--

INSERT INTO `persondetail_tbl` (`p_mobile`, `p_name`, `p_password`, `p_address`, `p_pincode`, `p_id`, `p_addedAt`, `p_updatedAt`, `p_status`, `p_loginattempts`) VALUES
('8000161200', 'Kamlesh Shah', 'Kamlesh@1234', 'JJ Tower, Opp.Ankur school, paldi. ', 380012, 2, '2020-08-04 15:26:36', '2020-08-05 20:46:41', 1, 1),
('8000161298', 'Meet J Shah', 'Meet@12345', 'JJ Tower, Opp.Ankur school, paldi, ahmedabad. ', 380006, 1, '2020-07-29 15:19:37', '2020-08-01 19:52:54', 0, 0),
('8000161299', 'Kamlesh Vora', 'Kamlesh@12345', 'JJ Tower, Opp.Ankur school, paldi, ahmedabad. ', 380006, 2, '2020-08-04 15:23:55', '2020-08-04 15:50:36', 0, 1),
('8200023993', 'Shrey Patel', 'Shrey@12345', 'Drive in road', 380032, 2, '2020-08-01 19:45:04', '2020-08-01 19:45:04', 0, 0),
('9612345678', 'Patel Priyanshi', 'Priyanshi@1234', '199/Patelvas vasnagam, Vasna', 380007, 2, '2020-07-29 15:22:37', '2020-07-29 15:22:37', 0, 0),
('9825944949', 'Kiran Patel', 'Kiran@12345', '2, sursangam society, near PT college, paldi, ahmedabad', 380007, 2, '2020-08-16 15:22:37', '2020-08-16 15:22:37', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `person_tbl`
--

CREATE TABLE `person_tbl` (
  `p_id` int(11) NOT NULL,
  `p_type` varchar(10) NOT NULL,
  `p_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `person_tbl`
--

INSERT INTO `person_tbl` (`p_id`, `p_type`, `p_status`) VALUES
(1, 'Admin', 0),
(2, 'User', 0);

-- --------------------------------------------------------

--
-- Table structure for table `servicecategory_tbl`
--

CREATE TABLE `servicecategory_tbl` (
  `sc_id` int(11) NOT NULL,
  `sc_name` varchar(30) NOT NULL,
  `sc_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `servicecategory_tbl`
--

INSERT INTO `servicecategory_tbl` (`sc_id`, `sc_name`, `sc_status`) VALUES
(1, 'Free Delivery Service', 0),
(2, 'Essential service', 0),
(3, 'Expertise Advice service', 0);

-- --------------------------------------------------------

--
-- Table structure for table `service_tbl`
--

CREATE TABLE `service_tbl` (
  `s_id` int(11) NOT NULL,
  `s_name` varchar(50) NOT NULL,
  `s_description` varchar(500) NOT NULL,
  `sc_id` int(11) NOT NULL,
  `s_addedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `s_updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `s_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 for unblock and 1 for block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `service_tbl`
--

INSERT INTO `service_tbl` (`s_id`, `s_name`, `s_description`, `sc_id`, `s_addedAt`, `s_updatedAt`, `s_status`) VALUES
(1, 'Plumber', 'Interprets blueprints and building specifications to map layout for pipes, drainage systems, and other plumbing materials. Installs pipes and fixtures, such as sinks and toilets, for water, gas, steam, air, or other liquids. Installs supports for pipes, equipment, and fixtures prior to installation.', 2, '2020-07-29 16:02:54', '2020-07-29 16:02:54', 0),
(2, 'Electrician', 'Service technicians, also referred to as field service technicians, are responsible for providing different services, depending on their area of expertise, and diagnosing problems and making repairs. They will often go to their client\'s business or home to install something or make repairs.', 2, '2020-07-29 16:06:08', '2020-07-29 16:06:08', 0),
(3, 'Appliance repair', 'Providing rough estimates to customers on how much it would cost to repair damaged or malfunctioning appliances. Repairing or replacing defective or damaged appliance components upon approval from customers. Advising customers on how to use appliances correctly.\r\nInstalling various large appliances for customers, such as washers, wall ovens, and stoves.', 2, '2020-07-29 16:06:08', '2020-07-29 16:06:08', 0),
(4, 'Ac service ', 'Some typical job duties of air conditioning technicians include reviewing blueprints, installing air conditioning systems, testing systems for proper functioning, performing emergency repairs, maintaining tools, ordering supplies, and making routine adjustments to maximize operational efficiency. They may also record data when inspecting systems, such as temperature of equipment, fuel consumption.', 2, '2020-07-29 16:07:13', '2020-07-29 16:07:13', 0),
(5, 'Carpenter', 'Installs foundations, walls, floors, ceilings, and roofs using materials such as: wood, steel, metal, concrete, plastics, and composites of multiple materials. ... Assembles and fastens materials to make frameworks or props, using hand tools and wood screws, nails, dowel pins, or glue.', 2, '2020-07-29 16:08:29', '2020-07-29 16:08:29', 0),
(6, 'Home cleaning services', 'Dusting, sweeping, mopping, and washing floors, toilets, showers, tubs, driveways, windows, and counters.\r\nVacuuming carpets, upholstery, and any other dusty surface. Cleaning all surfaces in the kitchen and bathroom. Making beds and fluffing pillows. Folding clean laundry.', 2, '2020-07-29 16:09:39', '2020-07-29 16:09:39', 0),
(7, 'Sanitization services', 'Complete the cleaning and sanitization of all production equipment, work surfaces, and tools\r\nMaintaining inventory records of supplies, materials, and preparing requisitions as needed\r\nMeasuring and recording various equipment and production data Perform sampling of raw materials.', 2, '2020-07-29 16:11:20', '2020-07-29 16:11:20', 0),
(8, 'Interior designer', 'Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.', 3, '2020-07-29 16:12:16', '2020-07-29 16:12:16', 0),
(9, 'Architects', 'Architects create designs for new construction projects, alterations and redevelopments. They use their specialist construction knowledge and high-level drawing skills to design buildings that are functional, safe, sustainable and aesthetically pleasing.', 3, '2020-07-29 16:12:54', '2020-07-29 16:12:54', 0),
(10, 'Contractor', 'In a general sense, a contractor is responsible for providing or accomplishing the following tasks: filing for building permits, securing the property, managing the workers on site, providing temporary materials and utilities on site, providing engineering functions and surveying for the site, disposing of wastes left.', 3, '2020-07-29 16:13:42', '2020-07-29 16:13:42', 0),
(11, 'Free vegetable delivery at doorstep', 'Free vegetable delivery at doorstep', 1, '2020-07-30 14:34:58', '2020-07-30 14:34:58', 0),
(12, 'Free kirana delivery at doorstep', 'Free kirana delivery at doorstep', 1, '2020-07-30 14:34:58', '2020-07-30 14:34:58', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employeeservice_tbl`
--
ALTER TABLE `employeeservice_tbl`
  ADD PRIMARY KEY (`es_id`),
  ADD KEY `e_mobile` (`e_mobile`),
  ADD KEY `s_id` (`s_id`);

--
-- Indexes for table `employee_tbl`
--
ALTER TABLE `employee_tbl`
  ADD PRIMARY KEY (`e_mobile`);

--
-- Indexes for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  ADD PRIMARY KEY (`f_id`),
  ADD KEY `p_mobile` (`p_mobile`);

--
-- Indexes for table `image_tbl`
--
ALTER TABLE `image_tbl`
  ADD PRIMARY KEY (`i_id`),
  ADD KEY `s_id` (`s_id`);

--
-- Indexes for table `ordermaintain_tbl`
--
ALTER TABLE `ordermaintain_tbl`
  ADD PRIMARY KEY (`om_id`),
  ADD KEY `pp_id` (`pp_id`),
  ADD KEY `s_id` (`s_id`),
  ADD KEY `e_mobile` (`e_mobile`);

--
-- Indexes for table `packagepurchase_tbl`
--
ALTER TABLE `packagepurchase_tbl`
  ADD PRIMARY KEY (`pp_id`),
  ADD KEY `pk_id` (`pk_id`),
  ADD KEY `p_mobile` (`p_mobile`);

--
-- Indexes for table `packageservice_tbl`
--
ALTER TABLE `packageservice_tbl`
  ADD PRIMARY KEY (`ps_id`),
  ADD KEY `pk_id` (`pk_id`),
  ADD KEY `s_id` (`s_id`);

--
-- Indexes for table `package_tbl`
--
ALTER TABLE `package_tbl`
  ADD PRIMARY KEY (`pk_id`);

--
-- Indexes for table `persondetail_tbl`
--
ALTER TABLE `persondetail_tbl`
  ADD PRIMARY KEY (`p_mobile`),
  ADD KEY `p_id` (`p_id`);

--
-- Indexes for table `person_tbl`
--
ALTER TABLE `person_tbl`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `servicecategory_tbl`
--
ALTER TABLE `servicecategory_tbl`
  ADD PRIMARY KEY (`sc_id`);

--
-- Indexes for table `service_tbl`
--
ALTER TABLE `service_tbl`
  ADD PRIMARY KEY (`s_id`),
  ADD KEY `sc_id` (`sc_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employeeservice_tbl`
--
ALTER TABLE `employeeservice_tbl`
  MODIFY `es_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  MODIFY `f_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `image_tbl`
--
ALTER TABLE `image_tbl`
  MODIFY `i_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `ordermaintain_tbl`
--
ALTER TABLE `ordermaintain_tbl`
  MODIFY `om_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `packagepurchase_tbl`
--
ALTER TABLE `packagepurchase_tbl`
  MODIFY `pp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `packageservice_tbl`
--
ALTER TABLE `packageservice_tbl`
  MODIFY `ps_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `package_tbl`
--
ALTER TABLE `package_tbl`
  MODIFY `pk_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `person_tbl`
--
ALTER TABLE `person_tbl`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `servicecategory_tbl`
--
ALTER TABLE `servicecategory_tbl`
  MODIFY `sc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `service_tbl`
--
ALTER TABLE `service_tbl`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employeeservice_tbl`
--
ALTER TABLE `employeeservice_tbl`
  ADD CONSTRAINT `employeeservice_tbl_ibfk_1` FOREIGN KEY (`e_mobile`) REFERENCES `employee_tbl` (`e_mobile`),
  ADD CONSTRAINT `employeeservice_tbl_ibfk_2` FOREIGN KEY (`s_id`) REFERENCES `service_tbl` (`s_id`);

--
-- Constraints for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  ADD CONSTRAINT `feedback_tbl_ibfk_1` FOREIGN KEY (`p_mobile`) REFERENCES `persondetail_tbl` (`p_mobile`);

--
-- Constraints for table `image_tbl`
--
ALTER TABLE `image_tbl`
  ADD CONSTRAINT `image_tbl_ibfk_1` FOREIGN KEY (`s_id`) REFERENCES `service_tbl` (`s_id`);

--
-- Constraints for table `ordermaintain_tbl`
--
ALTER TABLE `ordermaintain_tbl`
  ADD CONSTRAINT `ordermaintain_tbl_ibfk_1` FOREIGN KEY (`pp_id`) REFERENCES `packagepurchase_tbl` (`pp_id`),
  ADD CONSTRAINT `ordermaintain_tbl_ibfk_2` FOREIGN KEY (`s_id`) REFERENCES `service_tbl` (`s_id`),
  ADD CONSTRAINT `ordermaintain_tbl_ibfk_3` FOREIGN KEY (`e_mobile`) REFERENCES `employee_tbl` (`e_mobile`);

--
-- Constraints for table `packagepurchase_tbl`
--
ALTER TABLE `packagepurchase_tbl`
  ADD CONSTRAINT `packagepurchase_tbl_ibfk_1` FOREIGN KEY (`pk_id`) REFERENCES `package_tbl` (`pk_id`),
  ADD CONSTRAINT `packagepurchase_tbl_ibfk_2` FOREIGN KEY (`p_mobile`) REFERENCES `persondetail_tbl` (`p_mobile`);

--
-- Constraints for table `packageservice_tbl`
--
ALTER TABLE `packageservice_tbl`
  ADD CONSTRAINT `packageservice_tbl_ibfk_1` FOREIGN KEY (`pk_id`) REFERENCES `package_tbl` (`pk_id`),
  ADD CONSTRAINT `packageservice_tbl_ibfk_2` FOREIGN KEY (`s_id`) REFERENCES `service_tbl` (`s_id`);

--
-- Constraints for table `persondetail_tbl`
--
ALTER TABLE `persondetail_tbl`
  ADD CONSTRAINT `persondetail_tbl_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `person_tbl` (`p_id`);

--
-- Constraints for table `service_tbl`
--
ALTER TABLE `service_tbl`
  ADD CONSTRAINT `service_tbl_ibfk_1` FOREIGN KEY (`sc_id`) REFERENCES `servicecategory_tbl` (`sc_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
