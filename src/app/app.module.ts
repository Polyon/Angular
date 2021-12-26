import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// --------------Owl Carousel------------------
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// --------------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent01Component } from './components/card-component01/card-component01.component';
import { CardComponent02Component } from './components/card-component02/card-component02.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent01Component,
    CardComponent02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
