import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InvoiceListModule} from "./components/invoice-list/invoice-list.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InvoicePreviewModule} from "./components/invoice-preview/invoice-preview.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoiceListModule,
    InvoicePreviewModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
