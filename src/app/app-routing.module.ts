import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AspectosEticosLegalesComponent } from './pages/aspectos-eticos-legales/aspectos-eticos-legales.component';
import { EstandaresManejoInfoComponent } from './pages/estandares-manejo-info/estandares-manejo-info.component';
import { AvisoPrivacidadComponent } from './pages/aviso-privacidad/aviso-privacidad.component';
import { LeyesCodigosComponent } from './pages/leyes-codigos/leyes-codigos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'aspectos-eticos-legales', component: AspectosEticosLegalesComponent },
  { path: 'estandares-manejo-info', component: EstandaresManejoInfoComponent },
  { path: 'leyes-codigos', component: LeyesCodigosComponent},
  { path: 'aviso-privacidad', component: AvisoPrivacidadComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
