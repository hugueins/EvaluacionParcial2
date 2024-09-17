<?php
require_once('../config/config.php');
//TODO: archivo CRUD funcional
class Usuarios{
    public function todos() {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "select * from `usuario`";
        $datos = mysqli_query ($con, $cadena);
        $con->close();
        return $datos; 
    } 
   
    public function uno ($usuario_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena ='SELECT * FROM `usuario` where usuario_id='. $usuario_id;
        //echo $cadena;
        //die;
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
    public function insertar($nombres, $identificacion, $usuario, $contraseña, $correo, $fecha_nacimiento, $rol_rol_id)
    {
       try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "INSERT INTO `usuario`(`nombres`, `identificacion`, `usuario`, `contraseña`, `correo`,`fecha_nacimiento`, `rol_rol_id`) VALUES ('$nombres', $identificacion, '$usuario', '$contraseña', '$correo', '$fecha_nacimiento', $rol_rol_id)" ;
        if (mysqli_query($con, $cadena)){
            return $con->insert_id;
        } else {
            return $con->error;
        }
    } catch (Exception $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }
}
    public function actualizar ($usuario_id, $nombres, $identificacion, $usuario, $contraseña, $correo, $fecha_nacimiento,$rol_rol_id)
    {
    try {
    $con = new ClaseConectar();
    $con =$con->ProcedimientoParaConectar();
    $cadena = "UPDATE `usuario` SET `nombres`='$nombres',`identificacion`=$identificacion,`usuario`='$usuario',`contraseña`='$contraseña',`correo`= '$correo', `fecha_nacimiento` = '$fecha_nacimiento', `rol_rol_id` = $rol_rol_id  WHERE `usuario_id` = $usuario_id";
   
   if (mysqli_query($con, $cadena)){
        return $con->insert_id;
    } else {
        return $con->error;
    }
    } catch (Exception $th) {
    return $th->getMessage();
    } finally {
        $con->close();
    }
}

    public function eliminar ($usuario_id)
    {
    try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "DELETE FROM `usuario` WHERE `usuario_id`= $usuario_id";
        if (mysqli_query($con, $cadena)) {
            return 1;
        } else {
            return $con->error;
        }
    } catch (Exception $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }

    }
}

?>