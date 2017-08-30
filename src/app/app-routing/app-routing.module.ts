
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from "../app.component";
import { MainComponent } from "../main/main.component";
import { EclaimComponent } from "../eclaim/eclaim.component";

//import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
 
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',  component: MainComponent },
  { path: 'eclaim', component: EclaimComponent }
];
@NgModule({
  
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
