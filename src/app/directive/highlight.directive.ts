import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() color_text:string;
  @Input() default_color:string;
  @HostBinding('style.color') bg:string;
  @HostListener('mouseenter') mouseenter(event: Event) {
    this.bg=this.color_text;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.bg=this.default_color;
  }
 constructor(private elementRef: ElementRef, private renderer: Renderer2)
 {

 }

  ngOnInit(): void {
   // this.elementRef.nativeElement.style.color = 'red';  // mth 1
    //     this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');  // mthode 2
    this.bg=this.default_color;// meth 3
    
  }
  
}
