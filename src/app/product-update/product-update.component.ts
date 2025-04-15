import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  imports: [FormsModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  product: Product = new Product();
  id!: number;
  constructor(private productService: ProductService, private activityRoute: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activityRoute.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.id, this.product).subscribe(data => {
      console.log(data);
      this.router.navigate(['/products']);
    }, error => console.log(error));
  }
}
