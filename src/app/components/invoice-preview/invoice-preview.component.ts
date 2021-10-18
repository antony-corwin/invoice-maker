import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {IInvoice, InvoiceService} from "../../services/invoice.service";

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss']
})
export class InvoicePreviewComponent implements OnInit {

  public invoiceNumber: number | undefined;
  public invoice: IInvoice | undefined;

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.invoiceNumber = +params.number;
      this.invoice = this.invoiceService.getInvoice(this.invoiceNumber);
      console.log('invoice', this.invoice)
    });
  }
}
