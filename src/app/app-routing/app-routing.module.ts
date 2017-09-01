
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from "../app.component";
import { MainComponent } from "../main/main.component";
import { EclaimComponent } from "../eclaim/eclaim.component";
import { SettingComponent } from "../setting/setting.component";
import { PttypeComponent } from "../pttype/pttype.component";
import { DebtComponent } from "../debt/debt.component";

//import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
 
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',  component: MainComponent },
  { path: 'eclaim', component: EclaimComponent },
  { path: 'setting', component: DebtComponent }
];
@NgModule({
  
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
