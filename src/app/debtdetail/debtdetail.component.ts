import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
//import { FormBuilder, Validators } from '@angular/forms';

import { DebtServiceService } from "../debt-service.service";
import { Item } from "../model/item";
import { pttypeMain } from "../model/itemdata";
import { Feedback } from "../model/feedback";

@Component({
  selector: 'app-debtdetail',
  templateUrl: './debtdetail.component.html',
  //template: 'Component Two with route param <b><code>ID: {{ pttype }}</code></b>',
  styleUrls: ['./debtdetail.component.css']
})
export class DebtdetailComponent implements OnInit {

//name: FormControl;
  public pttype:string ;
  public parm: any;
  public items:Item[];
  public pttypemain : pttypeMain[] ;
  //public pt :string ;
  public ptmain:string ;
public data : any ;
public feedback : Feedback;

  constructor(private Route: ActivatedRoute,public DebtServiceService: DebtServiceService,) { }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      this.pttype = params['pttype'];
      console.log(this.pttype);
    });
    
    this.DebtServiceService.getdebteDetail(this.pttype).subscribe((res) => this.items = res);
    this.DebtServiceService.getPttypeMain().subscribe((res) => this.pttypemain = res);
    
  }
  
  Adddebt(ptmain):void {
   
      let pttype =this.pttype ;
     //let ptmain = this.ptmain ;
    
    this.DebtServiceService.Adddebt(pttype,ptmain).subscribe((res) => this.feedback = res);
   //console.log(this.feedback);
  console.log(ptmain);
  console.log(this.pttype);

  }


}
