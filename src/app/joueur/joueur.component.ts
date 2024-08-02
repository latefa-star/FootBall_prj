import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../service/player.service';
import { Joueur } from './joueur.model';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.scss'
})
export class JoueurComponent implements OnInit {

joueurs:Joueur[];
constructor(private playerService: PlayerService)
{

}

  ngOnInit()
  {
    
    this.joueurs=this.playerService.getPlayer();
  }

  receive(joueur: Joueur)
  {
  this.joueurs.push(joueur);
  }
}
