import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-compte-ben',
  templateUrl: './compte-ben.component.html',
  styleUrls: ['./compte-ben.component.css']
})
export class CompteBenComponent implements OnInit {


  public associations: any;
  public benevol;
  public change: any;
  public admin: any;
  public user:any;
  public moi: any;
  public asso: any;
  public ben: any;

  constructor(private catService: CatalogueService, private  auth:AuthentificationService, private router: Router) {
  }
  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("https://our-backend.herokuapp.com/benevols/"+this.moi)
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
    this.catService.getPub("https://our-backend.herokuapp.com/benevols/"+this.moi)
      .subscribe(data => {
        this.ben = data;

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


  onEditCompte(asso:any) {
    this.router.navigate(["/comptebenmodify",asso.id_ben]);
  }

}
