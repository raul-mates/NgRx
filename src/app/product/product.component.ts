import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {loadProducts} from "./store/product.actions";
import {selectAllProducts} from "./store/product.selectors";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public allProducts$ = this.store.select(selectAllProducts);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log(this.allProducts$)
    this.store.dispatch(loadProducts())
  }
}
