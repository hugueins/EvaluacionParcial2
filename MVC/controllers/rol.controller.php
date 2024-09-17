<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if($method == "OPTIONS") {die();}
require_once ("../models/rol.models.php");
$rol = new Roles;
switch ($_GET["op"]) {
    case "todos":
        $datos =$rol->todos();
        while ($row = mysqli_fetch_assoc ($datos)) {
            $todos[] =$row;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $rol_id =$_POST["rol_id"];
        $datos = array ();
        $datos = $rol->uno($rol_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode ($res);
        break;
    case "insertar":
        $nombre_rol = $_POST ["nombre_rol"];
        $datos = array ();
        $datos= $rol ->insertar ($nombre_rol);
        echo json_encode ($datos);
        break;
    case "actualizar":
        $rol_id = $_POST ["rol_id"];
        $nombre_rol = $_POST ["nombre_rol"];
        $datos = array ();
        $datos= $rol ->actualizar ($rol_id, $nombre_rol);
        echo json_encode ($datos);
        break;
     case "eliminar":
        $rol_id = $_POST ["rol_id"];
        $datos = array ();
        $datos = $rol ->eliminar($rol_id);
        echo json_encode ($datos);
        break;  
}

?>