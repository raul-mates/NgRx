import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";
import {deleteProduct, loadProducts} from "./store/product.actions";
import {selectAllProducts} from "./store/product.selectors";
import {debounce, Subscription} from "rxjs";
import {ProductModel} from "../shared/models/product.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  public allProducts$ = this.store.select(selectAllProducts);
  products: ProductModel[] = [];
  clonedProducts: ProductModel[] = [];
  formGroup: FormGroup | undefined;
  searchText: string = '';

  private subscription = new Subscription();
  filters = [
    {
      'name': 'Category',
      'formName': 'category',
      'options': ['rings', 'bracelets', 'earrings', 'all']
    },
    {
      'name': 'Colors',
      'formName': 'color',
      'options': ['gold', 'silver', 'pink', 'blue', 'green', 'all']
    }
  ];

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initialiseForm();
    this.initialiseProducts();
    this.onCategoryOrColorChange();
    this.store.dispatch(loadProducts())
  }

  initialiseForm(): void {
    this.formGroup = this.fb.group({
      filterByCategory: 'all',
      filterByColors: 'all'
    })
  }

  initialiseProducts(): void {
    this.subscription.add(
      this.allProducts$.subscribe(data => {
        this.products = data;
        this.clonedProducts = [...this.products];
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeProduct(id: any) {
    this.store.dispatch(deleteProduct({id}))
  }

  onSearch(input: string) {
    this.searchText = input;
    this.filterProducts();
  }

  get filterByCategory() {
    return this.formGroup?.get('filterByCategory') as FormControl;
  }

  get filterByColors() {
    return this.formGroup?.get('filterByColors') as FormControl;
  }

  checkFilter({ value }: FormControl, productValue: string) {
    return value === 'all' || productValue === value;
  }

  checkTitle(productTitle: string) {
    return productTitle.toLowerCase().includes(this.searchText.toLowerCase());
  }

  filterProducts() {
    this.clonedProducts = this.products.filter(product => (
        this.checkFilter(this.filterByCategory, product.category) &&
        this.checkFilter(this.filterByColors, product.color) &&
        this.checkTitle(product.title))
    )
  }

  onCategoryOrColorChange() {
    this.subscription.add(
      this.formGroup?.valueChanges.subscribe(() => {
        this.filterProducts();
      })
    )
  }
}
