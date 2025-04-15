import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseURL = "http://localhost:8080/api/users"
    constructor(private httpClient: HttpClient) { }

    getUserList(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.baseURL);
    }

    getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.baseURL}/${id}`);
    }

    addUser(user: User): Observable<User> {
        return this.httpClient.post<User>(this.baseURL, user);
    }

    updateUser(id: number, user: User): Observable<User> {
        user.updatedAt = new Date();
        return this.httpClient.put<User>(`${this.baseURL}/${id}`, user);
    }

    deleteUser(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
    }
}