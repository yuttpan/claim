import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';



import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw';

import { Item } from "./model/item";
import { pttypeMain } from "./model/itemdata";
import { Feedback } from "./model/feedback";
@Injectable()
export class DebtServiceService {
public feedback : Feedback ;
  constructor(public http: Http) {
    console.log('debt')
  }

  getDebt(): Observable<Item[]> {
    return this.http.get('http://118.175.76.244/buayai_api/pttype.php')
      .map((res) => <Item[]>res.json());
  }

  getdebteDetail(pttype: string): Observable<Item[]> {
    return this.http.get('http://118.175.76.244/buayai_api/pttype_detail.php?pttype=' + pttype)
      .map((res) => <Item[]>res.json());
  }
  getPttypeMain(): Observable<pttypeMain[]> {
    return this.http.get('http://118.175.76.244/buayai_api/pttypemain.php')
      .map((res) => <pttypeMain[]>res.json());
  }
  

  Adddebt(ptmain:string,pttype:string) {

   return this.http.post('http://118.175.76.244/buayai_api/update_pttype.php',{pt:ptmain,pttype:pttype}).map(res =>res.json());
  }
    
  
 


}
