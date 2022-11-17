import { Injectable } from '@angular/core';
import {ProductModel} from "../shared/models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://eo4m1cg8fz9onyw.m.pipedream.net/');
  }
}
