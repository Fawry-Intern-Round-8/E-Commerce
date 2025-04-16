import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreResponseDTO } from '../store-models';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  stores!: StoreResponseDTO[];
  constructor(private storeService: StoreService, private router: Router) { }
  ngOnInit(): void {
    this.getStoreList();
  }
  getStoreList() {
    this.storeService.getAllStores().subscribe(data => {
      this.stores = data;
    });
  }
  updateStore(id: number) {
    this.router.navigate(['update-store', id]);
  }
  deleteStore(id: number) {
    this.storeService.deleteStore(id).subscribe(() => {
      this.getStoreList();
    });
  }
  viewStore(id: number) {
    this.router.navigate(['store-details', id]);
  }
}
