import { Component, OnInit,Output} from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {


  public votes: number;

  
  constructor() { 
    this.votes = 0;
    
  }

  

  voteUp() {
    this.votes += 1;

    const storedVotes = JSON.stringify(this.votes);
    localStorage.setItem("votes", storedVotes);
    
    }

    voteDown() {
    this.votes -= 1;

    const storedVotes = JSON.stringify(this.votes);
    localStorage.setItem("votes", storedVotes);

    }

  ngOnInit(): void {
  }

}
