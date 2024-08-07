import { Injectable } from "@angular/core";
import { Joueur } from "../joueur/joueur.model";
import { Team } from "../Teams/team.model";
import { LoggingService } from "./loggin.service";

@Injectable()
export class TeamService{
    

    teams:Team[]=[
        new Team('FC Barcelone', 'Més que un club', 'http://fc-barcelone.com/assets/img/fcb-logo-big.png', [new Joueur('Messi', 33), new Joueur('Andria Luc', 34)],1),
        new Team(
          'Real Madrid',
          'Hala Madrid !',
          'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
          ,[new Joueur('Ronaldo', 33), new Joueur('Pique jean', 34)], 2),
        new Team(
            'Iverpool',
            'Hala Madrid !',
            'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
          ,[new Joueur('Mickael Bourgoie', 38), new Joueur('Riad Mehrez', 24)], 3)
      ];
    constructor(private logService: LoggingService){

    }


    getTeams(){
      this.logService.log('Warning')
      return this.teams;
    }
}