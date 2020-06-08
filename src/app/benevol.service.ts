import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import {Benevol} from "./benevol";
import {observable, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BenevolService {
  url =  'http://localhost:8080';
  /*private httpClient: any;*/
  url1=  'http://localhost:8080/benevols';
  _url= 'assets/data/benevols.json';
  constructor(private http: HttpClient) { }

  public savebenevole(url, data){

    return this.http.post(url,data,{observe : 'response'}).subscribe(res=>{console.log(res);},
      err=>{console.log(err);});
    //.subscribe(res=>{console.log(res);},err=>{console.log(err);});
    // .subscribe(res => {alert('Vous êtes inscrits avec succes!'); console.log(res)},
    // err => alert("Ce login déjà existe!"));

  }
  public saveUser(url, data){
    return this.http.post(url,data);//.subscribe(res=>{console.log(res);},err=>{console.log(err);});
  }
 ceonnecterbenevole(url, data){
   return this.http.post(url,data,{observe : 'response'})
     .subscribe(res => {alert('Vous êtes bien connecté!');},
       err=>{console.log(err);});

 }

  getbenevol(): Observable<Benevol[]> {
    return this.http.get<Benevol[]>(this.url1);
  }
}
