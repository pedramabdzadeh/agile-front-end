import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appClickOver]'
})
export class ClickOverDirective {
  constructor(private elementRef: ElementRef) { }
  @Output() clickOver = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event']) checkClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickOver.emit(true);
    }
  }
}
