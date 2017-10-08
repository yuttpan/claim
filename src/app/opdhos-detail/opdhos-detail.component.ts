import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";
import { HosxpService  } from "../service/hosxp-service/hosxp.service";
import { Opddetail } from "../model/opddetail";

@Component({
  selector: 'app-opdhos-detail',
  templateUrl: './opdhos-detail.component.html',
  styleUrls: ['./opdhos-detail.component.css']
})
export class OpdhosDetailComponent implements OnInit {
public param : any ;
public opddetail : Opddetail[] ;
  constructor(private route: ActivatedRoute,private hosxpservice : HosxpService) {
    
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.param = params ;
      console.log(this.param);

      this.hosxpservice.getopddetail(this.param).subscribe((res) =>this.opddetail = res) ;
      console.log(this.opddetail);
      
    });



  }

}
