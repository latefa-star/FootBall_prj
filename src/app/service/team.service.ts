import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Joueur } from "../joueur/joueur.model";
import { Team } from "../Teams/team.model";
import { LoggingService } from "./loggin.service";

@Injectable()
export class TeamService{
    
    concerned_team:Team;
    teams:Team[]=[
        new Team(1,'FC Barcelone', 'Més que un club', 'http://fc-barcelone.com/assets/img/fcb-logo-big.png', [new Joueur(1,'Messi', 33), new Joueur(2,'Andria Luc', 34)]),
        new Team(2,
          'Real Madrid',
          'Hala Madrid !',
          'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
          ,[new Joueur(3,'Ronaldo', 33), new Joueur(2,'Pique jean', 34)]),
        new Team(3,
            'Iverpool',
            'Hala Iverpool !',
            'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
          ,[new Joueur(1,'Mickael Bourgoie', 38), new Joueur(2,'Riad Mehrez', 24)])
      ];
    constructor(private logService: LoggingService, private router: Router, private route: ActivatedRoute){

    }


    getTeams(){
      this.logService.log('Warning')
      return this.teams;
    }

    navigate(team:Team)
    {
      
      this.router.navigate(['detail-teams', team.id], { relativeTo: this.route });
      this.concerned_team=team;

  }
  

  getTeam(id: number): Team | undefined {
    const j: Team | undefined = this.teams.find((team: Team) => team.id === id);
    return j;
  }

     
}