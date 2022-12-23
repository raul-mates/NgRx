import {Component, OnInit} from '@angular/core';
import {selectedUserCart} from "./store/cart.selectors";
import {Subscription} from "rxjs";
import {CartModel} from "../shared/models/cart.model";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {loadCart} from "./store/cart.actions";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public userCart$ = this.store.select(selectedUserCart);
  private subscription = new Subscription();
  userCart: CartModel | null = null;
  cartTotal: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCart())
    this.subscription.add(
      this.userCart$.subscribe(data => {
        this.userCart = data;
        data.items.forEach(item => {
          this.cartTotal += +(item.price.currentPrice.replace('EUR', ''));
        })
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
