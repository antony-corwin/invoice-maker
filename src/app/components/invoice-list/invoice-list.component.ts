import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IInvoice, InvoiceService, ISeller} from "../../services/invoice.service";
import {Observable} from "rxjs";
import {DataSource} from "@angular/cdk/collections";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceListComponent implements OnInit {

  public invoices: Observable<IInvoice[]>;
  public sellers: Observable<ISeller[]>;

  public sellersControl = new FormControl();
  public sellersList: ISeller[];

  constructor(private invoiceService: InvoiceService) {
    this.invoices = this.invoiceService.filteredInvoices$;
    this.sellers = this.invoiceService.sellers$;
    this.sellersList = this.invoiceService.sellers;
    this.sellersControl.setValue(this.sellersList);
  }

  ngOnInit(): void {
   this.invoiceService.getSelectedSellers();
  }

  // onAddInvoice(invoice: IInvoice) {
  //   this.invoiceService.addInvoice(invoice);
  // }


  onRemoveInvoice(invoice: IInvoice) {
    this.invoiceService.removeInvoice(invoice);
  }

  onFilterSellers() {
    const filteredInvoices = this.invoiceService.filterInvoices(this.sellersControl.value);
    console.log(filteredInvoices)
  }
}
