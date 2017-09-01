import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro.component';
import { MenuComponent } from './components/menubar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    IntroComponent,
    MenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
