import { Component, OnInit } from "@angular/core";
import { LoggingService } from "../service/loggin.service";
import { Team } from "./team.model";

@Component({
    selector:'app-teams',
    templateUrl:'./teams.component.html',
    styleUrl:'./teams.component.scss'
})

export class TeamsComponent 
{
    team_detail:Team;
    
    constructor(private logginService: LoggingService)
    {
          
    }
     onClick()
     {
        this.logginService.increment();
     }
    

    get_detail_event(event:Team)
    {
   this.team_detail=event;
    }

   
}

