import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimateModule } from './shared/animate/animate.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AnimateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
