import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from '../team.model';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent implements OnInit {
 teams:Team[];

 @Output()  detail_event_2=new EventEmitter<Team>();


  ngOnInit() {
    
    this.teams = [
      new Team('FC Barcelone', 'Més que un club', 'http://fc-barcelone.com/assets/img/fcb-logo-big.png'),
      new Team(
        'Real Madrid',
        'Hala Madrid !',
        'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
      )
    ];
  }

  getEvent(e:Team)
  {
    
    this.detail_event_2.emit(e);
  }




}
