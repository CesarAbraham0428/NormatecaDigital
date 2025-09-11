import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes del Core
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

// Componentes de Páginas
import { InicioComponent } from './pages/inicio/inicio.component';
import { AspectosEticosLegalesComponent } from './pages/aspectos-eticos-legales/aspectos-eticos-legales.component';
import { EstandaresManejoInfoComponent } from './pages/estandares-manejo-info/estandares-manejo-info.component';
import { AvisoPrivacidadComponent } from './pages/aviso-privacidad/aviso-privacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    // Componentes del Core
    FooterComponent,
    HeaderComponent,
    
    // Componentes de Páginas
    InicioComponent,
    AspectosEticosLegalesComponent,
    EstandaresManejoInfoComponent,
    AvisoPrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
