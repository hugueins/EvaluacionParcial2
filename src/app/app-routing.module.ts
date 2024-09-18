// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
     {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
       {
        path: 'usuarios',
        loadComponent: () => import('./components/usuarios/usuarios.component').then((m)=>m.UsuariosComponent)
      },
      
      {
        path: 'nuevousuario',
        loadComponent: () => import('./components/usuarios/nuevousuario/nuevousuario.component').then((m)=>m.NuevousuarioComponent)
      },
      {
        path: 'editarsuario',
        loadComponent: () => import('./components/usuarios/nuevousuario/nuevousuario.component').then((m)=>m.NuevousuarioComponent)
      },
     
      {
        path: 'actores',
        loadComponent: () => import('./components/actores/actores.component').then((m)=>m.ActoresComponent)
      },
      
      {
        path: 'nuevoactor',
        loadComponent: () => import('./components/actores/nuevoactor/nuevoactor.component').then((m)=>m.NuevoactorComponent)
      },
      
      {
        path: 'editaractor/:actor_id',
        loadComponent: () => import('./components/actores/nuevoactor/nuevoactor.component').then((m)=>m.NuevoactorComponent)
      },
      {
        path: 'peliculas',
        loadComponent: () => import('./components/peliculas/peliculas.component').then((m)=>m.PeliculasComponent)
      },
      {
        path: 'nuevapelicula',
        loadComponent: () => import('./components/peliculas/nuevapelicula/nuevapelicula.component').then((m)=>m.NuevapeliculaComponent)
      },
      {
        path: 'editarpeliculas/:peliculas_id',
        loadComponent: () => import('./components/peliculas/nuevapelicula/nuevapelicula.component').then((m)=>m.NuevapeliculaComponent)
      },
      {
        path: 'valoracion',
        loadComponent: () => import('./components/valoracion/valoracion.component').then((m)=>m.ValoracionComponent)
      },
      {
        path: 'rol',
        loadComponent: () => import('./components/rol/rol.component').then((m)=>m.RolComponent)
      },
      
      {
        path: 'nuevorol',
        loadComponent: () => import('./components/rol/nuevorol/nuevorol.component').then((m)=>m.NuevorolComponent)
      },
      
      {
        path: 'editarrol',
        loadComponent: () => import('./components/rol/nuevorol/nuevorol.component').then((m)=>m.NuevorolComponent)
      },
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
