<?php
require_once('../config/config.php');
class Valoracion{
    public function todos() {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "select * from `valoracion`";
        $datos = mysqli_query ($con, $cadena);
        $con->close();
        return $datos; 
    } 
   
    public function uno ($valoracion_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT * FROM `valoracion` where `valoracion_id` =$valoracion_id";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
    public function insertar($nombre)
    {
       try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "INSERT INTO `valoracion`(`nombre`) VALUES ('$nombre')" ;
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
    public function actualizar ($valoracion_id,$nombre)
    {
    try {
    $con = new ClaseConectar();
    $con =$con->ProcedimientoParaConectar();
    $cadena = "UPDATE `valoracion` SET `nombre`='$nombre' WHERE `valoracion_id` = $valoracion_id";
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

    public function eliminar ($valoracion_id)
    {
    try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "DELETE FROM `valoracion` WHERE `valoracion_id`= $valoracion_id";
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