


import { PdfComponent } from './componentes/pdf/pdf.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './componentes/add/add.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { DownloadComponent } from './shared/download/download.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListaComponent,
    PdfComponent,
    DownloadComponent,


  ],
  imports: [
 BrowserModule,
 HttpClientModule,
 FormsModule,
 AppRoutingModule,
 NgbModule,
 BrowserAnimationsModule,
 MaterialModule,



  ],
  exports: [
    PdfComponent,
    DownloadComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
