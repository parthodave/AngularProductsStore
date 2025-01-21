import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements OnInit, OnChanges {
@Input() appAutoFocus: Boolean = true;


  constructor(private el: ElementRef)
   {

   }

  ngOnInit(){
    if (this.appAutoFocus) {
      this.focusElement();  
    }
  }

  ngOnChanges(changes: SimpleChanges) 
  { 
    if(changes["appAutoFocus"] && changes["appAutoFocus"].currentValue) 
    {
      this.focusElement();
    }
  }


  private focusElement() 
  {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 0);
  
   }
}


