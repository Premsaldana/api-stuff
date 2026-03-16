import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './sm';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://json-db-lvup.onrender.com/users';
  constructor(public http: HttpClient) {}
  getProducts() {
    return this.http.get<users[]>(this.apiUrl);
  }
  addUser(user: users) {
    return this.http.post<users>(this.apiUrl, user);
  }
  deleteUser(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  editUser(user: users) {
    return this.http.put<users>(`${this.apiUrl}/${user.id}`, user);
  }
}
