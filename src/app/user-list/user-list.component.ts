import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users!: User[];
    constructor(private userService: UserService, private router: Router) { }
    ngOnInit(): void {
        this.getUserList();
    }
    getUserList() {
        this.userService.getUserList().subscribe(data => {
            this.users = data;
        });
    }
    updateUser(id: number) {
        this.router.navigate(['update-user', id]);
    }
    deleteUser(id: number) {
        this.userService.deleteUser(id).subscribe(() => {
            this.getUserList();
        });
    }
}
