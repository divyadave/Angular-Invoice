import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent} from './product-form/product-form.component';

const routes: Routes = [
  {path:'invoice', component: InvoiceComponent },
  {path: 'list', component: ProductListComponent },
  {path: '', component: ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
