import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrl: './player-edit.component.scss'
})
export class PlayerEditComponent {
  name:string='latifa';
  isVisible:boolean=true;
  age:string;  
  situation:string;
  @Input() songName:string;

 onKeyUp(event: KeyboardEvent):void
 {
  this.name=(<HTMLInputElement> event.target).value;
 }
onClick(n:string)
{
  this.name=n;
}

play()
{
  console.log("play "+this.songName);
  
}

pause()
{
  console.log("pause "+this.songName);
  
}


}
