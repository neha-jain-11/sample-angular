import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  id: number;
  data: object = {};
  products = [];
  productObj: object = {};
  exist: Boolean = false;

  updateProduct (product) {
    this.productObj = {
      'name': product.name1,
      'color': product.color1
    };

    const url = `http://localhost:5555/products/${this.id}`;
    this.http.put(url, this.productObj)
    .toPromise()
    .then(() => {
      this.router.navigate(['/']);
    });    
  }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    this.http.get('http://localhost:5555/products').subscribe(
      (res: Response) => {
        this.products = res.json();
        for (var i=0; i < this.products.length; i++) {
          if (parseInt(this.products[i].id) === this.id) {
            this.data = this.products[i];
            this.exist = true;
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
