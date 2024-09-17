<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if($method == "OPTIONS") {die();}

require_once ("../models/valoracion.models.php");
$rol = new Valoracion;

switch ($_GET["op"]) {
    case "todos":
        $datos =$rol->todos();
        while ($row = mysqli_fetch_assoc ($datos)) {
            $todos[] =$row;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $valoracion_id =$_POST["valoracion_id"];
        $datos = array ();
        $datos = $rol->uno($valoracion_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode ($res);
        break;
    case "insertar":
        $nombre = $_POST ["nombre"];
        $datos = array ();
        $datos= $rol ->insertar ($nombre);
        echo json_encode ($datos);
        break;
   case "actualizar":
        $valoracion_id = $_POST ["valoracion_id"];
        $nombre = $_POST ["nombre"];
        $datos = array ();
        $datos= $rol ->actualizar ($valoracion_id, $nombre);
        echo json_encode ($datos);
        break;
     case "eliminar":
        $valoracion_id = $_POST ["valoracion_id"];
        $datos = array ();
        $datos = $rol -> eliminar ($valoracion_id);
        echo json_encode ($datos);
        break;  
}

?>