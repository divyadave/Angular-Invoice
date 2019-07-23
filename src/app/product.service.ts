import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Iinvoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _products: IProduct[] = [];
  _invoice: Iinvoice[] = [];
 
  constructor() { }

  async addProduct(product: IProduct) {
   const duplicateName = this._products.find(el => el.productName === product.productName)
   if(duplicateName) {
     throw Error('Duplicate Product Name Exists');
   }

    const newId = this._products.length + 1;
    this._products.push({
      id: newId,
      productName: product.productName,
      price: product.price,
      qty: product.qty

    });
  console.log('Product Created', this._products);
  return this._products;
  }
  get productList() {
    return this._products;
  }
  deleteProduct(id: number) {
    const foundId = this._products.findIndex(el => el.id === id)
    this._products.splice(foundId, 1);
    return this._products;
  }
  editProduct(id: number, product: IProduct) {
    const foundId = this._products.findIndex(el=> el.id === id)
    console.log('FoundIndex', foundId)
    if(foundId > -1) {
      this._products[foundId].productName = product.productName,
      this._products[foundId].price = product.price,
      this._products[foundId].qty = product.qty
      console.log('Final Edited Values', this._products);
    }
    else {
      return this._products;

    }
   
  }
  addInvoiceItems() {
    

  }

  
}
