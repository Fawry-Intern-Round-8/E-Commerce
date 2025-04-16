import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreRequestDTO } from '../store-models';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './store-add.component.html',
  styleUrl: './store-add.component.css'
})
export class StoreAddComponent implements OnInit {
  store: StoreRequestDTO = {
    name: '',
    address: '',
    longitude: 0,
    latitude: 0
  };

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit(): void {
  }

  saveStore() {
    console.log('Sending store data:', this.store);
    this.storeService.createStore(this.store).subscribe(
      data => {
        console.log('Success:', data);
        this.goToStoreList();
      },
      error => {
        console.error('Error details:', error);
        if (error.error && error.error.message) {
          console.error('Server message:', error.error.message);
        }
      }
    );
  }

  goToStoreList() {
    this.router.navigate(['/stores']);
  }

  onSubmit() {
    this.saveStore();
  }
}