<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if($method == "OPTIONS") {die();}

require_once ("../models/usuarios.models.php");
$usuarios = new Usuarios;

switch ($_GET["op"]) {
    case "todos":
        $datos =$usuarios->todos();
        while ($row = mysqli_fetch_assoc ($datos)) {
            $todos[] =$row;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $usuario_id =$_POST["usuario_id"];
        //var_dump ($usuario_id);
        //die;
        $datos = array ();
        $datos = $usuarios->uno($usuario_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode ($res);
        break;
    case "insertar":
        $nombres = $_POST ["nombres"];
        $identificacion = $_POST ["identificacion"];
        $usuario = $_POST ["usuario"];
        $contraseña = $_POST ["contraseña"];
        $correo = $_POST ["correo"];
        $fecha_nacimiento = $_POST ["fecha_nacimiento"]; 
        $rol_rol_id = $_POST ["rol_rol_id"]; 
        $datos = array ();
        $datos= $usuarios ->insertar ($nombres, $identificacion, $usuario, $contraseña, $correo, $fecha_nacimiento, $rol_rol_id);
        echo json_encode ($datos);
        break;
    case "actualizar":
        $usuario_id = $_POST ["usuario_id"];
        $nombres = $_POST ["nombres"];
        $identificacion = $_POST ["identificacion"];
        $usuario = $_POST ["usuario"];
        $contraseña = $_POST ["contraseña"];
        $correo = $_POST ["correo"];
        $fecha_nacimiento = $_POST ["fecha_nacimiento"]; 
        $rol_rol_id = $_POST ["rol_rol_id"]; 
        $datos = array ();
        $datos= $usuarios ->actualizar ($usuario_id, $nombres, $identificacion, $usuario, $contraseña, $correo, $fecha_nacimiento, $rol_rol_id);
        echo json_encode ($datos);
        break;
     case "eliminar":
        $usuario_id = $_POST ["usuario_id"];
        $datos = array ();
        $datos = $usuarios -> eliminar ($usuario_id);
        echo json_encode ($datos);
        break;  
}

?>