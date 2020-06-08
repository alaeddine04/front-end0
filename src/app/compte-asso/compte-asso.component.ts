import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";
import {Association} from "../../model/associations.model";

@Component({
  selector: 'app-compte-asso',
  templateUrl: './compte-asso.component.html',
  styleUrls: ['./compte-asso.component.css']
})
export class CompteAssoComponent implements OnInit {

  public associations: any;
  public benevol;
  public change: any;
  public admin: any;
  public user:any;
  public moi: any;
  public asso: any;

  constructor(private catService: CatalogueService, private  auth:AuthentificationService, private router: Router) {
  }
  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("https://our-backend.herokuapp.com/association/"+this.moi)
      .subscribe(ress => {
        this.user = ress;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("https://our-backend.herokuapp.com/associations")
      .subscribe(data => {
        this.associations = data;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("https://our-backend.herokuapp.com/association/"+this.moi)
      .subscribe(data => {
        this.asso = data;

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


  }
  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);

  }


  onEditCompte(ben:any) {
    this.router.navigate(["/compteassmodify",ben.id_asso]);
  }

}
