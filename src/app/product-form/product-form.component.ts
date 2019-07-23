import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { IProduct } from '../product';
import { ProductService} from '../product.service';
declare var UIkit: any;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  products: IProduct[] = [];
  isEditData: boolean = false;
  selectedProduct: IProduct;
  editData: IProduct;
  productId: number;
  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      qty: ['', Validators.required]
    });
    
   /*  this.initForm(); */
    
  }
  /* ngOnChanges(changes: SimpleChanges) {
    if(changes.editData.currentValue !== changes.editData.previousValue) {
      if(this.editData) {
        console.log('Edit Check', this.editData);
        this.editCheck();
      }
      else {
        this.productForm.reset();
      }
      
    }
  } */
  /* initForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      qty: ['', Validators.required]
    });
    this.editCheck();
  } */
 async addProduct() {
   if(this.isEditData) {
     this.products = this.productService.editProduct(this.productId, this.productForm.value);
     UIkit.notification({ message: 'Products Edited Successfully', status: 'success'});
     this.productForm.reset();
     this.isEditData = false;
   }
   else {
    try{
    this.products = await this.productService.addProduct(this.productForm.value);
    UIkit.notification({ message: 'Product Created Successfully', status: 'success'});
    this.productForm.reset();
    }
    catch(error) {
    UIkit.notification({ message: 'Duplicate Product Name Exists', status: 'danger'});
    }
  }
  }
  displayEdit(event: IProduct) {
    
    this.editData = event;
    console.log('Edit Values', this.editData);
    this.editCheck();
    
  }
  private editCheck() {
    if(this.editData) {
      
      this.productId = this.editData['id'];

      this.isEditData = true;
      this.productForm.setValue({
        productName: this.editData.productName,
        price: this.editData.price,
        qty: this.editData.qty
      })
     

    }
    
  }


}
