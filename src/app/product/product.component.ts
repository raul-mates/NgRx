import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {loadProducts} from "./store/product.actions";
import {selectAllProducts} from "./store/product.selectors";
import {Subscription} from "rxjs";
import {ProductModel} from "../shared/models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  public allProducts$ = this.store.select(selectAllProducts);
  products: ProductModel[] = [];
  private subscription = new Subscription();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts())
    this.subscription.add(
      this.allProducts$.subscribe(data => {
        this.products = data;
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
