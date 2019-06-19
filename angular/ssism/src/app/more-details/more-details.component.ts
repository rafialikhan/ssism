import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-more-details",
  templateUrl: "./more-details.component.html",
  styleUrls: ["./more-details.component.scss"]
})
export class MoreDetailsComponent implements OnInit {
  public candidates: any;
  public candidateCandidateDetails: any;
  public candidateId = null;
  public moreDetails;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    let params = this.route.snapshot.params;

    if (params) {
      this.candidateId = params.candidateId;
    }
    this.dataService.getCandidateData().subscribe(data => {
      this.candidates = data;
      this.candidates.forEach(c => {
        if (c.id === Number(this.candidateId)) {
          this.moreDetails = c;
        }
      });
    });
  }

  ngOnInit() {}
  showCandidate(id) {
    if (id === Number(this.candidateId)) {
      return true;
    }
    return false;
  }
  
}
