<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { DataService } from '../services/data.service';
>>>>>>> 57d2cc9fe1112129dfca1f8037b86eafb9e8ad0a

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
<<<<<<< HEAD
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
canddidateName=['sonakshi','prashant','piyush','laveena','suhashi','nikita'];
  constructor() { }

  ngOnInit() {
=======
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public candidates:any;
  constructor(private dataService: DataService) { 

    this.dataService.getCandidateData().subscribe(data => {
      this.candidates= data;
    })

    
  }

  ngOnInit() {

   
>>>>>>> 57d2cc9fe1112129dfca1f8037b86eafb9e8ad0a
  }

}
