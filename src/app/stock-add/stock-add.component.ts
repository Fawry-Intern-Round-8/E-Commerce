import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockRequestDTO } from '../store-models';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stock-add.component.html',
  styleUrl: './stock-add.component.css'
})
export class StockAddComponent implements OnInit {
  stock: StockRequestDTO = {
    storeId: 0,
    productId: 0,
    quantity: 0
  };

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
  }

  saveStock() {
    console.log('Sending stock data:', this.stock);
    this.stockService.createStock(this.stock).subscribe(
      data => {
        console.log('Success:', data);
        this.goToStockList();
      },
      error => {
        console.error('Error details:', error);
        if (error.error && error.error.message) {
          console.error('Server message:', error.error.message);
        }
      }
    );
  }

  goToStockList() {
    this.router.navigate(['/stocks']);
  }

  onSubmit() {
    this.saveStock();
  }
}