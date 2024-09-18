import { Component, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/services/actores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { iactores } from 'src/app/Interfaces/iactores';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevoactor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevoactor.component.html',
  styleUrls: ['./nuevoactor.component.scss']
})
export class NuevoactorComponent implements OnInit {
  titulo = 'Nuevo Actor';
  actor_id = 0;
  nombre: string = '';
  apellido: string = '';
  fecha_nacimiento: string = '';
  nacionalidad: string = '';

  constructor(
    private ServicioActor: ActoresService,
    private navegacion: Router,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actor_id = parseInt(this.ruta.snapshot.paramMap.get('actor_id') || '0');
    if (this.actor_id > 0) {
      this.ServicioActor.uno(this.actor_id).subscribe({
        next: (actor) => {
          console.log(actor);
          this.nombre = actor.nombre;
          this.apellido = actor.apellido;
          this.fecha_nacimiento = actor.fecha_nacimiento;
          this.nacionalidad = actor.nacionalidad;
          this.titulo = 'Editar Actor';
        },
        error: (error) => {
          console.error('Error al cargar el actor:', error);
          this.mostrarMensaje('Error al cargar el actor', 'error');
        }
      });
    }
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.fecha_nacimiento = '';
    this.nacionalidad = '';
  }

  grabar() {
    if (!this.validarCampos()) {
      return;
    }

    let actor: iactores = {
      actor_id: this.actor_id,
      nombre: this.nombre,
      apellido: this.apellido,
      fecha_nacimiento: this.fecha_nacimiento,
      nacionalidad: this.nacionalidad
    };

    if (this.actor_id === 0 || isNaN(this.actor_id)) {
      this.ServicioActor.insertar(actor).subscribe({
        next: (respuesta) => {
          this.mostrarMensaje('Actor Grabado Con Éxito', 'success');
          this.navegacion.navigate(['/actores']);
        },
        error: (error) => {
          console.error('Error al grabar actor:', error);
          this.mostrarMensaje('Error al Grabar Actor', 'error');
        }
      });
    } else {
      this.ServicioActor.actualizar(actor).subscribe({
        next: (respuesta) => {
          this.mostrarMensaje('Actor Actualizado Con Éxito', 'success');
          this.navegacion.navigate(['/actores']);
        },
        error: (error) => {
          console.error('Error al actualizar actor:', error);
          this.mostrarMensaje('Error al Actualizar Actor', 'error');
        }
      });
    }
  }

  validarCampos(): boolean {
    if (!this.nombre || !this.apellido || !this.fecha_nacimiento || !this.nacionalidad) {
      this.mostrarMensaje('Todos los campos son obligatorios', 'error');
      return false;
    }
    return true;
  }

  mostrarMensaje(mensaje: string, tipo: 'success' | 'error') {
        alert(mensaje);
  }
}