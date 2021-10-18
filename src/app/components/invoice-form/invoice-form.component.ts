import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IInvoice, InvoiceService, ISeller} from "../../services/invoice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent {

  private invoice: IInvoice;
  public invoiceData: FormGroup;
  public sellers: ISeller[];

  constructor(private router: Router, private fb: FormBuilder, private invoiceService: InvoiceService) {
    this.sellers = this.invoiceService.sellers;

    this.invoiceData = this.fb.group({
      invoiceDate: [Date,  Validators.required],
      invoiceNumber: ['', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7)])],
      seller: ['', Validators.required],
      invoiceAmount: ['', Validators.required]
    });

    this.invoice = {} as IInvoice;
  }

  onSave() {
    this.invoice = {
      invoiceNumber: this.invoiceData.value.invoiceNumber,
      issueDate: new Date(),
      seller: this.invoiceData.value.seller,
      invoiceAmount: this.invoiceData.value.invoiceAmount
    }

    this.invoiceService.addInvoice(this.invoice);
    this.router.navigate(['/']);
  }
}
