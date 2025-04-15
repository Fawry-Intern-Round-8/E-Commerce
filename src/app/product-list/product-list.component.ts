import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }
  updateProduct(id: number) {
    this.router.navigate(['update-product', id]);
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProductList();
    });
  }
  viewProduct(id: number) {
    this.router.navigate(['product-details', id]);
  }
}
