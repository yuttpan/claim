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
  pttypes: Pttype[];
  constructor(  private pttypeservice:PttypeService ,
    private router: Router) { }

    getHeroes(): void {
      this.pttypeservice
          .getpttype
          .then(pttypes[] => this.data = pttypes);
    }
  ngOnInit() {
  }

}
