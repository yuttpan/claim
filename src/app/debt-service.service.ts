import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormGroup,FormBuilder,FormControl }   from '@angular/forms';


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
  

  Adddebt(pttype:string,ptmain:string):Observable<Feedback> {
    let myHeader = new Headers();
    myHeader.append('Content-Type','application/json');

    let body = {
      'pttype': pttype,
      'ptmain': ptmain
    }
    return this.http.post('http://118.175.76.244/buayai_api/update_pttype.php', body, myHeader)
    .map((res:Response) => <Feedback[]> res.json())
    .catch(this.handleError);
  }
 
  private handleError(error:any){
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผิดพลาด');
  }



}
