import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreAddComponent } from './store-add/store-add.component';
export const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    }, {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'stores',
        component: StoreListComponent
    },
    {
        path: 'create-user',
        component: UserAddComponent
    },
    {
        path: 'create-product',
        component: ProductAddComponent
    },
    {
        path: 'create-store',
        component: StoreAddComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'update-user/:id',
        component: UserUpdateComponent
    },
    {
        path: 'update-product/:id',
        component: ProductUpdateComponent
    },
    {
        path: 'user-details/:id',
        component: UserDetailsComponent
    },
    {
        path: 'product-details/:id',
        component: ProductDetailsComponent
    }
];
