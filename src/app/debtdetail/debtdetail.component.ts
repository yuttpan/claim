import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DebtServiceService } from "../debt-service.service";
import { Item } from "../model/item";
import { pttypeMain } from "../model/itemdata";

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
  private pttypemain : pttypeMain[] ;
  //public userId:string;
  public  myModel = {
    
  }


  constructor(private Route: ActivatedRoute,public DebtServiceService: DebtServiceService) { }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      this.pttype = params['pttype'];
      console.log(this.pttype);
    });
    
    this.DebtServiceService.getdebteDetail(this.pttype).subscribe((res) => this.items = res);
    this.DebtServiceService.getPttypeMain().subscribe((res) => this.pttypemain = res);
   
  }




}
