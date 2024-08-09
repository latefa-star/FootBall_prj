import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamService } from '../../service/team.service';
import { Team } from '../../Teams/team.model';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrl: './edit-team.component.scss'
})
export class EditTeamComponent implements OnInit {
   id:number;
   team:Team;
  isEdit:boolean;
  constructor(private route: ActivatedRoute, private teamService:TeamService)
  {

  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>
    this.id=+params['id']);
    this.isEdit= !!this.id;
    
    console.log(this.isEdit);
    //this.team=this.teamService.getTeam(this.id);
  }

  edit(id:number, infoTeam:{name:string, })
  {

  }
}
