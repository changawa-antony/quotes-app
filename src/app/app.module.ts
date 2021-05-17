import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDescriptionComponent } from './components/quote-description/quote-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    QuoteDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
