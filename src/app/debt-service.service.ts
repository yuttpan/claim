import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Item } from "./model/item";

@Injectable()
export class DebtServiceService {

  constructor( public http : Http) { 
    console.log('debt')
  }

  getDebt():Observable<Item[]>{
    return this.http.get('http://118.175.76.244/api/pttype.php')
    .map((res) => <Item[]> res.json());
  }

  getdebteDetail(pttype:string):Observable<Item[]>{
    return this.http.get('http://118.175.76.244/api/pttype_detail.php?pttype='+pttype)
    .map((res) => <Item[]> res.json());
  }

}
