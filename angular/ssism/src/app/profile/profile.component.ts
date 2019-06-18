import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public candidates: any;
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getCandidateData().subscribe(data => {
      this.candidates = data;
      console.log(data)
    })
  }

  ngOnInit() {
  }
  moreDetails() {
    this.router.navigate(['/more-details']);
  }


}
