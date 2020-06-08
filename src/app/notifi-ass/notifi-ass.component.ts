import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";

@Component({

  selector: 'app-notifi-ass',
  templateUrl: './notifi-ass.component.html',
  styleUrls: ['./notifi-ass.component.css']
})
export class NotifiAssComponent implements OnInit {
  public publication:any;
  public benevol ;
  public benevole;
  public rate;
  public admin;
  public change:any;
  public association;
  public moi;
  public user;
  public listben = [];
  constructor(private catService:CatalogueService) { }

  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("https://our-backend.herokuapp.com/association/"+this.moi)
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


  Rating(p,rating){
    let conf = confirm('Voulez vous vraiment valider rate ?');
    if (conf) {
      this.change = p;
      this.change.evaluation = rating,
        this.catService.selectPub("https://our-backend.herokuapp.com/publications/" + p.id, this.change)
          .subscribe(data => {
            console.log(data);
          }, err => {
            console.log(err);
          })
    }
    this.catService.getPub("https://our-backend.herokuapp.com/benevol/" + p.id_benevol)
      .subscribe(data => {
        this.benevole = data;
        this.benevole.points += rating;
        this.catService.selectPub("https://our-backend.herokuapp.com/benevol/"+p.id_benevol, this.benevole)
          .subscribe(ress => {
            this.benevol = ress;

          }), err => {
          console.log(err);
        };

      }), err => {
      console.log(err);
    };

  }


}
