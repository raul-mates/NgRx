import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Subject} from "rxjs";

@Component({
  selector: 'app-the-nav',
  templateUrl: './the-nav.component.html',
  styleUrls: ['./the-nav.component.scss']
})
export class TheNavComponent implements OnInit {
  input = new Subject<string>()

  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {
  }

  onAddProductClick(element: HTMLAnchorElement) {
    this.router.navigate(["/product-form"])
    if (element.innerText === 'Add Product') {
      element.innerText = 'Back';
    } else {
      element.innerText = 'Add Product';
      this.router.navigate(["/product-list-page"]);
    }
  }

  userInputValue(input: HTMLInputElement) {
    this.input.next(input.value)
  }
}
