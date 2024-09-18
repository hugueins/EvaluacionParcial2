import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { iactores } from 'src/app/Interfaces/iactores';
import { ActoresService } from 'src/app/services/actores.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [RouterLink, SharedModule],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.scss'
})
export class ActoresComponent {
  title=  'Lista de Actores';
  listaactores:iactores[] = [];
  constructor(private ServicioActor:ActoresService){}
  ngOnInit(){
    this.cargatabla();
  }
  cargatabla(){
    this.ServicioActor.todos().subscribe((data)=>{
      this.listaactores =data;
    });
  }
    eliminar (actor_id: number){
      this.ServicioActor.eliminar (actor_id).subscribe((data) => {
        this.cargatabla();
      });
    }
    imprimir(actor_id: number) {
      // Asumiendo que tu backend está en localhost:3000
      const url = `http://localhost/EvaluacionParcial2/MVC/reports/actor.report.php?id=${actor_id}`;
      
      // Abre una nueva ventana con el reporte PDF
      window.open(url, '_blank');
    }
 
}
