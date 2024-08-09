import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerService } from '../../service/player.service';
import { Team } from '../team.model';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent implements OnInit{

  //@Input()  detail_team:Team ;
  team:Team;
  id:number;

  constructor(private teamService:TeamService,private router: Router,private playerServcie: PlayerService,  private route: ActivatedRoute) { 
    
    this.route.params.subscribe((params: Params) =>
    {
      this.id=+params['id'];
      console.log(this.id);
      this.team=this.teamService.getTeam(this.id) as Team;
    }   
    
    );
  }

  gotoEdit()
  {
   // this.router.navigate(['teams',this.team.id,'edit']);
   this.router.navigate(['edit'], {relativeTo: this.route});

  }

  ngOnInit(): void {
    
  }

 /* addToPlayer(){
    if(this.detail_team.joueurs)
         this.playerServcie.toPlayer(this.detail_team.joueurs);
  }

 
  */


}
