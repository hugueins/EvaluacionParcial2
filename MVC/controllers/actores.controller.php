<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if($method == "OPTIONS") {die();}

require_once ("../models/actores.models.php");
$actores = new Actores;

switch ($_GET["op"]) {
    case "todos":
        $datos =$actores->todos();
        while ($row = mysqli_fetch_assoc ($datos)) {
            $todos[] =$row;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $actor_id =$_POST["actor_id"];
        //var_dump ($actor_id);
        //die;
        $datos = array ();
        $datos = $actores->uno($actor_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode ($res);
        break;
    case "insertar":
        $nombre = $_POST ["nombre"];
        $apellido = $_POST ["apellido"];
        $fecha_nacimiento = $_POST ["fecha_nacimiento"]; 
        $nacionalidad = $_POST ["nacionalidad"];
        $datos = array ();
        $datos= $actores->insertar ($nombre, $apellido, $fecha_nacimiento, $nacionalidad);
        echo json_encode ($datos);
        break;
    case "actualizar":
        $actor_id = $_POST ["actor_id"];
        $nombre = $_POST ["nombre"];
        $apellido = $_POST ["apellido"];
        $fecha_nacimiento= $_POST ["fecha_nacimiento"]; 
        $nacionalidad = $_POST ["nacionalidad"]; 
        $datos = array ();
        $datos= $actores->actualizar ($actor_id,$nombre, $apellido, $fecha_nacimiento, $nacionalidad);
        echo json_encode ($datos);
        break;
     case "eliminar":
        $actor_id = $_POST ['actor_id'];
        $datos = array ();
        $datos = $actores-> eliminar ($actor_id);
        echo json_encode ($datos);
        break;  
}

?>