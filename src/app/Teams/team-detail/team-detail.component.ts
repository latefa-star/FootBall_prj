import { Component, Input } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent {

  @Input()  detail_team:Team ;

  

}
