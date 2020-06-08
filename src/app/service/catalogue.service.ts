import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Association} from "../../model/associations.model";
import {Benevol} from "../../model/benevols.model";
import {Admin} from "../../model/admins.model";
import {User} from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:String="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }
  public selectPub(url, data) {
    return this.httpClient.put(url, data);
  }

  public addPub(url, data) {
    return this.httpClient.post(url, data)
      .subscribe(res=>{console.log(res);},
        err=>{console.log(err);});
  }
  public getPub(url) {
    return this.httpClient.get(url);
  }

  public getPube(url):Observable<Association> {
    return this.httpClient.get<Association>(url);
  }
  public getPubee(url):Observable<Benevol> {
    return this.httpClient.get<Benevol>(url);
  }
  public getPubeee(url):Observable<Admin> {
    return this.httpClient.get<Admin>(url);
  }
  public getPubeeee(url):Observable<User> {
    return this.httpClient.get<User>(url);
  }

  public DeleteCompte(url){
    return this.httpClient.delete(url);
  }

}
