import { Component, OnInit,Output, EventEmitter, Query } from '@angular/core';
import { queueScheduler } from 'rxjs';
import { Quote } from "../quote";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  

@Output() addQuote: EventEmitter<Quote> = new EventEmitter()

  public quote!: string;
  public author!: string;
  public uploader! : string;
  public votes! : number;
  public postDate! :Number;
  newQuote: [] | undefined;

  
 submitQuote (){
   
  const newQuote = {
    quote: this.quote,
    author: this.author,
    uploader: this.uploader,
    postDate: this.postDate,
    votes: this.votes
  }

  this.addQuote.emit(newQuote);
  this.quote = "";
  this.author = "";
  this.uploader = "";
  this.postDate = 0;

  console.log(newQuote)

  const postDate = new Date().getTime();
  const storedDate = JSON.stringify(postDate);
  localStorage.setItem("postDate", storedDate);

}

  constructor() {
   }

  ngOnInit(): void {
    
  }

}
