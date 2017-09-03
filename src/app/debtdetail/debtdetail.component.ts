import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DebtServiceService } from "../debt-service.service";
import { Item } from "../model/item";

@Component({
  selector: 'app-debtdetail',
  templateUrl: './debtdetail.component.html',
  //template: 'Component Two with route param <b><code>ID: {{ pttype }}</code></b>',
  styleUrls: ['./debtdetail.component.css']
})
export class DebtdetailComponent implements OnInit {
  private pttype:string ;
  private parm: any;
  private items:Item[];
  //public userId:string;
  private  myModel = {
    username: 'poweruser'
  }

  constructor(private Route: ActivatedRoute,public DebtServiceService: DebtServiceService) { }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      this.pttype = params['pttype'];
      console.log(this.pttype);
    });
    
    this.DebtServiceService.getdebteDetail(this.pttype).subscribe((res) => this.items = res);
    console.log(this.items) ;
  }




}
