import { Component, OnInit,Output, EventEmitter } from '@angular/core';
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


 submitQuote (){
   
  const newQuote = {
    quote: this.quote,
    author: this.author,
    uploader: this.uploader
  }

  this.addQuote.emit(newQuote);

  this.quote = "";
  this.author = "";
  this.uploader = "";

 }


  constructor() { }

  ngOnInit(): void {
  }

}
