import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface SwapiRequest {
  count: number;
  next: string;
  previous: string;
  results: any[];
}

@Component({
  selector: 'app-swapi-request',
  templateUrl: './swapi-request.component.html',
  styleUrls: ['./swapi-request.component.css']
})
export class SwapiRequestComponent implements OnInit {

  swapiRequest!: SwapiRequest;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://swapi.dev/api/people').subscribe((data : any) => {
      console.log(data);
      this.swapiRequest = data;
    });
  }

  getNextPage() {
    this.http.get(this.swapiRequest.next).subscribe((data : any) => {
      console.log(data);
      this.swapiRequest = data;
    });
  }

  getPreviousPage() {
    this.http.get(this.swapiRequest.previous).subscribe((data : any) => {
      console.log(data);
      this.swapiRequest = data;
    });
  }

}
