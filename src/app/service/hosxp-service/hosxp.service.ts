import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { opdHos } from "../../model/opdhos";
@Injectable()
export class HosxpService {
public dataPost : any ;
  constructor(public http:Http) { }

  gethosopd(dataPost): Observable<opdHos[]> {
    return this.http.post('http://118.175.76.244/buayai_api/getOpdhos.php',dataPost).map(res =>res.json());
  }

}
