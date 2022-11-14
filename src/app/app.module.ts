import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaixaScrowComponent } from './cei-caixa-scrow/caixa-scrow/caixa-scrow.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaScrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
