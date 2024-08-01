import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './Teams/teams.component';
import { TeamListComponent } from './Teams/team-list/team-list.component';
import { TeamDetailComponent } from './Teams/team-detail/team-detail.component';
import { TeamItemComponent } from './Teams/team-list/team-item/team-item.component';
import { PlayerComponent } from './player/player.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { FormsModule } from '@angular/forms'; 
import { ExampleComponent } from './example/example.component';
import { HooksComponent } from './hooks/hooks.component';
import { JoueurComponent } from './joueur/joueur.component';
import { EditJoueurComponent } from './joueur/edit-joueur/edit-joueur.component';
import { HighlightDirective } from './directive/highlight.directive';
import { HideDirective } from './directive/hide.directive';
import { DropdrownDirective } from './directive/dropdrown.directive';
import { TeamService } from './service/team.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamItemComponent,
    PlayerComponent,
    PlayerEditComponent,
    ExampleComponent,
    HooksComponent,
    JoueurComponent,
    EditJoueurComponent,
    HighlightDirective,
    HideDirective,
    DropdrownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TeamService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
