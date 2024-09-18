import { Injectable } from '@angular/core';
import { ipeliculas } from '../Interfaces/ipeliculas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  apiurl ='http://localhost/EvaluacionParcial2/MVC/controllers/peliculas.controller.php?op='; //llama al controlador 
  constructor(private lector: HttpClient) {}
  todos():Observable<ipeliculas[]>{
    return this.lector.get<ipeliculas[]>(this.apiurl + 'todos');
  }
  uno(peliculas_id: number): Observable<ipeliculas> {
    const formData = new FormData();
    formData.append('peliculas_id', peliculas_id.toString());
    return this.lector.post<ipeliculas>(this.apiurl + 'uno', formData);
  }
  eliminar(peliculas_id: number): Observable<number> {
    const formData = new FormData();
    formData.append('peliculas_id', peliculas_id.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar', formData);
  }
  insertar(peliculas: ipeliculas): Observable<string> {
    const formData = new FormData();
    formData.append('peliculas_id', peliculas.peliculas_id.toString());
    formData.append('titulo', peliculas.titulo);
    formData.append('genero', peliculas.genero);
    formData.append('anio', peliculas.anio.toString());
    formData.append('director', peliculas.director);
    formData.append('usuario_beneficiario_id',peliculas.usuario_beneficiario_id.toString());
    return this.lector.post<string>(this.apiurl + 'insertar', formData);
  }
  actualizar(peliculas: ipeliculas): Observable<string> {
    const formData = new FormData();
    formData.append('peliculas_id', peliculas.peliculas_id.toString());
    formData.append('titulo', peliculas.titulo);
    formData.append('genero', peliculas.genero);
    formData.append('anio', peliculas.anio.toString());
    formData.append('director', peliculas.director);
    formData.append('usuario_beneficiario_id',peliculas.usuario_beneficiario_id.toString());
    return this.lector.post<string>(this.apiurl + 'actualizar', formData);
  }
  
}
