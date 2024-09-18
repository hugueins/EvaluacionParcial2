
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ipeliculas } from 'src/app/Interfaces/ipeliculas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevapelicula',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nuevapelicula.component.html',
  styleUrls: ['./nuevapelicula.component.scss']
})
export class NuevapeliculaComponent implements OnInit {
  titulo = 'Nueva Película';
  frm_peliculas: FormGroup;
  peliculas_id: number = 0;

  constructor(
    private ServicioPeliculas: PeliculasService,
    private router: Router,
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.peliculas_id = parseInt(this.ruta.snapshot.paramMap.get('peliculas_id') || '0');
    if (this.peliculas_id > 0) {
      this.cargarPelicula();
    }
  }

  crearFormulario() {
    this.frm_peliculas = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      anio: ['', Validators.required],
      director: ['', Validators.required],
      usuario_beneficiario_id: ['', Validators.required],
    });
  }

  cargarPelicula() {
    this.ServicioPeliculas.uno(this.peliculas_id).subscribe({
      next: (pelicula) => {
        this.frm_peliculas.patchValue(pelicula);
        this.titulo = 'Actualizar Película';
      },
      error: (error) => {
        console.error('Error al cargar la película:', error);
        Swal.fire('Error', 'No se pudo cargar la información de la película', 'error');
      }
    });
  }

  grabar() {
    if (this.frm_peliculas.valid) {
      const pelicula: ipeliculas = {
        peliculas_id: this.peliculas_id,
        ...this.frm_peliculas.value
      };

      const action = this.peliculas_id === 0 ? this.ServicioPeliculas.insertar(pelicula) : this.ServicioPeliculas.actualizar(pelicula);

      action.subscribe({
        next: () => {
          Swal.fire('Éxito', `Película ${this.peliculas_id === 0 ? 'registrada' : 'actualizada'} correctamente`, 'success');
          this.router.navigate(['/peliculas']);
        },
        error: (error) => {
          console.error('Error al guardar la película:', error);
          Swal.fire('Error', `No se pudo ${this.peliculas_id === 0 ? 'registrar' : 'actualizar'} la película`, 'error');
        }
      });
    }
  }
}