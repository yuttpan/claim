import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,NgModel }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EclaimComponent } from './eclaim/eclaim.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { SettingComponent } from './setting/setting.component';
import { PttypeService } from "./pttype.service";

import { DebtServiceService } from "./debt-service.service";
import { DebtComponent } from './debt/debt.component';
import { DebtdetailComponent } from './debtdetail/debtdetail.component';
import { DebtorComponent } from './debtor/debtor.component';
import { DebtorService } from "./service/deb-service/debtor.service";
import { DebtordetailComponent } from './debtordetail/debtordetail.component';



@NgModule({
  imports: [
    BrowserModule,HttpModule, HttpClientModule,AppRoutingModule, FormsModule, ReactiveFormsModule,
    
  ],
  declarations: [
    AppComponent,
    MainComponent,
    EclaimComponent,
    SettingComponent,

    DebtComponent,
    DebtdetailComponent,
    DebtorComponent,
    DebtordetailComponent,
  ],
 
  providers: [PttypeService,DebtServiceService,DebtorService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
