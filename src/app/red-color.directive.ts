import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[redColored]'
})
export class RedColorDirective {

  constructor(element: ElementRef) { 
    console.log('element', element);
    element.nativeElement.style.color = 'red';
  }

  @HostListener('click') doSomething() {
    alert('I am clicked');
  }
    
}
