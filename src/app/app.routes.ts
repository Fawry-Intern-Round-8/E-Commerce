import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
export const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'create-user',
        component: UserAddComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'update-user/:id',
        component: UserUpdateComponent
    }
];
