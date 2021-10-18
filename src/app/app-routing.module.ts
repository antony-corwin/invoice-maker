import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from "./components/invoice-list/invoice-list.component";
import {InvoicePreviewComponent} from "./components/invoice-preview/invoice-preview.component";
import {InvoiceFormComponent} from "./components/invoice-form/invoice-form.component";

const routes: Routes = [
  {
    path: '',
    component: InvoiceListComponent
  },
  {
    path: 'invoice/new',
    component: InvoiceFormComponent
  },
  {
    path: 'invoice/:number',
    component: InvoicePreviewComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
