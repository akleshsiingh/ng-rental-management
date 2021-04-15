import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective {

  @Output('appClickedOutside') eOutput = new EventEmitter();
  constructor(private el: ElementRef) { }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.eOutput.emit();
    }
  }

}
