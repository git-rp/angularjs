import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]',
})
export class BetterHighlighterDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor: string = 'trasparent';
  @Input() highlightColor: string = 'blue';
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'Red');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '40px');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'Red');
    this.backgroudColor = this.highlightColor; //'red';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroudColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
  }
  @HostBinding('style.backgroundColor') backgroudColor: string;
}
