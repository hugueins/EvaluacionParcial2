import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iactores } from '../Interfaces/iactores';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  apiurl ='http://localhost/EvaluacionParcial2/MVC/controllers/actores.controller.php?op='; //llama al controlador 
  constructor(private lector: HttpClient) {}
  todos():Observable<iactores[]>{
    return this.lector.get<iactores[]>(this.apiurl + 'todos');
  }
  uno(actor_id: number): Observable<iactores> {
    const formData = new FormData();
    formData.append('actor_id', actor_id.toString());
    return this.lector.post<iactores>(this.apiurl + 'uno', formData);
  }
  eliminar(actor_id: number): Observable<number> {
    const formData = new FormData();
    formData.append('actor_id', actor_id.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar', formData);
  }
  insertar(actor: iactores): Observable<string> {
    const formData = new FormData();
    formData.append('actor_id', actor.actor_id.toString());
    formData.append('nombre', actor.nombre);
    formData.append('apellido', actor.apellido);
    formData.append('fecha_nacimiento', actor.fecha_nacimiento);
    formData.append('nacionalidad', actor.nacionalidad);
    return this.lector.post<string>(this.apiurl + 'insertar', formData);
  }
  actualizar(actor: iactores): Observable<string> {
    const formData = new FormData();
    formData.append('actor_id', actor.actor_id.toString());
    formData.append('nombre', actor.nombre);
    formData.append('apellido', actor.apellido);
    formData.append('fecha_nacimiento', actor.fecha_nacimiento);
    formData.append('nacionalidad', actor.nacionalidad);
    return this.lector.post<string>(this.apiurl + 'actualizar', formData);
  }

}
