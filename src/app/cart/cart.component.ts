import {Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState} from "../store/app.state";
import { loadCart } from "./store/cart.actions";
import {selectedUserCart} from "./store/cart.selectors";
import {CartModel} from "../shared/models/cart.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  public userCart$ = this.store.select(selectedUserCart);
  private subscription = new Subscription();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCart())
    this.subscription.add(
      this.userCart$.subscribe(data => {
        console.log(data)
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
