import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent implements OnDestroy,OnChanges{
  @Input() titre:any; 

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. on change "+ this.titre.label);
  }

  ngOnDestroy(): void {
    console.log("on destro y")
  }
}
