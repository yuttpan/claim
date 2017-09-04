import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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

//name: FormControl;
  public pttype:string ;
  public parm: any;
  public items:Item[];
  public pttypemain : pttypeMain[] ;
  //public pt :string ;
  public loginForm = this.fb.group({
    pttypeMain: ["", Validators.required],
  //  pt: ["", Validators.required],
    email : ["", Validators.required],
    password : ["", Validators.required],
  });
public data : any ;


  constructor(private Route: ActivatedRoute,public DebtServiceService: DebtServiceService,public fb:FormBuilder,) { }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      this.pttype = params['pttype'];
      console.log(this.pttype);
    });
    
    this.DebtServiceService.getdebteDetail(this.pttype).subscribe((res) => this.items = res);
    this.DebtServiceService.getPttypeMain().subscribe((res) => this.pttypemain = res);
    
  }
  
  Adddebt():void {
    console.log(event);
    console.log(this.loginForm.value);
    this.data = {
        'pt' : this.pttype
       // 'pttypemain' : this.loginForm.value
    }
  

  }


}
