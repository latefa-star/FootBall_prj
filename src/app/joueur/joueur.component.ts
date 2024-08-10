import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { LoggingService } from '../service/loggin.service';
import { PlayerService } from '../service/player.service';
import { Joueur } from './joueur.model';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.scss',
  providers:[LoggingService],
})
export class JoueurComponent implements OnInit, OnDestroy {
  @ViewChild('nameRif') name:ElementRef;
  playerSub:Subscription;

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
    this.playerSub=this.playerService.playerChange.subscribe(
      (msg:string)=>
      {console.log(msg)}
     )


  }

  ngOnDestroy(): void {
    this.playerSub.unsubscribe();
  }

write(event: KeyboardEvent)
{
console.log(this.name.nativeElement.value)
this.name.nativeElement.value=(<HTMLInputElement> event.target).value;
}
}
