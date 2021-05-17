import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public quote!: string;
  public author!: string;
  public uploader! : string;

  quotes = [
    new Quote()
  ];

  submitQuote(){
    this.newQuote = new Quote(this.quote, this.author, this.uploader)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
