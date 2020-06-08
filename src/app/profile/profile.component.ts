import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef ,MatDialogConfig} from "@angular/material/dialog";

import {PublierComponent} from "../publier/publier.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public publication: any;
  public benevol: any;
  public change: any;
  public moi: any;
  public user: any;
  public mok: any;
  public benevols: any;

  name: string;
  title = 'benevolt1';

  constructor(private catService: CatalogueService, private auth: AuthentificationService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.moi = localStorage.getItem("username");
    this.catService.getPub("https://our-backend.herokuapp.com/benevols/" + this.moi)
      .subscribe(ress => {
        this.user = ress;

      }), err => {
      console.log(err);
    }
    this.catService.getPub("https://our-backend.herokuapp.com/publications")
      .subscribe(ress => {
        this.publication = ress;
        console.log(this.publication);

      }), err => {
      console.log(err);
    }

    this.catService.getPub("https://our-backend.herokuapp.com/benevols")
      .subscribe(data => {
        this.benevols = data;
        console.log(this.benevols);
      }), err => {
      console.log(err);
    }
  }

  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);


  }

  notification(u) {
    this.moi = localStorage.getItem("username");
    this.change = u;
    this.change.notification = '0';
    this.catService.selectPub("https://our-backend.herokuapp.com/benevol/" + u.id_ben, this.change)
      .subscribe(data => {
        this.mok = data;

      }), err => {
      console.log(err);
    };
    this.router.navigate(['/notification']);
  }
  openDialog(): void {
    this.dialog.open(PublierComponent, {
      width: '800px',

    });



  }













}
