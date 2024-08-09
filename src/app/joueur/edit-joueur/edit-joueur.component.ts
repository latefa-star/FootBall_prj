import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerService } from '../../service/player.service';
import { Joueur } from '../joueur.model';

@Component({
  selector: 'app-edit-joueur',
  templateUrl: './edit-joueur.component.html',
  styleUrl: './edit-joueur.component.scss'
})
export class EditJoueurComponent  {
 
  //@Output() joueur= new EventEmitter<Joueur>();
  @ViewChild('name_ref') name_ref: ElementRef;
  @ViewChild('age_ref') age_ref: ElementRef;
  jou:Joueur;
   id:number; 
   joueur: Joueur ;
   constructor(private playerService: PlayerService, private route:ActivatedRoute,private router:Router)
   {

    this.route.params.subscribe((params: Params) =>
    {
      this.joueur=this.playerService.getJoueur(+params['id']) as Joueur;
    }   
    
    );
   }
   
   
  
    add_player()
    {
      
      this.jou=new Joueur(8,this.name_ref.nativeElement.value, this.age_ref.nativeElement.value)
      //this.joueur.emit(this.jou);
      this.playerService.addPlayer(this.jou);
      
    }

    updatePlayer()
    {
      this.playerService.edit(this.joueur.id, {
        name: this.joueur.name,
         age: this.joueur.age
      });

      this.router.navigate(['/joueurs'])
    }

   
  
}
