import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../../service/loggin.service';
import { TeamService } from '../../service/team.service';
import { Team } from '../team.model';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent implements OnInit {
 teams:Team[];

 @Output()  detail_event_2=new EventEmitter<Team>();

constructor(private teamService: TeamService,private logService: LoggingService){

}
  ngOnInit() {
    
    this.teams=this.teamService.getTeams(); //= this.teamService.teams;
    
  }

  getEvent(e:Team)
  {
    
    this.detail_event_2.emit(e);
  }




}
