import { Component, OnInit } from '@angular/core';
import {Association} from "../../model/associations.model";
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Benevol} from "../../model/benevols.model";

@Component({
  selector: 'app-benevole-modif',
  templateUrl: './benevole-modif.component.html',
  styleUrls: ['./benevole-modif.component.css']
})
export class BenevoleModifComponent implements OnInit {

  public currentBenevol:Benevol;
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
    this.catService.getPub("https://our-backend.herokuapp.com/admins/"+this.moi)
      .subscribe(ress => {
        this.user = ress;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("https://our-backend.herokuapp.com/associations")
      .subscribe(ress => {
        this.associations = ress;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("https://our-backend.herokuapp.com/benevols")
      .subscribe(data => {
        this.benevol = data;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("https://our-backend.herokuapp.com/admins")
      .subscribe(data => {
        this.admin = data;

      }), err => {
      console.log(err);
    }

    this.url="https://our-backend.herokuapp.com/benevol/"+this.route.snapshot.params.id;
    this.catService.getPubee(this.url)
      .subscribe(data=>{
        this.currentBenevol=data;
        console.log("hello"+this.currentBenevol.login);
        this.catService.getPub("https://our-backend.herokuapp.com/users/"+this.currentBenevol.login)
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

    this.change=this.currentBenevol;
    this.change.email=this.currentBenevol.login;
    this.change.categorie="benevole";
    this.change.mdp=this.currentBenevol.mdp;
    this.change.adresse=this.currentBenevol.adresse;
    this.catService.selectPub(this.url,this.change)
      .subscribe(data=>{
        alert("Benevole");
      },err=>{
        console.log(err);
      })

    let info = {"id":this.ancienuser.id,"name": this.change.nom, "password": this.change.mdp, "role": this.change.categorie, "username": this.change.login};

    this.catService.selectPub("https://our-backend.herokuapp.com/users/"+this.currentBenevol.login, info)
      .subscribe(data=>{
        alert("modification dans la base users reussie");
        this.router.navigateByUrl("/bencompte")
      },err=>{
        console.log(err);
      })







  }


  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);


  }

}
