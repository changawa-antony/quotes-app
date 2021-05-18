import { Component, OnInit,Input } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() quote!: Quote;

  deleteQuote(quote:string){
    console.log(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
