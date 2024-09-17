-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2024 a las 20:24:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pelis`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores`
--

CREATE TABLE `actores` (
  `actor_id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `nacionalidad` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `actores`
--

INSERT INTO `actores` (`actor_id`, `nombre`, `apellido`, `fecha_nacimiento`, `nacionalidad`) VALUES
(1, 'vin ', 'disel', '1980-09-30', 'Estados Unidos'),
(2, 'leonardo ', 'dicaprio', '1990-01-20', 'Estados Unidos'),
(3, 'vin ', 'disel', '1980-09-30', 'Estados Unidos'),
(4, 'leonardo ', 'dicaprio', '1990-01-20', 'Estados Unidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores_has_peliculas`
--

CREATE TABLE `actores_has_peliculas` (
  `actores_actor_id` int(11) NOT NULL,
  `peliculas_peliculas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cometarios`
--

CREATE TABLE `cometarios` (
  `comentarios_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `comentarios` varchar(45) DEFAULT NULL,
  `usuario_beneficiario_id` int(11) NOT NULL,
  `valoracion_valoracion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `cometarios`
--

INSERT INTO `cometarios` (`comentarios_id`, `fecha`, `comentarios`, `usuario_beneficiario_id`, `valoracion_valoracion_id`) VALUES
(1, '2024-08-15', 'estuvo buena', 1, 1),
(2, '2024-08-15', 'estuvo buena', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `peliculas_id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `anio` int(4) NOT NULL,
  `director` varchar(100) NOT NULL,
  `usuario_beneficiario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`peliculas_id`, `titulo`, `genero`, `anio`, `director`, `usuario_beneficiario_id`) VALUES
(1, 'titanic', 'drama', 1999, 'james cameron', 1),
(2, 'fast and furius', 'accion', 2005, 'vin disel', 1),
(3, 'titanic', 'drama', 1999, 'james cameron', 1),
(4, 'fast and furius', 'accion', 2005, 'vin disel', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `rol_id` int(11) NOT NULL,
  `nombre_rol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`rol_id`, `nombre_rol`) VALUES
(1, 'Admin'),
(2, 'usuario'),
(3, 'Admin'),
(4, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `beneficiario_id` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `identificacion` int(10) NOT NULL,
  `usuario` varchar(40) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `correo` varchar(80) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `rol_rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`beneficiario_id`, `nombres`, `identificacion`, `usuario`, `contraseña`, `correo`, `fecha_nacimiento`, `rol_rol_id`) VALUES
(1, 'hugo herrera', 1717325953, 'hugo', '12345678', 'hugo@gmail.com', '1984-09-21', 1),
(2, 'hugo herrera', 1717325953, 'hugo', '12345678', 'hugo@gmail.com', '1984-09-21', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion`
--

CREATE TABLE `valoracion` (
  `valoracion_id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `valoracion`
--

INSERT INTO `valoracion` (`valoracion_id`, `nombre`) VALUES
(1, 'buena'),
(2, 'mala'),
(3, 'buena'),
(4, 'mala');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`actor_id`);

--
-- Indices de la tabla `actores_has_peliculas`
--
ALTER TABLE `actores_has_peliculas`
  ADD PRIMARY KEY (`actores_actor_id`,`peliculas_peliculas_id`),
  ADD KEY `fk_actores_has_peliculas_peliculas1_idx` (`peliculas_peliculas_id`),
  ADD KEY `fk_actores_has_peliculas_actores1_idx` (`actores_actor_id`);

--
-- Indices de la tabla `cometarios`
--
ALTER TABLE `cometarios`
  ADD PRIMARY KEY (`comentarios_id`),
  ADD KEY `fk_valoracion_usuario1_idx` (`usuario_beneficiario_id`),
  ADD KEY `fk_calificacion_valoracion1_idx` (`valoracion_valoracion_id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`peliculas_id`),
  ADD KEY `fk_peliculas_usuario1_idx` (`usuario_beneficiario_id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`beneficiario_id`),
  ADD KEY `fk_usuario_rol1_idx` (`rol_rol_id`);

--
-- Indices de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD PRIMARY KEY (`valoracion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actores`
--
ALTER TABLE `actores`
  MODIFY `actor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cometarios`
--
ALTER TABLE `cometarios`
  MODIFY `comentarios_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `peliculas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `rol_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `beneficiario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  MODIFY `valoracion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actores_has_peliculas`
--
ALTER TABLE `actores_has_peliculas`
  ADD CONSTRAINT `fk_actores_has_peliculas_actores1` FOREIGN KEY (`actores_actor_id`) REFERENCES `actores` (`actor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_actores_has_peliculas_peliculas1` FOREIGN KEY (`peliculas_peliculas_id`) REFERENCES `peliculas` (`peliculas_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cometarios`
--
ALTER TABLE `cometarios`
  ADD CONSTRAINT `fk_calificacion_valoracion1` FOREIGN KEY (`valoracion_valoracion_id`) REFERENCES `valoracion` (`valoracion_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_valoracion_usuario1` FOREIGN KEY (`usuario_beneficiario_id`) REFERENCES `usuario` (`beneficiario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `fk_peliculas_usuario1` FOREIGN KEY (`usuario_beneficiario_id`) REFERENCES `usuario` (`beneficiario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_rol1` FOREIGN KEY (`rol_rol_id`) REFERENCES `rol` (`rol_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
