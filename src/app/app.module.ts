import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipePipe } from './pipes/contrasena-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  /*Este vatriable permite cambiar la configuracion del idioma*/
  providers: [{provide:LOCALE_ID,useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
