import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: User = new User();
  id!: number;
  constructor(private userService: UserService, private activityRoute: ActivatedRoute, private router: Router
  ) { }


  ngOnInit() {
    this.id = this.activityRoute.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    });
  }


  getUserDetails() {
    // Logic to get user details by ID
    console.log(`Fetching details for user with ID: ${this.id}`);
  }
}
