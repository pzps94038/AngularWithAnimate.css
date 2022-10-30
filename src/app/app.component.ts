import { speed } from './shared/animate/animate.base';
import { Component } from '@angular/core';
type repeat = 1 | 2 | 3 | 'infinite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'animate';
  conditon = false;
  repeat: any = 1;
  speed: any = 'slow';
  constructor() {}
  cc() {
    this.conditon = !this.conditon;
    if (this.repeat === 1) {
      this.speed = 'fast';
      this.repeat = 'infinite';
    } else {
      this.repeat = 1;
      this.speed = 'slower';
    }
  }
}
