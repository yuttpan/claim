import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EclaimComponent } from './eclaim/eclaim.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { SettingComponent } from './setting/setting.component';
import { PttypeService } from "./pttype.service";
import { PttypeComponent } from './pttype/pttype.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EclaimComponent,
    SettingComponent,
    PttypeComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule
    
  ],
  providers: [PttypeService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
