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

  constructor(public http: Http) {
    console.log('debt')
  }

  getDebt(): Observable<Item[]> {
    return this.http.get('http://118.175.76.244/api/pttype.php')
      .map((res) => <Item[]>res.json());
  }

  getdebteDetail(pttype: string): Observable<Item[]> {
    return this.http.get('http://118.175.76.244/api/pttype_detail.php?pttype=' + pttype)
      .map((res) => <Item[]>res.json());
  }
  getPttypeMain(): Observable<pttypeMain[]> {
    return this.http.get('http://118.175.76.244/api/pttypemain.php')
      .map((res) => <pttypeMain[]>res.json());
  }
  /*public Adddebt(name: string): Observable<Feedback> {

    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    let data = {
      'name': name
    }

    return this.http.post('http://118.175.76.244/api/update_pttype.php', data, { headers: myHeader })
      .map((res: Response) => {
        let data = res.json();
        return data;
      }).catch(this.handleError);
  }*/

  public Adddebt(name):void{
    console.log(name)
  }

  private handleError(error:any){
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผิดพลาด');
  }



}
