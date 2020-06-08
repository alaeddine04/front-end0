import { Component, OnInit } from '@angular/core';
import {Association} from "../../model/associations.model";
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Admin} from "../../model/admins.model";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-admin-modif',
  templateUrl: './admin-modif.component.html',
  styleUrls: ['./admin-modif.component.css']
})
export class AdminModifComponent implements OnInit {

  public currentAdmin:Admin;
  public publication: any;
  public benevol;
  public change: any;
  public admin: any;
  public user:any;
  public moi: any;
  public url: string;
  private associations: any;
  private ancienuser: any;
  confirmation: '';


  constructor(private catService: CatalogueService, private  auth:AuthentificationService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("http://localhost:8080/admins/"+this.moi)
      .subscribe(ress => {
        this.user = ress;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("http://localhost:8080/associations")
      .subscribe(ress => {
        this.associations = ress;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("http://localhost:8080/benevols")
      .subscribe(data => {
        this.benevol = data;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("http://localhost:8080/admins")
      .subscribe(data => {
        this.admin = data;

      }), err => {
      console.log(err);
    }

    this.url="http://localhost:8080/admin/"+this.route.snapshot.params.id;
    this.catService.getPubeee(this.url)
      .subscribe(data=>{
        this.currentAdmin=data;
        console.log("hello"+this.currentAdmin.username);
        this.catService.getPub("http://localhost:8080/users/"+this.currentAdmin.username)
          .subscribe(resss => {
            this.ancienuser = resss;
            console.log(this.ancienuser);
          }), err => {
          console.log(err);

        }
      },err=>{
        console.log(err);
      })

  }

  OnUpdate(value: any) {

    this.change=this.currentAdmin;
    this.change.nom=this.currentAdmin.nom;
    this.change.categorie="admin";
    this.change.username=this.currentAdmin.username;
    this.change.password=this.currentAdmin.password;
    this.catService.selectPub(this.url,this.change)
      .subscribe(data=>{
        alert("modification dans la base admin reussie")
      },err=>{
        console.log(err);
      })

    let info = {"id":this.ancienuser.id,"name": this.change.nom, "password": this.change.password, "role": this.change.categorie, "username": this.change.username};

    this.catService.selectPub("http://localhost:8080/users/"+this.currentAdmin.username, info)
      .subscribe(data=>{
        alert("modification dans la base users reussie");
        this.router.navigateByUrl("/adcompte")
      },err=>{
        console.log(err);
      })

  }


  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);


  }

}
