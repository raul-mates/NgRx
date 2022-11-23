import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CartModel} from "../shared/models/cart.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart(): Observable<CartModel> {
    return this.http.get<CartModel>('https://eoyp18z4p5njw02.m.pipedream.net/');
  }
}
