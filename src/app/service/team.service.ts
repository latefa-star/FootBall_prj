import { Team } from "../Teams/team.model";

export class TeamService{

    teams:Team[]=[
        new Team('FC Barcelone', 'Més que un club', 'http://fc-barcelone.com/assets/img/fcb-logo-big.png'),
        new Team(
          'Real Madrid',
          'Hala Madrid !',
          'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
        ), new Team(
            'Mouloudia',
            'Hala Madrid !',
            'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
          )
      ];
    constructor(){

    }


    getTeam(){
      return this.teams;
    }
}