import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.product.createdAt = new Date();
    this.product.updatedAt = new Date();
  }

  saveProduct() {
    console.log('Sending product data:', this.product);
    this.product.createdAt = new Date();
    this.product.updatedAt = new Date();
    this.productService.addProduct(this.product).subscribe(
      data => {
        console.log('Success:', data);
        this.goToProductList();
      },
      error => {
        console.error('Error details:', error);
        if (error.error && error.error.message) {
          console.error('Server message:', error.error.message);
        }
      }
    );
  }

  goToProductList() {
    this.router.navigate(['/products']);
  }

  onSubmit() {
    this.saveProduct();
  }
}