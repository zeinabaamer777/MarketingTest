import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { HomeComponent } from './components/home/home.component';
import { WhatWeOfferComponent } from './components/what-we-offer/what-we-offer.component';
import { OurPricingComponent } from './components/our-pricing/our-pricing.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhoWeAreComponent,
    HomeComponent,
    WhatWeOfferComponent,
    OurPricingComponent,
    SubscriptionComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
