import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { addProduct } from "../store/product.actions";
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../../shared/models/product.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  newProductForm = new FormGroup({
    image: new FormControl(''),
    modelShot: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    color: new FormControl(''),
    category: new FormControl(''),
    price: new FormGroup({
      currentPrice: new FormControl(''),
      oldPrice: new FormControl('')
    })
  })

  constructor(private store: Store, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onAddProductClicked() {
    this.store.dispatch(addProduct({ productDetails: (this.newProductForm.value as ProductModel) }))
  }
}
