import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { opdHos } from "../../model/opdhos";
import { Opddetail } from "../../model/opddetail";
@Injectable()
export class HosxpService {
public dataPost : any ;
public dataParm : any ;
  constructor(public http:Http) { }

  gethosopd(dataPost): Observable<opdHos[]> {
    return this.http.post('http://118.175.76.244/buayai_api/getOpdhos.php',dataPost).map(res =>res.json());
  }

  getopddetail(dataParam): Observable<Opddetail[]> {
    return this.http.post('http://118.175.76.244/buayai_api/getopddetail.php',dataParam).map(res =>res.json());
  }

}
