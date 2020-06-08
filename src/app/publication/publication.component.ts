import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  public publication: any;
  public benevol;
  public benevole;
  public change: any;
  title = 'benevolt1';

  constructor(private catService: CatalogueService) {
  }

  ngOnInit(): void {
    this.catService.getPub("http://localhost:8080/publications")
      .subscribe(ress => {
        this.publication = ress;

      }), err => {
      console.log(err);
    }

    this.catService.getPub("http://localhost:8080/benevols")
      .subscribe(data => {
        this.benevol = data;

      }), err => {
      console.log(err);
    }

  }

  onSelectPub(p) {
    let conf = confirm('Etes vous sure ?');
    if (conf) {

      this.change = p;
      this.change.etat = "occupe";

      this.change.id_association = "3";

      this.catService.selectPub("http://localhost:8080/publications/" + p.id_benevol, this.change)
        .subscribe(ress => {
          this.publication = ress;

        }), err => {
        console.log(err);
      };

      this.benevol.notification = "1";
      this.benevol.nom = "manal farhane";
      this.catService.selectPub("http://localhost:8080/benevols/1", this.benevol)
        .subscribe(ress => {
          this.benevol = ress;

        }), err => {
        console.log(err);
      };


    }

  }
}
