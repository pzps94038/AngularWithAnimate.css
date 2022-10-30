import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
export type repeat = 1 | 2 | 3 | 'infinite';
export type speed = 'slow' | 'fast' | 'slower' | 'faster';
@Directive()
export abstract class BaseAnimate implements OnInit, OnChanges {
  @Input() set conditon(value: boolean) {
    this._conditon = value;
  }
  get conditon(): boolean {
    return this._conditon;
  }
  @Input() set repeat(value: repeat) {
    this._reapeat = value;
  }
  get repeat(): repeat {
    return this._reapeat;
  }
  @Input() set speed(value: speed) {
    this._speed = value;
  }
  get speed(): speed {
    return this._speed;
  }
  _conditon: boolean = false;
  _reapeat: repeat = 1;
  _speed: speed = 'fast';
  constructor(protected el: ElementRef, protected renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'animate__animated');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setAnimate();
    this.setRepeat();
    this.setSpeed();
  }
  abstract setAnimate(): void;
  setRepeat() {
    const classList = this.el.nativeElement.classList as DOMTokenList;
    const list: string[] = [];
    classList.forEach((cl) => list.push(cl));
    const regex = new RegExp(/^animate__(repeat-[1-3]|infinite)$/);
    const repeatClass = list.filter((a) => regex.test(a));
    for (const repeat of repeatClass) {
      this.renderer.removeClass(this.el.nativeElement, repeat);
    }
    switch (this.repeat) {
      case 1:
      case 2:
      case 3:
        this.renderer.addClass(
          this.el.nativeElement,
          `animate__repeat-${this.repeat}`
        );
        break;
      case 'infinite':
        this.renderer.addClass(this.el.nativeElement, 'animate__infinite');
        break;
    }
  }
  setSpeed() {
    const classList = this.el.nativeElement.classList as DOMTokenList;
    const list: string[] = [];
    classList.forEach((cl) => list.push(cl));
    const regex = new RegExp(/^animate__(slow|slower|fast|faster)$/);
    const repeatClass = list.filter((a) => regex.test(a));
    for (const repeat of repeatClass) {
      this.renderer.removeClass(this.el.nativeElement, repeat);
    }
    switch (this.speed) {
      case 'slow':
      case 'slower':
      case 'fast':
      case 'faster':
        this.renderer.addClass(this.el.nativeElement, `animate__${this.speed}`);
        break;
    }
  }
}
