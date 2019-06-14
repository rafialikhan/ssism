import { Component, OnInit } from '@angular/core';
import { candidateData } from '../dataCandidate';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public candidates = candidateData;
  constructor() { }

  ngOnInit() {
  }

}
