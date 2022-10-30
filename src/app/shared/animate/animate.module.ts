import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeDirective } from './fade/fade.directive';

@NgModule({
  declarations: [FadeDirective],
  imports: [CommonModule],
  exports: [FadeDirective],
})
export class AnimateModule {}
