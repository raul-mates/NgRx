import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";

const routes: Routes = [
  { path: 'product-list-page', component: ProductComponent },
  { path: 'product-form', component: ProductFormComponent },
  { path: '', redirectTo: "/product-list-page", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
