import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Joueur } from './joueur.model';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.scss'
})
export class JoueurComponent implements OnInit {

joueurs:Joueur[];

  ngOnInit()
  {
    
    this.joueurs=[new Joueur('messi',30), new Joueur('Rolaldo',32), new Joueur('Mbappe',23)];
  }

  receive(joueur: Joueur)
  {
  this.joueurs.push(joueur);
  }
}
