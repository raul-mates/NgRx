import { Injectable } from '@angular/core';
import {ProductModel} from "../shared/models/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://eo4m1cg8fz9onyw.m.pipedream.net/');
  }
}
