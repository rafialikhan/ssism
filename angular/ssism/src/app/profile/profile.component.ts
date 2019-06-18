import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
