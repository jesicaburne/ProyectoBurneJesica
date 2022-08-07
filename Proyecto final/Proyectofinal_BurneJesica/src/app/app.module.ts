import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { RedesComponent } from './components/redes/redes.component';
import { FondoComponent} from './components/fondo/fondo.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    LogoapComponent,
    AcercaDeComponent,
    RedesComponent,
    FondoComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
