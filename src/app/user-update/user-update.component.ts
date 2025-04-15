import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-update',
  imports: [FormsModule],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent implements OnInit {
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

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/users']);
    }, error => console.log(error));
  }
}
