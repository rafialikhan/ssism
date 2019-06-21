import {
  Component,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__
} from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  candidates:any;
// canddidateName=['sonakshi','prashant','piyush','laveena','suhashi','nikita'];
  constructor(private dataService:DataService) { }
  ngOnInit() {   

    this.getData();
  }
  getData() {
    this.dataService.getCandidateData().subscribe(data => {
      this.candidates = data;
      console.log(data)
    })

  }

  
}
