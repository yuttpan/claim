import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Debtor } from "../../model/debtor";

@Injectable()
export class DebtorService {
public debtor : Debtor ;
  constructor(public http:Http) {console.log('debtor'); }


  getDebtor(): Observable<Debtor[]> {
    return this.http.get('http://118.175.76.244/buayai_api/getDebtor.php')
      .map((res) => <Debtor[]>res.json());
  }


}
