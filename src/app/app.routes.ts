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
import { StoreUpdateComponent } from './store-update/store-update.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StockAddComponent } from './stock-add/stock-add.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsDetailsComponent } from './transactions-details/transactions-details.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponAddComponent } from './coupon-add/coupon-add.component';
import { CouponUpdateComponent } from './coupon-update/coupon-update.component';
export const routes: Routes = [
    {
        path: 'transactions',
        component: TransactionsListComponent
    }
    , {
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
        path: 'stocks',
        component: StockListComponent
    },
    {
        path: 'coupons',
        component: CouponListComponent
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
        path: 'create-stock',
        component: StockAddComponent
    },
    {
        path: 'create-coupon',
        component: CouponAddComponent
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
        path: 'update-store/:id',
        component: StoreUpdateComponent
    },
    {
        path: 'update-coupon/:id',
        component: CouponUpdateComponent
    },
    {
        path: 'update-stock/:id',
        component: StockUpdateComponent
    },
    {
        path: 'transactions-details/:id',
        component: TransactionsDetailsComponent
    },
    {
        path: 'user-details/:id',
        component: UserDetailsComponent
    },
    {
        path: 'product-details/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'store-details/:id',
        component: StoreDetailsComponent
    },
    {
        path: 'stock-details/:id',
        component: StockDetailsComponent
    }
];
