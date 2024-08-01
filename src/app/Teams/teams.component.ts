import { Component } from "@angular/core";
import { Team } from "./team.model";

@Component({
    selector:'app-teams',
    templateUrl:'./teams.component.html',
    styleUrl:'./teams.component.scss'
})

export class TeamsComponent
{
    
    team_detail:Team;

    get_detail_event(event:Team)
    {
   this.team_detail=event;
    }
}

