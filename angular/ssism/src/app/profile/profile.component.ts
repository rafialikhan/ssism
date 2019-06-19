import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public candidates: any;
  public candidateCandidateDetails: any;
  public candidateId = null;
  public selectedCandidate;
  constructor(private dataService: DataService, private router: Router,  private route: ActivatedRoute) {
   
    let params = this.route.snapshot.params;

    if(params){
      this.candidateId = params.candidateId;
    }

    this.dataService.getCandidateData().subscribe(data => {
      this.candidates = data;
      console.log(data)

      // Now create another Object - of only the profile that i need
      this.candidates.forEach(c => {
        if(c.id === Number(this.candidateId)){
          this.selectedCandidate = c;
        }
      })

      // DO with array filter. 
      // Lodash find
      // 
       
      console.log(this.selectedCandidate)

    })
  }

  ngOnInit() {
  }

  showCandidate(id){
    if(id === Number(this.candidateId)){
      return true;
    }
    return false
  }

  moreDetails() {
    this.router.navigate(['/more-details']);
  }
  
} 

