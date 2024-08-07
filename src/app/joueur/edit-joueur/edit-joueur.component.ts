import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
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
    
   constructor(private playerService: PlayerService){}

    add_player()
    {
      
      this.jou=new Joueur(this.name_ref.nativeElement.value, this.age_ref.nativeElement.value)
      //this.joueur.emit(this.jou);
      this.playerService.addPlayer(this.jou);
      
    }

   
  
}
