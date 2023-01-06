import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighGreen]',
})
export class HighlighGreenDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.fontSize = '50px';
  }
}
