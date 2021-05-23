import { Component, OnInit, Input} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  @Input() quote!:Quote;

  newDate:any = localStorage.getItem("postDate")

  quotes:Quote[] = [];

  addQuote (quote: Quote){
    this.quotes.push(quote);
  }

  removeItem(quote: Quote){
    const index: number = this.quotes.indexOf(quote);
    this.quotes.splice(index, 1);
  }

  constructor() {

   }

  ngOnInit(){

    
  }

}
