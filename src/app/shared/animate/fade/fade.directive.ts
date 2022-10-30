import { repeat, speed } from './../animate.base';
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { BaseAnimate } from '../animate.base';

@Directive({
  selector: '[appFade]',
})
export class FadeDirective extends BaseAnimate implements OnInit, OnChanges {
  setAnimate(): void {
    if (this.conditon) {
      this.renderer.addClass(this.el.nativeElement, 'animate__fadeIn');
      this.renderer.removeClass(this.el.nativeElement, 'animate__fadeOut');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'animate__fadeOut');
      this.renderer.removeClass(this.el.nativeElement, 'animate__fadeIn');
    }
  }
}
