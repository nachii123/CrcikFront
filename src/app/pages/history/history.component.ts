import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from "../../components/match-card/match-card.component";

@Component({
    selector: 'app-history',
    standalone: true,
    templateUrl: './history.component.html',
    styleUrl: './history.component.css',
    imports: [CommonModule, MatchCardComponent]
})
export class HistoryComponent implements OnInit{
  allMatch: any;

  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:data=>{
        this.allMatch = data;
      },
      error:error=>{
        console.log(error)
      }
    });
  }
}
