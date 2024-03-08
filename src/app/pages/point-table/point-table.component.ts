import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{
  pointtable:any;
  tableHeading:any;

  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this._api.getPointTable().subscribe({
      next:data=>{
        this.pointtable = data;
        this.tableHeading=[...this.pointtable[0]]
        // console.log(this.tableHeading)
      }
    })
  }

}
