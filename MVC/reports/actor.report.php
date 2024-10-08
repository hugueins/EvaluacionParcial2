<?php

//define('BASE_PATH', 'C:/xampp/htdocs/EvaluacionParcial2/MVC'); path pc casa
define('BASE_PATH', 'C:/wamp64/www/EvaluacionParcial2/MVC'); //path pc oficina



require(BASE_PATH . '/reports/fpdf/fpdf.php');
require(BASE_PATH . '/reports/fpdf/fpdf_utf8.php');


require_once(BASE_PATH . "/models/actores.models.php");

class ActorPDF extends FPDF
{
    function Header()
    {
        $this->Image('https://www.uniandes.edu.ec/wp-content/uploads/2024/07/2-headerweb-home-2.png', 10, 10, 190);
        
        
        $this->Cell(80);
        $this->SetFont('Arial', 'B', 15);
        $this->Cell(0, 10, 'REPORTE DE PELICULAS Y ACTORES - Evaluacion Parcial 2 6to Software', 0, 1, 'C');
        $this->SetFont('Arial', '', 10);
        
     
        date_default_timezone_set('America/Guayaquil');
        $fecha_hora = date('Y-m-d H:i:s');
        
        $this->Cell(0, 5, utf8_decode('Generado el: ' . $fecha_hora . ' (UTC-5)'), 0, 1, 'C');
        $this->Ln(10);
    }

    function Footer()
    {
        $this->SetY(-15);
        $this->SetFont('Arial', 'I', 8);
        $this->Cell(0, 10, utf8_decode('Página ') . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}

//  ID del actor de la URL del front 
$actor_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($actor_id <= 0) {
    die("ID de actor no válido");
}

$pdf = new ActorPDF();
$pdf->AliasNbPages();
$pdf->AddPage();

$actores = new Actores();
$datosActor = $actores->uno($actor_id);
$actor = mysqli_fetch_assoc($datosActor);

if (!$actor) {
    die("Actor no encontrado");
}

$pdf->SetFont('Arial', 'B', 14);
$pdf->Cell(0, 10, 'Detalles del Actor', 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, 'Nombre:', 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, utf8_decode($actor['nombre']), 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, 'Apellido:', 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, utf8_decode($actor['apellido']), 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, 'Fecha de Nacimiento:', 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, $actor['fecha_nacimiento'], 0, 1);

$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(50, 7, 'Nacionalidad:', 0);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, utf8_decode($actor['nacionalidad']), 0, 1);

$pdf->Output();