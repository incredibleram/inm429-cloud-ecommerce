import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { StockComponent } from './stock/stock.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateLookupComponent } from './update-lookup/update-lookup.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-lookup-product', component: UpdateLookupComponent },
  { path: 'stock', component: StockComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'update-product', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
