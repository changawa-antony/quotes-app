import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'It is better to fail in originality than to succeed in imitation.',author:'Herman Melville'},
    {id:2,name:'Success usually comes to those who are too busy to be looking for it.',author:'Henry David Thoreau'},
    {id:3,name:'Try not to become a man of success. Rather become a man of value.',author:'Albert Einstein'},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}