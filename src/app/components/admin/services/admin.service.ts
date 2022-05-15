import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getPersonList(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users? starł=0& limit=5')

  }

  getPerson(id: number){
    return this.http.get<User>( `https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
