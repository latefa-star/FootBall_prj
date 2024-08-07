import { Injectable } from '@angular/core';
import { Joueur } from '../joueur/joueur.model';
import { LoggingService } from './loggin.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 players:Joueur[];
  
  constructor(private loggingService: LoggingService) {
     this.players=[new Joueur('messi',30), new Joueur('Rolaldo',32), new Joueur('Mbappe',23)];
   }
   getPlayer(): Joueur[]
   {
    this.loggingService.log('GET PLAYERS');
    return this.players;
   }


   addPlayer(joueur: Joueur):void
   {
    this.players.push(joueur);
   }

   

   toPlayer(joueurs: Joueur[]){
    for (let jd of joueurs) {
        this.addPlayer(jd);
    }
}


}
