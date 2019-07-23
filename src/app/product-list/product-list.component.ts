import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../product';
import { ProductService} from '../product.service';
declare var UIkit: any;


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product: IProduct[] = [];
  selectedProduct: IProduct;
  selectedEditProduct: IProduct;
  @Output() passData: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private productService: ProductService) {
    this.product = this.productService.productList;

    
   }

  ngOnInit() {
  }
  read(product: IProduct) {
    this.selectedProduct= product;

  }
  delete(id: number) {
    this.product = this.productService.deleteProduct(id);
    UIkit.notification({message:'Product Deleted Successfully', status: 'danger'});

  }
  edit(data: IProduct) {
    this.selectedEditProduct = data;
    this.passData.emit(this.selectedEditProduct);
  }

}
