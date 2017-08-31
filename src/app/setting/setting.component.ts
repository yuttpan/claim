import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Pttype } from "../model/pttype";
import { PttypeService } from "../pttype.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
 public Pttypes : Pttype[] ;
  public mraData: Array<{ pttype: string, name: string, debt_name: string}> = [];
  constructor(  private pttypeservice:PttypeService ,
    private router: Router) { }

    getPttype(): void {
      this.pttypeservice.getpttype().then( Pttypes => this.Pttypes= Pttypes)
         console.log(this.Pttypes)
    }
  ngOnInit():void {
    this.getPttype();
    console.log(this.mraData) ;
  }

}
