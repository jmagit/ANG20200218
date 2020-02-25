import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DemosComponent } from './demos/demos.component';
import { CommonServicesModule } from './common-services';
import { MainModule } from './main';

@NgModule({
  declarations: [
    AppComponent,
    NovedadesComponent,
    DetalleComponent,
    DemosComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    AppRoutingModule,
    CommonServicesModule, MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
