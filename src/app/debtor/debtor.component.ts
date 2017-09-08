import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DebtorService } from "../service/deb-service/debtor.service";
import { Debtor } from "../model/debtor";
import { DebtordetailComponent } from "../debtordetail/debtordetail.component";


@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.css']
})
export class DebtorComponent implements OnInit {
public debtor : Debtor[] ;
  constructor(private router : Router,private debtorservice : DebtorService) { }

  ngOnInit() {
    this.getDebtor() ; 
  
  }
getDebtor():void{
  this.debtorservice.getDebtor().subscribe((res) => this.debtor = res);
  
}


}
