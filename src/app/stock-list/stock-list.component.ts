import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StockDTO } from '../store-models';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks!: StockDTO[];
  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.getStockList();
  }

  getStockList() {
    this.stockService.getAllStocks().subscribe(data => {
      this.stocks = data;
    });
  }

  updateStock(id: number) {
    this.router.navigate(['update-stock', id]);
  }

  deleteStock(id: number) {
    this.stockService.deleteStock(id).subscribe(() => {
      this.getStockList();
    });
  }

  viewStock(id: number) {
    this.router.navigate(['stock-details', id]);
  }
}
