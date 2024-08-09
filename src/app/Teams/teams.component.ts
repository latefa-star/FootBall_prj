import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { LoggingService } from "../service/loggin.service";
import { Team } from "./team.model";

@Component({
    selector:'app-teams',
    templateUrl:'./teams.component.html',
    styleUrl:'./teams.component.scss'
})

export class TeamsComponent  implements OnInit, OnDestroy
{

    team_detail:Team;
   // numSub:Subscription;
    
    constructor(private logginService: LoggingService)
    {}
    ngOnInit(): void {
       // const num=interval(1000);
       // this.numSub=num.subscribe((n:number)=>
       // {console.log(n);})

    }


     onClick()
     {
        this.logginService.increment();
     }
    

    get_detail_event(event:Team)
    {
   this.team_detail=event;
    }

    ngOnDestroy()
    {
         //this.numSub.unsubscribe();
    }

   
}

