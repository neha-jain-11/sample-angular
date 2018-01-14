import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }

  confirmationMessage: string = 'New product has been added';
  isAdded: boolean = false;

  productObj:object = {};

  addNewProduct(product) {  
    this.productObj = {
      'name': product.name1,
      'color': product.color1
    };

    this.http.post('http://localhost:5555/products/', this.productObj).subscribe(
      (resp: Response) => {
        this.isAdded = true;
      }
    )
  }
  ngOnInit() {
  }

}
