<?php
// Definimos la ruta base del proyecto
define('BASE_PATH', 'C:/xampp/htdocs/EvaluacionParcial2/MVC');

// Incluimos la biblioteca FPDF
require(BASE_PATH . '/reports/fpdf/fpdf.php');

// Incluimos el modelo de películas
require_once(BASE_PATH . "/models/peliculas.models.php");

class PeliculaPDF extends FPDF
{
    function Header()
    {
        $this->SetFont('Arial', 'B', 15);
        $this->Cell(0, 10, 'REPORTE DE PELICULA', 0, 1, 'C');
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

// Obtenemos el ID de la película de la URL
$peliculas_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($peliculas_id <= 0) {
    die("ID de película no válido");
}

$pdf = new PeliculaPDF();
$pdf->AliasNbPages();
$pdf->AddPage();

$peliculas = new Peliculas();
$datosPelicula = $peliculas->uno($peliculas_id);
$pelicula = mysqli_fetch_assoc($datosPelicula);

if (!$pelicula) {
    die("Película no encontrada");
}

$pdf->SetFont('Arial', 'B', 14);
$pdf->Cell(0, 10, utf8_decode('Detalles de la Película'), 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, utf8_decode('Título:'), 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, utf8_decode($pelicula['titulo']), 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, utf8_decode('Género:'), 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, utf8_decode($pelicula['genero']), 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, utf8_decode('Año:'), 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, $pelicula['anio'], 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, 'Director:', 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, utf8_decode($pelicula['director']), 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, 'ID Beneficiario:', 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, $pelicula['usuario_beneficiario_id'], 0, 1);

$pdf->Output();