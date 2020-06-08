import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-association-compte',
  templateUrl: './association-compte.component.html',
  styleUrls: ['./association-compte.component.css']
})
export class AssociationCompteComponent implements OnInit {
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


  }
  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);

  }


  Chercher() {
    this.catService.getPub("http://localhost:8080/associations")
      .subscribe(data => {
        this.associations=data
      }, err => {
        console.log(err);
      });


  }

  onDeleteCompte(p) {
    let conf = confirm("Etes vous sure de vouloir supprimer?")
    if (conf) {
      this.catService.DeleteCompte("http://localhost:8080/associations/" + p.id_asso)
        .subscribe(res => {
          this.Chercher();
        }, error => {
          console.log(error);
        });
    }

  }
  onEditCompte(p:any) {
    this.router.navigate(["/assomodify",p.id_asso]);
  }

}
