import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-benevole-compte',
  templateUrl: './benevole-compte.component.html',
  styleUrls: ['./benevole-compte.component.css']
})
export class BenevoleCompteComponent implements OnInit {

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


  Chercher() {
    this.catService.getPub("https://our-backend.herokuapp.com/benevols")
      .subscribe(data => {
        this.benevol=data
      }, err => {
        console.log(err);
      });


  }

  onDeleteCompte(p) {
    let conf = confirm("Etes vous sure de vouloir supprimer?")
    if (conf) {
      this.catService.DeleteCompte("https://our-backend.herokuapp.com/benevols/" + p.id_ben)
        .subscribe(res => {
          this.Chercher();
        }, error => {
          console.log(error);
        });
    }

  }

  onEditCompte(p:any) {
    this.router.navigate(["/benmodify",p.id_ben]);
  }


}
