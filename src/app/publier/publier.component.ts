import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CatalogueService} from "../service/catalogue.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";



@Component({
  selector: 'app-publier',
  templateUrl: './publier.component.html',
  styleUrls: ['./publier.component.css']
})
export class PublierComponent implements OnInit {
  public publication :any;
  public benevole :any;
  public admine :any;
  titre ="";
  Ville ="";
  Type ="";
  Img ="";
  Description="";
  public moi : any;
  public user : any;
  constructor(private catService: CatalogueService,private router: Router,public dialog: MatDialog){}
  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("https://our-backend.herokuapp.com/benevols/" + this.moi)
      .subscribe(ress => {
        this.user = ress;

      }), err => {
      console.log(err);
    }
  }
  onSavePublication(titre,Ville,Description,Type,Img)
  {

    this.catService.addPub( "https://our-backend.herokuapp.com/publications",{"id_benevol":this.user.id_ben,"ville":Ville,"titre":titre,"type":Type,"img":Img,"description":Description,"etat":"En attente","evaluation":0,"id_association":0,"date":Date.now()})
    this.catService.getPub("https://our-backend.herokuapp.com/benevol/" + this.user.id_ben)
      .subscribe(data => {
        this.benevole = data;
        this.benevole.nb_pub += 1;
        this.catService.selectPub("https://our-backend.herokuapp.com/benevol/"+this.user.id_ben, this.benevole)
          .subscribe(ress => {
            this.benevole = ress;

          }), err => {
          console.log(err);
        };

      }), err => {
      console.log(err);
    };
    this.catService.getPub("https://our-backend.herokuapp.com/benevol/" + this.user.id_ben)
      .subscribe(data => {
        this.benevole = data;
        this.benevole.nb_pub += 1;
        this.catService.selectPub("https://our-backend.herokuapp.com/benevol/"+this.user.id_ben, this.benevole)
          .subscribe(ress => {
            this.benevole = ress;

          }), err => {
          console.log(err);
        };

      }), err => {
      console.log(err);
    };
    this.catService.getPub("https://our-backend.herokuapp.com/admins/coucou1")
      .subscribe(data => {
        this.admine = data;

        this.admine.notification += 1;
        this.catService.selectPub("https://our-backend.herokuapp.com/admins/coucou1", this.admine)
          .subscribe(ress => {
            this.admine = ress;

          }), err => {
          console.log(err);
        };

      }), err => {
      console.log(err);
    };
    this.dialog.closeAll()




  }
}

