import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PlayerService } from '../service/player.service';
import { PlayerEditComponent } from './player-edit/player-edit.component';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  isPlaying:boolean;
  
  name:string;
  @ViewChild(PlayerEditComponent) playerEditComponent: PlayerEditComponent;
  @ViewChild('title_input') title: ElementRef;
  @ViewChildren(PlayerEditComponent) players: QueryList<PlayerEditComponent>;


  constructor(private playerService: PlayerService)
  {

  }
  onPlay()
  {
   this.isPlaying=true;
  }
  onPause()
  {
   this.isPlaying=false;
  }

  onClick()
  {
    //console.log(this.title.nativeElement.value);
    console.log(this.players.forEach(p => p.play()));
  }

 

}
