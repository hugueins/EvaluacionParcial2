import { Component, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/services/actores.service';
import { Router, ActivatedRoute, Route,RouterLink } from '@angular/router';
import { iactores } from 'src/app/Interfaces/iactores';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevoactor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevoactor.component.html',
  styleUrl: './nuevoactor.component.scss'
})
export class NuevoactorComponent implements OnInit{
  titulo = 'Nuevo Actor';
  actor_id = 0;
  nombre:any;
  apellido:any;
  fecha_nacimiento:any;
  nacionalidad:any;

  constructor (
    private ServicioActor:ActoresService,
    private navegacion:Router,
    private ruta:ActivatedRoute
  ) { }
ngOnInit(): void {
  this.actor_id= parseInt(this.ruta.snapshot.paramMap.get('actor_id'));
    if(this.actor_id>0){
    this.ServicioActor.uno(this.actor_id).subscribe((actor)=>{
      console.log(actor);
      this.nombre=actor.nombre;
      this.apellido=actor.apellido;
      this.fecha_nacimiento=actor.fecha_nacimiento;
      this.nacionalidad=actor.nacionalidad;
      this.titulo='Editar Actor';
    });
  }
}
limpiarcaja (){
  alert ('Limpiar Caja');
}
grabar (){
  let iactores:iactores = {
    actor_id:0,
    nombre:this.nombre,
    apellido:this.apellido,
    fecha_nacimiento:this.fecha_nacimiento,
    nacionalidad:this.nacionalidad
  };

  //console.log(this.actor_id);
  if(this.actor_id==0 || isNaN(this.actor_id)){
    this.ServicioActor.insertar(iactores).subscribe((respuesta)=>{
      if (parseInt (respuesta) >1){
        alert ("Actor Grabado Con Exito");
        this.navegacion.navigate(['/actores']);
      
      }else{
        alert ("Error al Grabar Actor");
      }
    });
    }else{
        iactores.actor_id=this.actor_id;
        this.ServicioActor.actualizar(iactores).subscribe((respuesta)=>{
          if (parseInt (respuesta) >0){
            this.actor_id=0;
            alert ("Actor Actualizado Con Exito");
            this.navegacion.navigate(['/actores']);
          }else{
            alert ("Error al Actualizar Actor");
          }
    });
  }
}
}


