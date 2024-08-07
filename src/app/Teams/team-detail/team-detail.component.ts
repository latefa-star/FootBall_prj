import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../service/player.service';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent {

  @Input()  detail_team:Team ;


  constructor(private playerServcie: PlayerService, private router:Router){

  }
  addToPlayer(){
    if(this.detail_team.joueurs)
         this.playerServcie.toPlayer(this.detail_team.joueurs);
  }

  onNavigate(path: string)
  {
      this.router.navigate([path]);
  }

}
