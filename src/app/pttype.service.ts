import { Injectable } from '@angular/core';
import { Headers, Http,Response  } from '@angular/http';

import 'rxjs/add/operator/map';
import { Pttype } from "./model/pttype";

@Injectable()
export class PttypeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://118.175.76.244/api/pttype.php';  // URL to web api
  constructor(private http: Http) { }
  getpttype() {
    return this.http.get(`http://118.175.76.244/api/pttype.php`)
    .map((res:Response) => res.json());
  }
  
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
