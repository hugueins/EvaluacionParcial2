/*import { Component, OnInit } from '@angular/core';
import { ipeliculas } from 'src/app/Interfaces/ipeliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { SharedModule } from "../../theme/shared/shared.module";

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [RouterLink, SharedModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent implements OnInit {
  listapeliculas: ipeliculas []=[];

  constructor(private ServicioPeliculas: PeliculasService) { }
  ngOnInit(): void {
    this.cargapeliculas();
  }
cargapeliculas(){
  this.ServicioPeliculas.todos().subscribe((data)=> {
  this.listapeliculas=data;
  console.log(data);
  });
}
trackByFn(){}

  eliminar(peliculas_id){
    Swal.fire ({
      title: 'Eliminar Pelicula',
      text: '¿Estas seguro de eliminar esta pelicula?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ServicioPeliculas.eliminar(peliculas_id).subscribe((data) => {
          this.cargapeliculas();
         });
         Swal.fire(
          'Eliminado','La pelicula ha sido eliminada','success');
      }else{
        Swal.fire('Error','La pelicula no ha sido eliminada','error');
      }
  });
  }
  imprimir(peliculas_id: number) {
   
    const url = `http://localhost/EvaluacionParcial2/MVC/reports/pelicula.report.php?id=${peliculas_id}`;
    
    // Abre una nueva ventana con el reporte PDF
    window.open(url, '_blank');
  }
}*/
import { Component, OnInit } from '@angular/core';
import { ipeliculas } from 'src/app/Interfaces/ipeliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { SharedModule } from "../../theme/shared/shared.module";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [RouterLink, SharedModule, CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  listapeliculas: ipeliculas[] = [];

  constructor(private ServicioPeliculas: PeliculasService) { }

  ngOnInit(): void {
    this.cargapeliculas();
  }

  cargapeliculas() {
    this.ServicioPeliculas.todos().subscribe({
      next: (data) => {
        this.listapeliculas = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error al cargar películas:', error);
        Swal.fire('Error', 'No se pudieron cargar las películas', 'error');
      }
    });
  }

  trackByFn(index: number, item: ipeliculas): number {
    return item.peliculas_id;
  }

  eliminar(peliculas_id: number) {
    Swal.fire({
      title: 'Eliminar Película',
      text: '¿Estás seguro de eliminar esta película?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ServicioPeliculas.eliminar(peliculas_id).subscribe({
          next: () => {
            this.cargapeliculas();
            Swal.fire('Eliminado', 'La película ha sido eliminada', 'success');
          },
          error: (error) => {
            console.error('Error al eliminar película:', error);
            Swal.fire('Error', 'No se pudo eliminar la película', 'error');
          }
        });
      }
    });
  }

  imprimir(peliculas_id: number) {
   
    const url = `http://localhost/EvaluacionParcial2/MVC/reports/pelicula.report.php?id=${peliculas_id}`;
    
    // Abre una nueva ventana con el reporte PDF
    window.open(url, '_blank');
  }
}



