import { Component, OnInit } from '@angular/core';

//import { Pttype } from "../model/pttype";
import { PttypeService } from "../pttype.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
 //public Pttypes : Pttype[] ;
 // public mraData: Array<{ pttype: string, name: string, debt_name: string}> = [];
  constructor(  private pttypeservice:PttypeService) { }
  profile = [];
  
    getPttype(): void {
      this.pttypeservice.getpttype().subscribe(data => this.profile = data);
    }
  ngOnInit():void {
    this.getPttype();
   // console.log(this.profile) ;
  }

}
