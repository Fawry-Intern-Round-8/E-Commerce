import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreRequestDTO, StoreDTO } from '../store-models';
import { StoreService } from '../store.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './store-update.component.html',
  styleUrl: './store-update.component.css'
})
export class StoreUpdateComponent implements OnInit {
  store: StoreRequestDTO = {
    name: '',
    address: '',
    longitude: 0,
    latitude: 0
  };
  id!: number;

  constructor(private storeService: StoreService, private activityRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activityRoute.snapshot.params['id'];
    this.storeService.getStoreById(this.id).subscribe(data => {
      this.store = {
        name: data.name,
        address: data.address,
        longitude: 0,
        latitude: 0
      };
    });
  }

  onSubmit() {
    this.storeService.updateStore(this.id, this.store).subscribe(data => {
      console.log(data);
      this.router.navigate(['/stores']);
    }, error => console.log(error));
  }
}
