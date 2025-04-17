import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockDTO } from '../store-models';
import { StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-details.component.html',
  styleUrl: './stock-details.component.css'
})
export class StockDetailsComponent implements OnInit {
  stock!: StockDTO;
  id!: number;

  constructor(private stockService: StockService, private activityRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activityRoute.snapshot.params['id'];
    this.stockService.getStockById(this.id).subscribe(data => {
      this.stock = data;
    });
  }

  getStockDetails() {
    // Logic to get stock details by ID
    console.log(`Fetching details for stock with ID: ${this.id}`);
  }
}
