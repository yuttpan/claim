import { Component, OnInit } from '@angular/core';

import { DebtServiceService } from "../debt-service.service";
import { Item } from "../model/item";

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {
items : Item[];
  constructor(public DebtServiceService: DebtServiceService) { }

  ngOnInit() {
    this.getDebt();
   

  }

  getDebt():void{
    this.DebtServiceService.getDebt().subscribe((res) => this.items = res);
    
  }
}
