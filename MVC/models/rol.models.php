<?php
require_once('../config/config.php');
class Roles
{
    public function todos() {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "select * from `rol`";
        $datos = mysqli_query ($con, $cadena);
        $con->close();
        return $datos; 
    } 
   
    public function uno ($rol_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "select * from `rol` WHERE `rol_id`=$rol_id";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
    public function insertar($nombre_rol)
    {
       try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "INSERT INTO `rol`(`nombre_rol`) VALUES ('$nombre_rol')";
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
    public function actualizar ($rol_id,$nombre_rol)
    {
    try {
    $con = new ClaseConectar();
    $con =$con->ProcedimientoParaConectar();
    $cadena = "UPDATE `rol` SET `nombre_rol`='$nombre_rol' WHERE `rol_id` = $rol_id";
    //echo $cadena;
    //die;
    if (mysqli_query($con, $cadena)){
       // var_dump ($con);
        //die;
        return $con->affected_rows;
        } else {
        return $con->error;
    }
    } catch (Exception $th) {
    return $th->getMessage();
    } finally {
        $con->close();
    }
}

    public function eliminar ($rol_id)
    {
    try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "DELETE FROM `rol` WHERE `rol_id`= $rol_id";
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