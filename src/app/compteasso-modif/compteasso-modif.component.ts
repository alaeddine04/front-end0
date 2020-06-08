import { Component, OnInit } from '@angular/core';
import {Association} from "../../model/associations.model";
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-compteasso-modif',
  templateUrl: './compteasso-modif.component.html',
  styleUrls: ['./compteasso-modif.component.css']
})
export class CompteassoModifComponent implements OnInit {
  public currentAssociations:Association;
  public publication: any;
  public benevol;
  public change: any;
  public admin: any;
  public user:any;
  public moi: any;
  public url: string;
  private associations: any;
  confirmation: '';
  private ancienuser: any;

  constructor(private catService: CatalogueService, private  auth:AuthentificationService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("http://localhost:8080/association/"+this.moi)
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

    this.url="http://localhost:8080/associations/"+this.route.snapshot.params.id;
    this.catService.getPube(this.url)
      .subscribe(data=>{
        this.currentAssociations=data;

      },err=>{
        console.log(err);
      })

    this.url="http://localhost:8080/associations/"+this.route.snapshot.params.id;
    this.catService.getPube(this.url)
      .subscribe(data=>{
        this.currentAssociations=data;
        console.log("hello"+this.currentAssociations.login);
        this.catService.getPub("http://localhost:8080/users/"+this.currentAssociations.login)
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

    this.change=this.currentAssociations;
    this.change.nom=this.currentAssociations.nom;
    this.change.categorie="association";
    this.change.email=this.currentAssociations.email;
    this.change.login=this.currentAssociations.login;
    this.change.mdp=this.currentAssociations.mdp;
    this.catService.selectPub(this.url,this.change)
      .subscribe(data=>{
        alert("Assocaitions");

      },err=>{
        console.log(err);
      })

    let info = {"id":this.ancienuser.id,"name": this.change.nom, "password": this.change.mdp, "role": this.change.categorie, "username": this.change.login};

    this.catService.selectPub("http://localhost:8080/users/"+this.currentAssociations.login, info)
      .subscribe(data=>{
        alert("modification dans la base users reussie");
        this.router.navigateByUrl("/compteass")
      },err=>{
        console.log(err);
      })





  }


  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);


  }

}
