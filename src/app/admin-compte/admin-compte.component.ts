import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-compte',
  templateUrl: './admin-compte.component.html',
  styleUrls: ['./admin-compte.component.css']
})
export class AdminCompteComponent implements OnInit {
  public associations: any;
  public benevol;
  public change: any;
  public admin: any;
  public user:any;
  public moi: any;

  constructor(private catService: CatalogueService, private  auth:AuthentificationService, private router: Router) {
  }
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


  }
  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);

  }



  onEditCompte(p:any) {
    this.router.navigate(["/admodify",p.id]);
  }

}
