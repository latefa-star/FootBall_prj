import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app_foot';
  feature:string="teams";
  @ContentChild('title') title_book: ElementRef;
  @ContentChild('hooks') hooks: ElementRef;
  
  tit={label:'angular'}
  isVisible=true;


  receive_event(event: string)
  {
      this.feature=event;
  }

/*  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible=false;
    }, (5000));
  }
  */
  
}
