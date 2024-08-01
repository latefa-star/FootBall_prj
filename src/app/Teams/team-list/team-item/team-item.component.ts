import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Team } from '../../team.model';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrl: './team-item.component.scss'
})
export class TeamItemComponent implements OnInit {
  img_team="https://www.assuropoil.fr/wp-content/uploads/2023/07/avoir-un-chat-sante.jpg"
  isDisable=true;
  @Input() t:Team;
  @Output() detail_event= new EventEmitter<Team>();

  

  ngOnInit(){
   setTimeout(()=>{
      this.isDisable=false;
   },3000)
  }


  onSelect()
  {
    this.detail_event.emit(this.t);
  }

  
}
