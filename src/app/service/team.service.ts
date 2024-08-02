import { Injectable } from "@angular/core";
import { Team } from "../Teams/team.model";
import { LoggingService } from "./loggin.service";

@Injectable()
export class TeamService{

    teams:Team[]=[
        new Team('FC Barcelone', 'Més que un club', 'http://fc-barcelone.com/assets/img/fcb-logo-big.png'),
        new Team(
          'Real Madrid',
          'Hala Madrid !',
          'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
        ),
        new Team(
            'Iverpool',
            'Hala Madrid !',
            'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
          )
      ];
    constructor(private logService: LoggingService){

    }


    getTeams(){
      this.logService.log('Warning')
      return this.teams;
    }
}