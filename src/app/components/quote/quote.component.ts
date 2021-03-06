import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {
    quote:'It is better to fail in originality than to succeed in imitation.',
    author:'Herman Melville',
    uploader: 'Kazungu', 
    postDate: 5, 
    votes: 10}, 
  ];

  addQuote (quote: Quote){
    this.quotes.push(quote);
  }

   removeItem(quote: Quote){
    const index: number = this.quotes.indexOf(quote);
    this.quotes.splice(index, 1);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}


