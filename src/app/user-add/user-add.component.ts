import { Component, NgModule, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.status = true;
    this.user.createdAt = new Date();
    this.user.updatedAt = new Date();
  }

  saveUser() {
    if (typeof this.user.status === 'string') {
      this.user.status = this.user.status === 'active';
    }

    console.log('Sending user data:', this.user);
    this.user.createdAt = new Date();
    this.user.updatedAt = new Date();
    this.userService.addUser(this.user).subscribe(
      data => {
        console.log('Success:', data);
        this.goToUserList();
      },
      error => {
        console.error('Error details:', error);
        if (error.error && error.error.message) {
          console.error('Server message:', error.error.message);
        }
      }
    );
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    this.saveUser();
  }
}