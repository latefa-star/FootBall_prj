import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() event_selected= new EventEmitter<string>();
  isHiden:boolean;

  OnClick(n:string)
  {
   this.event_selected.emit(n);
  }

}
