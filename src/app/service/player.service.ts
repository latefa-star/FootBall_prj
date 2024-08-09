import { Injectable } from '@angular/core';
import { EditJoueurComponent } from '../joueur/edit-joueur/edit-joueur.component';
import { Joueur } from '../joueur/joueur.model';
import { LoggingService } from './loggin.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 players:Joueur[];

  
  constructor(private loggingService: LoggingService) {
     this.players=[new Joueur(1,'messi',30), new Joueur(2,'Rolaldo',32), new Joueur(3,'Mbappe',23)];
   }
   getPlayer(): Joueur[]
   {
    this.loggingService.log('GET PLAYERS');
    return this.players;
   }

   getJoueur(id: number): Joueur | undefined {
    const j: Joueur | undefined = this.players.find((joueur: Joueur) => joueur.id === id);
    return j;
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

  edit(id:number, joueurInfo:{name:string, age:number})
  {
    const j: Joueur | undefined = this.players.find((joueur: Joueur) => joueur.id === id);
    if(j)
    {
      j.name=joueurInfo.name;
      j.age=joueurInfo.age;
    }

  }
  


}
