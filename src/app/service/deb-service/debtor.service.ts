import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Debtor } from "../../model/debtor";
import { Debtordetail } from "../../model/debtordetail";
import { pttypeMain } from "../../model/itemdata";

@Injectable()
export class DebtorService {
//public debtor : Debtor ;
  constructor(public http:Http) {console.log('debtor'); }


  getDebtor(): Observable<Debtor[]> {
    return this.http.get('http://118.175.76.244/buayai_api/getDebtor.php')
      .map((res) => <Debtor[]>res.json());
  }
  getdebtorDetail(id: string): Observable<Debtordetail[]> {
    return this.http.get('http://118.175.76.244/buayai_api/getdebtor_detail.php?debt_code=' + id)
      .map((res) => <Debtordetail[]>res.json());
  }
  getPttypeMain(): Observable<pttypeMain[]> {
    return this.http.get('http://118.175.76.244/buayai_api/pttypemain.php')
      .map((res) => <pttypeMain[]>res.json());
  }

}
