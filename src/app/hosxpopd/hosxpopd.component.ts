import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HosxpService } from "../service/hosxp-service/hosxp.service";
import { opdHos } from "../model/opdhos";
@Component({
  selector: 'app-hosxpopd',
  templateUrl: './hosxpopd.component.html',
  styleUrls: ['./hosxpopd.component.css']
})
export class HosxpopdComponent implements OnInit {
public bdate : Date ;
public edate :Date;
public opdhos :opdHos[] ;
  constructor(public hosxpservice : HosxpService) { }

  ngOnInit() {
  }

  private postdata(bdate,edate):void {
         let dataPost = {
           'date1' : bdate.value,
           'date2' : edate.value
         }
this.hosxpservice.gethosopd(dataPost).subscribe((res) => this.opdhos = res);

console.log(dataPost)

  }

}
