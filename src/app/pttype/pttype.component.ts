import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface ItemsResponse {
  results: string[];
}
@Component({
  selector: 'app-pttype',
  templateUrl: './pttype.component.html',
  styleUrls: ['./pttype.component.css']
})
export class PttypeComponent implements OnInit {

 public rs: string[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get<ItemsResponse>('http://118.175.76.244/api/pttype.php').subscribe(data => {
      // Read the result field from the JSON response.
      //console.log(data.results)
      this.rs = data.results;
      
    });
   
  }

}


