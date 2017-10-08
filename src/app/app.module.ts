import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,NgModel }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//inport component
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EclaimComponent } from './eclaim/eclaim.component';
import { SettingComponent } from './setting/setting.component';
import { PttypeService } from "./pttype.service";
import { DebtComponent } from './debt/debt.component';
import { DebtdetailComponent } from './debtdetail/debtdetail.component';
import { DebtorComponent } from './debtor/debtor.component';
import { DebtordetailComponent } from './debtordetail/debtordetail.component';
import { HosxpopdComponent } from './hosxpopd/hosxpopd.component';
//import routing
import { AppRoutingModule } from "./app-routing/app-routing.module";
//import Serviceprovider
import { DebtServiceService } from "./debt-service.service";
import { DebtorService } from "./service/deb-service/debtor.service";
import { HosxpService } from "./service/hosxp-service/hosxp.service";
import { OpdhosDetailComponent } from './opdhos-detail/opdhos-detail.component';

 
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
    HosxpopdComponent,
    OpdhosDetailComponent,
  ],
 
  providers: [PttypeService,DebtServiceService,DebtorService,HosxpService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
