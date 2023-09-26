import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { EducacionComponent } from './components/educacion/educacion.component';
// Router
const routes: Routes = [
  {path:'inicio', component: HomeComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'resumen', component: ResumenComponent},
  {path:'educacion', component: EducacionComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
