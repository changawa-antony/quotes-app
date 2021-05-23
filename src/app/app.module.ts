import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDescriptionComponent } from './components/quote-description/quote-description.component';
import { ButtonComponent } from './components/button/button.component';
import { VotesComponent } from './components/votes/votes.component';
import { FormComponent } from './components/form/form.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { DatePipe } from './date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    QuoteDescriptionComponent,
    ButtonComponent,
    VotesComponent,
    FormComponent,
    SubmitButtonComponent,
    DatePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
