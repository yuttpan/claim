import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EclaimComponent } from './eclaim/eclaim.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EclaimComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
