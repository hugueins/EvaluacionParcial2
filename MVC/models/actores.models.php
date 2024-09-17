<?php
require_once('../config/config.php');
class Actores
{
    public function todos() {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "select * from actores";
        $datos = mysqli_query ($con, $cadena);
        $con->close();
        return $datos; 
    } 
   
    public function uno ($actor_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = 'select * from actores where actor_id='. $actor_id;
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
    public function insertar($nombre, $apellido, $fecha_nacimiento, $nacionalidad)
    {
       try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "INSERT INTO `actores`(`nombre`, `apellido`, `fecha_nacimiento`, `nacionalidad`) VALUES ('$nombre', '$apellido', '$fecha_nacimiento', '$nacionalidad')" ;
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
    public function actualizar ($actor_id, $nombre, $apellido, $fecha_nacimiento, $nacionalidad)
    {
    try {
    $con = new ClaseConectar();
    $con =$con->ProcedimientoParaConectar();
    $cadena = "UPDATE `actores` SET `nombre`='$nombre',`apellido`='$apellido',`fecha_nacimiento`='$fecha_nacimiento',`nacionalidad`='$nacionalidad' WHERE `actor_id` = $actor_id";
    echo $cadena;
    die;
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

    public function eliminar ($actor_id)
    {
    try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "DELETE FROM `actores` WHERE `actor_id`= $actor_id";
        //echo $cadena;
        //die;
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