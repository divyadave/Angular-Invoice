import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-read-details',
  templateUrl: './product-read-details.component.html',
  styleUrls: ['./product-read-details.component.scss']
})
export class ProductReadDetailsComponent implements OnInit {
  @Input() selectedDetail: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
