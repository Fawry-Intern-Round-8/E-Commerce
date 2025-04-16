import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDTO } from '../store-models';
import { StoreService } from '../store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-details.component.html',
  styleUrl: './store-details.component.css'
})
export class StoreDetailsComponent implements OnInit {
  store!: StoreDTO;
  id!: number;

  constructor(private storeService: StoreService, private activityRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activityRoute.snapshot.params['id'];
    this.storeService.getStoreById(this.id).subscribe(data => {
      this.store = data;
    });
  }

  getStoreDetails() {
    // Logic to get store details by ID
    console.log(`Fetching details for store with ID: ${this.id}`);
  }
}
