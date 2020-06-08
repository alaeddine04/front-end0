import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {PublicationComponent} from "./publication/publication.component";
import {NotificationComponent} from "./notification/notification.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminotifComponent} from "./adminotif/adminotif.component";
import {AssociationComponent} from "./association/association.component";
import {NotifiAssComponent} from "./notifi-ass/notifi-ass.component";
import {AssociationCompteComponent} from "./association-compte/association-compte.component";
import {AssociationModifComponent} from "./association-modif/association-modif.component";
import {BenevoleCompteComponent} from "./benevole-compte/benevole-compte.component";
import {BenevoleModifComponent} from "./benevole-modif/benevole-modif.component";
import {AdminCompteComponent} from "./admin-compte/admin-compte.component";
import {AdminModifComponent} from "./admin-modif/admin-modif.component";
import {CompteAssoComponent} from "./compte-asso/compte-asso.component";
import {CompteassoModifComponent} from "./compteasso-modif/compteasso-modif.component";
import {CompteBenComponent} from "./compte-ben/compte-ben.component";
import {ComptebenModifyComponent} from "./compteben-modify/compteben-modify.component";




const routes: Routes = [ { path: '', redirectTo:"login", pathMatch:"full" },
  { path: 'login', component: LoginComponent },
  {path:'profile', component:ProfileComponent},
  {path:'publication', component:PublicationComponent},
  {path:'notification', component:NotificationComponent},
  {path:'admin', component:AdminComponent},
  {path:'adminotif', component:AdminotifComponent},
  {path:'association',component: AssociationComponent},
  {path:'notifiasso',component:NotifiAssComponent},
  {path: 'assocompte',component: AssociationCompteComponent},
  {path: 'assomodify/:id',component: AssociationModifComponent},
  {path: 'bencompte',component: BenevoleCompteComponent},
  {path: 'benmodify/:id',component: BenevoleModifComponent},
  {path: 'adcompte',component: AdminCompteComponent},
  {path: 'admodify/:id',component: AdminModifComponent},
  {path: 'compteass',component: CompteAssoComponent},
  {path: 'compteassmodify/:id',component: CompteassoModifComponent},
  {path: 'compteben',component: CompteBenComponent},
  {path: 'comptebenmodify/:id',component: ComptebenModifyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
