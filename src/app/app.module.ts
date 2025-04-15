import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppComponent,
        UserListComponent
    ],
    providers: [],
})
export class AppModule { }