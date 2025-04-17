import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockRequestDTO, StockDTO } from '../store-models';
import { StockService } from '../stock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stock-update.component.html',
  styleUrl: './stock-update.component.css'
})
export class StockUpdateComponent implements OnInit {
  stock: StockRequestDTO = {
    storeId: 0,
    productId: 0,
    quantity: 0
  };
  id!: number;

  constructor(private stockService: StockService, private activityRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activityRoute.snapshot.params['id'];
    this.stockService.getStockById(this.id).subscribe(data => {
      this.stock = {
        storeId: data.storeId,
        productId: data.productId,
        quantity: data.quantity
      };
    });
  }

  onSubmit() {
    this.stockService.addStock(this.stock).subscribe(data => {
      console.log(data);
      this.router.navigate(['/stocks']);
    }, error => console.log(error));
  }
}
