import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../service/catalogue.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public publication:any;
  public benevol ;
  public benevole;
  public admine;
  public admin;
  public change:any;
  public association;
  public moi;
  public user;
  public listben = [];
  title = 'benevolt1';
  constructor(private catService:CatalogueService){}
  ngOnInit(): void {

    this.moi = localStorage.getItem("username");
    this.catService.getPub("https://our-backend.herokuapp.com/benevols/"+this.moi)
      .subscribe(ress => {
        this.user = ress;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("https://our-backend.herokuapp.com/publications" )
      .subscribe(ress => {
        this.publication = ress;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("https://our-backend.herokuapp.com/benevols" )
      .subscribe(data => {
        this.benevol = data;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("https://our-backend.herokuapp.com/associations" )
      .subscribe(data => {
        this.association = data;

      }), err => {
      console.log(err);
    }


  }


  onSelectPub(p) {
    let conf = confirm('Voulez vous vraiment valider cette demande ?');
    if (conf) {
      this.change = p;
      this.change.etat = "Validée" ; //p._links.self.href



      this.catService.selectPub("https://our-backend.herokuapp.com/publications/" + p.id, this.change)
        .subscribe(data => {
          this.benevol = data;

        }), err => {
        console.log(err);
      }
      this.catService.getPub("https://our-backend.herokuapp.com/admins/coucou1")
        .subscribe(data => {
          this.admine = data;
          console.log(this.admin);
          console.log("hello");
          this.admine.notification += 1;
          this.catService.selectPub("https://our-backend.herokuapp.com/admins/coucou1", this.admine)
            .subscribe(ress => {
              this.admin = ress;

            }), err => {
            console.log(err);
          };

        }), err => {
        console.log(err);
      }
      this.catService.getPub("https://our-backend.herokuapp.com/benevol/"+p.id_benevol )
        .subscribe(data => {

          this.benevole = data;
          this.benevole.notification=0;
          this.catService.selectPub("https://our-backend.herokuapp.com/benevol/" + p.id_benevol, this.benevole)
            .subscribe(ress => {
              this.benevol = ress;

            }), err => {
            console.log(err);
          };

        }), err => {
        console.log(err);
      }
    }
  }












}
