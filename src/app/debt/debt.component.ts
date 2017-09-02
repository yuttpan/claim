import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DebtServiceService } from "../debt-service.service";
import { Item } from "../model/item";


@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {
items : Item[];
selectedItem: Item[];
  constructor(public DebtServiceService: DebtServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getDebt();
   

  }

  getDebt():void{
    this.DebtServiceService.getDebt().subscribe((res) => this.items = res);
    
  }
  
  gotoDetail(): void {
    this.router.navigate(['/debtDetail']);
  }
}
