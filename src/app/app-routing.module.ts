import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './formulaire/template-driven/template-driven.component';
import { EditJoueurComponent } from './joueur/edit-joueur/edit-joueur.component';
import { JoueurComponent } from './joueur/joueur.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';
import { TeamDetailComponent } from './Teams/team-detail/team-detail.component';
import { TeamsComponent } from './Teams/teams.component';


const appRoute: Routes = [
  { path: '', component:TeamsComponent },

  { path: 'teams', component: TeamsComponent , children:[
    { path: 'add', component: EditTeamComponent },
    { path: ':id', component: TeamDetailComponent },
    { path: ':id/edit', component: EditTeamComponent }
  ]
    },
    { path: 'form', component:TemplateDrivenComponent },
  
  { path: 'joueurs', component: JoueurComponent, children:[
    { path: ':id', component: EditJoueurComponent }
  ]
    }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
