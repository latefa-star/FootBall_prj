import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdrown]'
})
export class DropdrownDirective {

  @HostBinding('class.open') isOpen =false;

  @HostListener('click') toggleOpen() {
   // console.log('Dropdown state:', this.isOpen);
    this.isOpen = !this.isOpen;
   // console.log('heloooooooo',this.isOpen);
  }
}