import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]'
})
export class PasswordToggleDirective {
  private isPasswordVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const input = this.el.nativeElement;

    if (this.isPasswordVisible) {
      this.renderer.setAttribute(input, 'type', 'text');
    } else {
      this.renderer.setAttribute(input, 'type', 'password');
    }
  }
}
