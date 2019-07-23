import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormsModule, FormControl, Validators } from '@angular/forms';
import { IProduct } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, OnDestroy {
  invoiceForm: FormGroup;
  product: IProduct[] = [];
  j: number;
  total: number = 0;
  subTotal: any;
  taxRate: number = (18 / 100) * 100;
  totalTax: number;
  grantTotal: number;
  discountRate: number = (50 / 100) * 100;
  

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.product = this.productService.productList;
    console.log(this.product);
   }

  ngOnInit() {
    this.j = 0;
    this.invoiceForm = this.fb.group({

      invoiceItems: this.fb.array([this.ItemsRows()])

    });
    this.invoiceForm.valueChanges.subscribe(value => {
      console.log('SubTotal Value', value);
      this.subTotal = value.invoiceItems.reduce((sum, item) => sum += (item.qty || 0) * (item.price || 0) ,0)
   });
   this.invoiceForm.valueChanges.subscribe(value => {
     this.totalTax = value.invoiceItems.reduce((sum, item) => sum += (this.taxRate * this.subTotal), 0)
   });
   this.invoiceForm.valueChanges.subscribe(value => {
     this.grantTotal = value.invoiceItems.reduce((sum , item) => sum += (this.totalTax + this.subTotal),0)
   });
   console.log('Values', this.invoiceForm.controls);
   
  }
  ngOnDestroy() {
    this.subTotal.unsubscribe();
  }
  ItemsRows() {
    return this.fb.group({
      invoiceSelect: new FormControl(""),
      qty: new FormControl("", Validators.max(10)),
      price: new FormControl("")
      

    });
  }
  get invoiceItems() {
    return this.invoiceForm.controls.invoiceItems as FormArray;

  } 
 /*  get qty() {
    return this.invoiceItems.controls[0].get('qty').value;
  }
  get price() {
    return this.invoiceItems.controls[0].get('price').value;
  }  */
  get invoiceControls() {
    return console.log('Values', this.invoiceForm.controls.invoiceItems.get('InvoiceSelect'));
    
  }

  addItems() {
    this.invoiceItems.push(this.ItemsRows());
    /* console.log(this.invoiceItems.value.reduce((accumulator, currentValue) => console.log(currentValue))) */
    
  } 

 /*  onChange(event) {
    this.j = event;

} */
removeItems(item) {
  let i = this.invoiceItems.controls.indexOf(item);
  if(i != -1) {
    this.invoiceItems.controls.splice(i, 1);
    this.subTotal = 0;
    this.totalTax = 0;
    this.grantTotal = 0;
  }

}
dropChange() {
  this.invoiceForm.controls.invoiceItems.get('InvoiceSelect').valueChanges
  }



}


