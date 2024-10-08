<?php
// Definimos la ruta base del proyecto
define('BASE_PATH', 'C:/xampp/htdocs/EvaluacionParcial2/MVC');

// Incluimos la biblioteca FPDF
require(BASE_PATH . '/reports/fpdf/fpdf.php');

// Incluimos los modelos
require_once(BASE_PATH . "/models/peliculas.models.php");
require_once(BASE_PATH . "/models/actores.models.php");

class PeliculasActoresPDF extends FPDF
{
    function Header()
    {
        $this->SetFont('Arial', 'B', 15);
        $this->Cell(0, 10, 'REPORTE DE PELICULAS Y ACTORES - Evaluación Parcial 2 6to Software', 0, 1, 'C');
        $this->SetFont('Arial', '', 10);
        $this->Cell(0, 5, utf8_decode('Generado el: ' . date('Y-m-d H:i:s')), 0, 1, 'C');
        $this->Ln(10);
    }

    function Footer()
    {
        $this->SetY(-15);
        $this->SetFont('Arial', 'I', 8);
        $this->Cell(0, 10, utf8_decode('Página ') . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}

$pdf = new PeliculasActoresPDF();
$pdf->AliasNbPages();
$pdf->AddPage();

$peliculas = new Peliculas();
$actores = new Actores();

// Sección de Películas
$pdf->SetFont('Arial', 'B', 14);
$pdf->Cell(0, 10, utf8_decode('Películas'), 0, 1);
$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(60, 7, utf8_decode('Título'), 1);
$pdf->Cell(30, 7, utf8_decode('Género'), 1);
$pdf->Cell(20, 7, utf8_decode('Año'), 1);
$pdf->Cell(50, 7, 'Director', 1);
$pdf->Cell(30, 7, 'ID Beneficiario', 1);
$pdf->Ln();

$pdf->SetFont('Arial', '', 9);
$datosPeliculas = $peliculas->todos();
while ($pelicula = mysqli_fetch_assoc($datosPeliculas)) {
    $pdf->Cell(60, 6, utf8_decode($pelicula['titulo']), 1);
    $pdf->Cell(30, 6, utf8_decode($pelicula['genero']), 1);
    $pdf->Cell(20, 6, $pelicula['anio'], 1);
    $pdf->Cell(50, 6, utf8_decode($pelicula['director']), 1);
    //$pdf->Cell(30, 6, $pelicula['usuario_beneficiario_id'], 1);
    $pdf->Ln();
}

$pdf->Ln(10);

// Sección de Actores
$pdf->SetFont('Arial', 'B', 14);
$pdf->Cell(0, 10, 'Actores', 0, 1);
$pdf->SetFont('Arial', 'B', 10);
$pdf->Cell(50, 7, 'Nombre', 1);
$pdf->Cell(50, 7, 'Apellido', 1);
$pdf->Cell(40, 7, 'Fecha Nacimiento', 1);
$pdf->Cell(50, 7, 'Nacionalidad', 1);
$pdf->Ln();

$pdf->SetFont('Arial', '', 9);
$datosActores = $actores->todos();
while ($actor = mysqli_fetch_assoc($datosActores)) {
    $pdf->Cell(50, 6, utf8_decode($actor['nombre']), 1);
    $pdf->Cell(50, 6, utf8_decode($actor['apellido']), 1);
    $pdf->Cell(40, 6, $actor['fecha_nacimiento'], 1);
    $pdf->Cell(50, 6, utf8_decode($actor['nacionalidad']), 1);
    $pdf->Ln();
}

$pdf->Output();