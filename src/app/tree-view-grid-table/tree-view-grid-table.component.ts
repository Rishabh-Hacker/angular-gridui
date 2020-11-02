import { Component, Input, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-tree-view-grid-table",
  templateUrl: "./tree-view-grid-table.component.html",
  styleUrls: ["./tree-view-grid-table.component.css"]
})
// export class Parent {
//   name: string;
//   total: number;
//   child: Child[];
// }
// export class Child {
//   name: string;
//   total: number;
//   subchild: SubChild[];
// }
// export class SubChild {
//   name: string;
//   price: number;
// }
export class TreeViewGridTableComponent implements OnInit {
 
  
  @Input() obj_data1: any;
  constructor() {}
  parentCheckExpandCollapse = true;
  ChildCheckExpandCollapse = true;
  ngOnInit() {
    
    //  $(document).ready(function() {
    //   $("#grid").kendoGrid({
    //     height: 550
    //   });
    // });
  }
  ChildExpandCollapse(check) {
    console.log(check);
    if (check) this.parentCheckExpandCollapse = false;
    else this.parentCheckExpandCollapse = true;
  }
}
