import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor( private http: HttpClient) { }
  public logIn(username:string, password:string){
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' +password)})
      return this.http.get("http://localhost:8080/",{headers,responseType:'test' as 'json'})
    }



    /*authenticate(username, password) {
      if (username === "javainuse" && password === "password") {
        sessionStorage.setItem('username', username)
        return true;
      } else {
        return false;
      }
    }*/


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('username');
  }
}
