import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';





import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EclaimComponent } from './eclaim/eclaim.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { SettingComponent } from './setting/setting.component';
import { PttypeService } from "./pttype.service";
import { PttypeComponent } from './pttype/pttype.component';

@NgModule({
  imports: [
    BrowserModule,HttpModule,AppRoutingModule
    
  ],
  declarations: [
    AppComponent,
    MainComponent,
    EclaimComponent,
    SettingComponent,
    PttypeComponent,
  ],
 
  providers: [PttypeService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
