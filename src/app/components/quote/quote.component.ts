import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {quote:'It is better to fail in originality than to succeed in imitation.',author:'Herman Melville',uploader: 'Kazungu'},
    {quote:'Success usually comes to those who are too busy to be looking for it.',author:'Henry David Thoreau' ,uploader: 'Kazungu'}, 
  ];

  addQuote (quote: Quote){
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


