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
  public candidates: any;
  router: any;
  constructor(private dataService: DataService) {
    this.dataService.getCandidateData().subscribe(data => {
      this.candidates = data;
    });
  }

  ngOnInit() {}
  profile() {
    this.router.navigate([".profile"]);
  }
}
