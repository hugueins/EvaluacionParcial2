import { Component, OnInit } from '@angular/core';
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
}



