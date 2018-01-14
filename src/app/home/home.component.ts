import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private http: Http) { }

  id: number;
  private headers = new Headers({
    'Conent-Type': 'application/json'
  });
  products = [];
  fetchData () {
    this.http.get('http://localhost:5555/products').subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )
  }
  deleteProduct (id) {
    if (confirm('Are you sure')) {
      const url = `http://localhost:5555/products/${id}`;
      console.log('url', url);
      return this.http.delete(url, {
        headers: this.headers
      }).toPromise().then( () => {
        this.fetchData();
      });
    }
  }
  ngOnInit() {
    this.fetchData();
  }

}
