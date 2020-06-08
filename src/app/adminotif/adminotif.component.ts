import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adminotif',
  templateUrl: './adminotif.component.html',
  styleUrls: ['./adminotif.component.css']
})
export class AdminotifComponent implements OnInit {

  public publication:any;
  public benevol;
  public association;
  public change:any;
  public admin:any;
  public user:any;
  public moi: any;
  constructor(private catService: CatalogueService, private  auth:AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("http://localhost:8080/admins/"+this.moi)
      .subscribe(ress => {
        this.user = ress;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("http://localhost:8080/publications" )
      .subscribe(ress => {
        this.publication = ress;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("http://localhost:8080/benevols" )
      .subscribe(data => {
        this.benevol = data;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("http://localhost:8080/admins" )
      .subscribe(data => {
        this.admin = data;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("http://localhost:8080/associations" )
      .subscribe(data => {
        this.association = data;

      }), err => {
      console.log(err);
    }
  }
  onSelectPub(p) {
    let conf = confirm('Voulez vous vraiment archiver cette publication ?');
    if (conf) {
      this.change=p;
      this.change.etat="Archivée"

      this.catService.selectPub("http://localhost:8080/publications/"+p.id,this.change)
        .subscribe(data => {
          this.admin = data;

        }), err => {
        console.log(err);
      }



    }
    this.catService.getPub("http://localhost:8080/admins/"+this.moi)
      .subscribe(data => {
        this.admin = data;
        this.admin.notification=0;
        this.catService.selectPub("http://localhost:8080/admins/"+this.moi,this.admin)
          .subscribe(ress => {
            this.admin = ress;

          }), err => {
          console.log(err);
        };

      }), err => {
      console.log(err);
    }
  }

  Archiver(p) {
    let conf = confirm('Voulez vous vraiment approuver cette publication ?');
    if (conf) {
      this.change=p;
      this.change.etat="Disponible"

      this.catService.selectPub("http://localhost:8080/publications/"+p.id,this.change)
        .subscribe(data => {
          this.admin = data;

        }), err => {
        console.log(err);
      }
    }
    this.catService.getPub("http://localhost:8080/admins/"+this.moi)
      .subscribe(data => {
        this.admin = data;
        this.admin.notification=0;
        this.catService.selectPub("http://localhost:8080/admins/"+this.moi,this.admin)
          .subscribe(ress => {
            this.admin = ress;

          }), err => {
          console.log(err);
        };

      }), err => {
      console.log(err);
    }
  }

  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);

  }

}
