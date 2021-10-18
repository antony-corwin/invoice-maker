import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface ISeller {
  id: number;
  name: string;
  address: string;
}

export interface IInvoice {
  invoiceNumber: number;
  issueDate: Date;
  seller: ISeller;
  invoiceAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private _invoices: IInvoice[] = [];
  invoices$: BehaviorSubject<IInvoice[]>;

  private _filteredInvoices: IInvoice[] = [];
  filteredInvoices$: BehaviorSubject<IInvoice[]>;

  private readonly _sellers: ISeller[] = [];
  sellers$: BehaviorSubject<ISeller[]>;

  public get invoices() {
    return this.invoices$.getValue();
  }

  public get sellers() {
    return this.sellers$.getValue();
  }

  constructor() {
    this._sellers = SELLERS;
    this._invoices = JSON.parse(localStorage.getItem('invoices')!) || [];
    this._filteredInvoices = [...this._invoices]
    this.invoices$ = new BehaviorSubject(this._invoices);
    this.filteredInvoices$ = new BehaviorSubject(this._filteredInvoices);
    this.sellers$ = new BehaviorSubject(this._sellers);
  }

  public getInvoice(number: number): IInvoice | undefined {
    return this.invoices$.getValue().find(el => el.invoiceNumber === number);
  }

  public getSelectedSellers() {
    let selectedSellers: ISeller[] = [];

    this._filteredInvoices.forEach(invoice => {
      if (selectedSellers.length !== 0) {
        console.log(selectedSellers.find((seller: ISeller) => seller.id === invoice.seller.id))

      }
    })
    return selectedSellers;
  }

  public addInvoice(invoice: IInvoice) {
    this._invoices.push(invoice);
    localStorage.setItem('invoices', JSON.stringify(this._invoices));
    this.invoices$.next(Object.assign([], this._invoices));
    this.filterInvoices();
  }

  public removeInvoice(invoice: IInvoice) {
    this._invoices = [...this._invoices.filter(el => el.invoiceNumber !== invoice.invoiceNumber)];
    localStorage.setItem('invoices', JSON.stringify(this._invoices));
    this.invoices$.next(Object.assign([], this._invoices));
    this.filterInvoices();
  }

  public filterInvoices(selectedSellers?: ISeller[]) {
    if (selectedSellers) {
      let filteredInvoices: IInvoice[] = [];
      selectedSellers.forEach(seller => {
        filteredInvoices.push(...[...this._invoices].filter((invoice: IInvoice) => invoice.seller.id === seller.id));
      })
      this._filteredInvoices = filteredInvoices;
      this.filteredInvoices$.next(Object.assign([], this._filteredInvoices));
    } else {
      this._filteredInvoices = [...this._invoices];
      this.filteredInvoices$.next(Object.assign([], this._filteredInvoices));
    }
  }
}

export const SELLERS = [
  {
    id: 1,
    name: 'SellerName1',
    address: 'SellerAddress1'
  },
  {
    id: 2,
    name: 'SellerName2',
    address: 'SellerAddress2'
  },
  {
    id: 3,
    name: 'SellerName3',
    address: 'SellerAddress3'
  },
  {
    id: 4,
    name: 'SellerName4',
    address: 'SellerAddress4'
  },
  {
    id: 5,
    name: 'SellerName5',
    address: 'SellerAddress5'
  },
  {
    id: 6,
    name: 'SellerName6',
    address: 'SellerAddress6'
  },
  {
    id: 7,
    name: 'SellerName7',
    address: 'SellerAddress7'
  },
  {
    id: 8,
    name: 'SellerName8',
    address: 'SellerAddress8'
  },
  {
    id: 9,
    name: 'SellerName9',
    address: 'SellerAddress9'
  },
  {
    id: 10,
    name: 'SellerName10',
    address: 'SellerAddress10'
  }
];
