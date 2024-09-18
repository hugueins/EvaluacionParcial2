import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { OnInit } from '@angular/core';
import { ipeliculas } from 'src/app/Interfaces/ipeliculas';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-nuevapelicula',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './nuevapelicula.component.html',
  styleUrl: './nuevapelicula.component.scss'
})
export class NuevapeliculaComponent implements OnInit {
  titulo ='';
  frm_peliculas: FormGroup;
  peliculas_id: number=0;
  constructor(
    private ServicioPeliculas: PeliculasService, 
    private router: Router,
    private navegacion: Router,
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.crearFormualrio();
    this.peliculas_id=parseInt(this.ruta.snapshot.paramMap.get('peliculas_id'));
    if (this.peliculas_id>0){
      this.ServicioPeliculas.uno(this.peliculas_id).subscribe((pelicula)=>{
        console.log(pelicula);
        this.frm_peliculas.controls["titulo"].setValue(pelicula.titulo);
        this.frm_peliculas.controls["genero"].setValue(pelicula.genero);
        this.frm_peliculas.controls["anio"].setValue(pelicula.anio);
        this.frm_peliculas.controls["director"].setValue(pelicula.director);
        this.frm_peliculas.controls["usuario_beneficiario_id"].setValue(pelicula.usuario_beneficiario_id);
        this.titulo = 'Actualizar Pelicula';
    });
  }

}
crearFormualrio(){
  this.frm_peliculas = new FormGroup({
    titulo: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    anio: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    usuario_beneficiario_id: new FormControl('', Validators.required),
  });

}
grabar(){
  let ipeliculas:ipeliculas={
    peliculas_id:0,
    titulo:this.frm_peliculas.controls["titulo"].value,
    genero:this.frm_peliculas.controls["genero"].value,
    anio:this.frm_peliculas.controls["anio"].value,
    director:this.frm_peliculas.controls["director"].value,
    usuario_beneficiario_id:this.frm_peliculas.controls["usuario_beneficiario_id"].value,

  };
  console.log(ipeliculas);
  if (this.peliculas_id ==0 || isNaN(this.peliculas_id)){
    this.ServicioPeliculas.insertar(ipeliculas).subscribe((x)=>{
      Swal.fire('Pelicula Registrada','La pelicula ha sido registrada','success');
      this.navegacion.navigate(['/peliculas']);
    });
  }
  else{
    ipeliculas.peliculas_id=this.peliculas_id;
    ipeliculas.usuario_beneficiario_id=this.frm_peliculas.controls["beneficiario_id"].value;
    this.ServicioPeliculas.actualizar(ipeliculas).subscribe((x)=>{
      Swal.fire('Pelicula Actualizada', 'La pelicula ha sido actualizada', 'success');
      this.navegacion.navigate(['/peliculas']);
    });
  }
  }
}
