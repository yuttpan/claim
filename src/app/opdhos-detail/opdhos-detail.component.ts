import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-opdhos-detail',
  templateUrl: './opdhos-detail.component.html',
  styleUrls: ['./opdhos-detail.component.css']
})
export class OpdhosDetailComponent implements OnInit {
public param : any ;
  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //this.pttype = params['pttype'];
      console.log(params);
    });
  }

}
