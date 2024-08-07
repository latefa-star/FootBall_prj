import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../service/loggin.service';
import { PlayerService } from '../service/player.service';
import { Joueur } from './joueur.model';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.scss',
  providers:[LoggingService],
})
export class JoueurComponent implements OnInit {

joueurs:Joueur[];
constructor(private playerService: PlayerService, private logginService: LoggingService)
{

}

onClick()
{
   this.logginService.increment();
}
  ngOnInit()
  {
    
    this.joueurs=this.playerService.getPlayer();
  }


}
