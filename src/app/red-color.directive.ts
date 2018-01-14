import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[redColored]'
})
export class RedColorDirective {

  constructor(element: ElementRef) { 
    console.log('element', element);
    element.nativeElement.style.color = 'red';
  }
    
}
