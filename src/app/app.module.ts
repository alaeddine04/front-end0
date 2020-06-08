import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{BenevolService} from'./benevol.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmationValidateurDirective } from "../assets/js/confirmation-validateur.directive";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { PublicationComponent } from './publication/publication.component';
import { AdminComponent } from './admin/admin.component';
import { AdminotifComponent } from './adminotif/adminotif.component';
import { AssociationComponent } from './association/association.component';
import { NotifiAssComponent } from './notifi-ass/notifi-ass.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { PublierComponent } from './publier/publier.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";

import { AssociationCompteComponent } from './association-compte/association-compte.component';
import { AssociationModifComponent } from './association-modif/association-modif.component';
import { BenevoleCompteComponent } from './benevole-compte/benevole-compte.component';
import { BenevoleModifComponent } from './benevole-modif/benevole-modif.component';
import { AdminCompteComponent } from './admin-compte/admin-compte.component';
import { AdminModifComponent } from './admin-modif/admin-modif.component';
import { CompteAssoComponent } from './compte-asso/compte-asso.component';
import { CompteassoModifComponent } from './compteasso-modif/compteasso-modif.component';
import { CompteBenComponent } from './compte-ben/compte-ben.component';
import { ComptebenModifyComponent } from './compteben-modify/compteben-modify.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationValidateurDirective,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NotificationComponent,
    PublicationComponent,
    AdminComponent,
    AdminotifComponent,
    AssociationComponent,
    NotifiAssComponent,
    PublierComponent,
    AssociationCompteComponent,
    AssociationModifComponent,
    BenevoleCompteComponent,
    BenevoleModifComponent,
    AdminCompteComponent,
    AdminModifComponent,
    CompteAssoComponent,
    CompteassoModifComponent,
    CompteBenComponent,
    ComptebenModifyComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    BrowserAnimationsModule,


  ],
  entryComponents:[PublierComponent],
  providers: [BenevolService],
  bootstrap: [AppComponent]
})
export class AppModule { }

