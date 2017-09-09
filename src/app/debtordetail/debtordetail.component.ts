import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { DebtorService } from "../service/deb-service/debtor.service";

import { Debtordetail } from "../model/debtordetail";
import { pttypeMain } from "../model/itemdata";
import { Feedback } from "../model/feedback";
@Component({
  selector: 'app-debtordetail',
  templateUrl: './debtordetail.component.html',
  styleUrls: ['./debtordetail.component.css']
})
export class DebtordetailComponent implements OnInit {
public debtordetail : Debtordetail[];
public parm: any;
public id : string;
public pttypemain :pttypeMain[];
public data : any ;
public pttype:string ;
public ptmain:string ;
  constructor(private route : ActivatedRoute,private router : Router ,private debtorservice : DebtorService) { }

  ngOnInit() {
    this.route.params.subscribe((parm : Params) => {
      this.id = parm['id'];
      console.log(this.id);
    });

    this.debtorservice.getdebtorDetail(this.id).subscribe((res) => this.debtordetail = res);
    console.log(this.debtordetail)
    this.debtorservice.getPttypeMain().subscribe((res) => this.pttypemain = res);
  }

  Adddebt(ptmain):void {
    
       let pttypes =this.id ;
      //let ptmain = this.ptmain ;
     
     this.debtorservice.Adddebt(ptmain,pttypes).subscribe(
       (data) => {
           this.data = data
           if (data.status=='ok'){
             alert(data.message);
             this.router.navigate(['/debtor']);
           }else{
            alert(data.message);
           }
           
          
       },
       (error) => console.log(error)
 
       
     )
    
 
   }
}
