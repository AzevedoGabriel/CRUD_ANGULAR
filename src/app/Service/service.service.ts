import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api';

  getUsers(){
    return this.http.get<User[]>(`${this.Url}/users`);
  }

  getUserById(idUser: Number) {
    return this.http.get<User>(`${this.Url}/user/${idUser}`);
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.Url}/create`, user);
  }

  editUser(idUser: Number, user: User) {
    return this.http.post<User>(`${this.Url}/user/${idUser}`, user);
  }

  deleteUser(idUser: Number) {
    return this.http.delete<User>(`${this.Url}/delete-user/${idUser}`);
  }
}
