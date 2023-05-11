import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RespuestasComponent } from './respuestas/respuestas.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'respuesta', component: RespuestasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
