import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import {BenevolService} from "../benevol.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {find} from "rxjs/operators";
import Authentification from "../service/Authentification.js"
import axios from "axios"
import {CatalogueService} from "../service/catalogue.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//login
  username: string;
  password: string;
  message: any;
  ouruser:any;
  ourusers:any;
  moi:any;
  moii:any;
// signup
  errormessage: any;
  //benevole
  benevole='';
  nom ='';
  user ='';
  confirmation='';
  adr='';
  num: Number;

  //Association
  nomA ='';
  userA ='';
  passA
  confirmationA='';
  villeA='';
  des = '';
  numA: Number;
  fax : number ;
  mail : '';


  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient, private auth:AuthentificationService, private catService : CatalogueService,
              private benService:BenevolService) {
  }

  public benevols = [];

  ngOnInit(): void {
    this.moii = localStorage.getItem("username");
    this.catService.getPub("http://localhost:8080/users/" + this.moii)
      .subscribe(ress => {
        this.ourusers = ress;
        let roles = this.ourusers.role
        if (roles === 'benevole') {
          this.router.navigate(["/profile"])
        }
        if (roles === 'admin') {
          this.router.navigate(["/admin"])
        }
        if(roles === 'association'){this.router.navigate(["/association"])}
      }, err => {
        this.message = "Nom d'utilisateur ou mot de passe incorrect";
      })
  }



  //localStorage.getItem("username")
  login() {
    let resp = this.auth.logIn(this.username, this.password);
    Authentification.successfulSignUp(this.username);
    resp.subscribe(data => {
      this.message = data, this.moi = localStorage.getItem("username");
      this.catService.getPub("http://localhost:8080/users/"+this.moi)
        .subscribe(ress => {
          this.ouruser = ress;
          let roles = this.ouruser.role
          if(roles === 'benevole'){this.router.navigate(["/profile"])} if(roles==='admin') {this.router.navigate(["/admin"])}if(roles === 'association'){this.router.navigate(["/association"])};})
      //this.router.navigate(["/profile"])
    }, err => {
      this.message = "Nom d'utilisateur ou mot de passe incorrect";
    })
  }
  signUp(data: any) {


    let info = {"fullname": this.nom , "password": this.benevole, "role": "benevole", "username": this.user};

    this.benService.saveUser(this.benService.url+"/users", info).subscribe(res=>{alert('Vous êtes inscrits avec succes!');
        this.benService.savebenevole(this.benService.url+"/benevols",data);},
      err=>{ this.errormessage = "Le nom d'utilisateur déjà existe ";console.log(err);});
    this.router.navigate(['/login']);


  }
  signUPA(data:any){

    let info = {"fullname": this.nomA , "password": this.passA, "role": "association", "username": this.userA};
    this.benService.saveUser(this.benService.url+"/users", info).subscribe(res=>{alert('Vous êtes inscrits avec succes!');
        this.benService.savebenevole(this.benService.url+"/associations",data);},
      err=>{ this.errormessage = "Le nom d'utilisateur déjà existe ";console.log(err);});
    this.router.navigate(['/login']);

  }

}
