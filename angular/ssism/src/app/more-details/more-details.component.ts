import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  public candidates: any;
  constructor(private dataService: DataService) { 
    this.dataService.getCandidateData().subscribe(data => {
      this.candidates = data;
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
