<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if($method == "OPTIONS") {die();}

require_once ("../models/peliculas.models.php");
$peliculas = new Peliculas;

switch ($_GET["op"]) {
    case "todos":
        $datos =$peliculas->todos();
        while ($row = mysqli_fetch_assoc ($datos)) {
            $todos[] =$row;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $peliculas_id =$_POST["peliculas_id"];
        $datos = array ();
        $datos = $peliculas->uno($peliculas_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode ($res);
        break;
    case "insertar":
        $titulo = $_POST ["titulo"];
        $genero = $_POST ["genero"];
        $anio = $_POST ["anio"];
        $director = $_POST ["director"]; 
        $usuario_beneficiario_id = $_POST["usuario_beneficiario_id"];
        $datos = array ();
        $datos= $peliculas ->insertar ($titulo, $genero, $anio,  $director, $usuario_beneficiario_id);
        echo json_encode ($datos);
        break;
    case "actualizar":
        $peliculas_id = $_POST ["peliculas_id"];
        $titulo = $_POST ["titulo"];
        $genero = $_POST ["genero"];
        $anio = $_POST ["anio"];
        $director = $_POST ["director"]; 
        $usuario_beneficiario_id = $_POST ["usuario_beneficiario_id"];
        $datos = array ();
        $datos= $peliculas ->actualizar ($peliculas_id, $titulo, $genero, $anio,  $director, $usuario_beneficiario_id);
        echo json_encode ($datos);
        break;
     case "eliminar":
        $peliculas_id = $_POST ["peliculas_id"];
        $datos = array ();
        $datos = $peliculas -> eliminar ($peliculas_id);
        echo json_encode ($datos);
        break;  
}

?>