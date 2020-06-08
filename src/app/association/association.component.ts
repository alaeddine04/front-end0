import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../service/catalogue.service';
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  public publication: any;
  public benevol;
  public benevole:any ;
  public user;
  public moi;
  public change: any;
  title = 'benevolt1';
  private admin: any;

  constructor(private catService: CatalogueService , private auth : AuthentificationService , private router: Router) {
  }

  ngOnInit(): void {
    this.moi = localStorage.getItem("username");
    this.catService.getPub("https://our-backend.herokuapp.com/association/"+this.moi )
      .subscribe(resss => {
        this.user = resss;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("https://our-backend.herokuapp.com/publications")
      .subscribe(ress => {
        this.publication = ress;

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


  onSelectPub(p) {
    let conf = confirm('Etes vous sure ?');
    if (conf) {
      alert("votre demande est envoyée")
      this.change = p;

      this.change.etat = "Occupée";

      this.catService.getPub("https://our-backend.herokuapp.com/associations/"+this.moi )
        .subscribe(resss => {
          this.user = resss;

        }), err => {
        console.log(err);
      };
      this.user.tel+=1;
      this.catService.selectPub("https://our-backend.herokuapp.com/associations/"+this.user.id_asso , this.user)
        .subscribe(data => {
          this.publication = data;

        }), err => {
        console.log(err);
      };
      this.change.id_association=this.user.id_asso ;
      this.catService.selectPub("https://our-backend.herokuapp.com/publications/"+p.id , this.change)
        .subscribe(data => {
          this.publication = data;

        }), err => {
        console.log(err);
      };

      this.catService.getPub("https://our-backend.herokuapp.com/benevol/" + p.id_benevol)
        .subscribe(data => {
          this.benevole = data;
          this.benevole.notification += 1;
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
  logOut() {
    this.auth.logOut()

    this.router.navigate(['/login']);


  }
}
