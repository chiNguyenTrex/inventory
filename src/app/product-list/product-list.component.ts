import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Array<Product>;
  @Output() onProductSelected: EventEmitter<Product>;

  private selectedProduct: Product;


  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.selectedProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.selectedProduct) {
      return false;
    }
    return product.sku === this.selectedProduct.sku;
  }
}
