
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from "../app.component";
import { MainComponent } from "../main/main.component";
import { EclaimComponent } from "../eclaim/eclaim.component";
import { SettingComponent } from "../setting/setting.component";
import { OpdhosDetailComponent } from "../opdhos-detail/opdhos-detail.component";

import { DebtComponent } from "../debt/debt.component";
import { DebtdetailComponent } from "../debtdetail/debtdetail.component";
import {DebtorComponent  } from "../debtor/debtor.component";
import { DebtordetailComponent } from "../debtordetail/debtordetail.component";
import { HosxpopdComponent } from "../hosxpopd/hosxpopd.component";
//import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
 
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',  component: MainComponent },
  { path: 'eclaim', component: EclaimComponent },
  { path: 'setting', component: DebtComponent },
  { path: 'debtDetail/:pttype', component: DebtdetailComponent },
  {path: 'debtor',component : DebtorComponent},
  {path: 'debtorDetail/:id',component : DebtordetailComponent},
  {path: 'hosxpopd',component : HosxpopdComponent},
  {path: 'hosdetail/:debt_code/:debt_id/:date1/:date2',component : OpdhosDetailComponent}
];
@NgModule({
  
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
