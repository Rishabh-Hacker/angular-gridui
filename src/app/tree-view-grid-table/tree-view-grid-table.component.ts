import { Component, Input, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-tree-view-grid-table",
  templateUrl: "./tree-view-grid-table.component.html",
  styleUrls: ["./tree-view-grid-table.component.css"]
})
export class TreeViewGridTableComponent implements OnInit {
  //input coming from parent component
  @Input() obj_data1: any;
  constructor() {}
  //variables used in the component
  parentCheckExpandCollapse = [];
  childCheckExpandCollapse = [[], []];
  parentLen;
  childLen;

  ngOnInit() {
    //parent length
    this.parentLen = this.obj_data1.length;
    // variables used
    var [i, j, k] = [0, 0, 0];
    //child length
    this.childLen = this.obj_data1[i].child.length;
    // calucaltion for total for parent and child node based on subChild values
    for (var t = 0; t < this.parentLen; t++) {
      j = 0;
      // setting up boolean conditon for collapse and expand parent
      this.parentCheckExpandCollapse[t] = 1;
      // calucaltion for total for  child node based on subChild
      for (let index of this.obj_data1[t].child) {
        this.obj_data1[t].child[j].total[0] = index.subchild.reduce(
          (value, next) => value + next.price[0],
          0
        );
        this.obj_data1[t].child[j++].total[1] = index.subchild.reduce(
          (value, next) => value + next.price[1],
          0
        );
        //  this.obj_data1[t].child[j++].total= index.subchild.reduce(function(a, b) {
        //     return a + b;
        //   });
      }
      // calucaltion for total for  parent node based on child values
      this.obj_data1[t].total[0] = this.obj_data1[t].child.reduce(
        (value, next) => value + next.total[0],
        0
      );
      this.obj_data1[t].total[1] = this.obj_data1[t].child.reduce(
        (value, next) => value + next.total[1],
        0
      );
    }
    // setting up boolean conditon for collapse and expand child
    for (var k = 0; k < this.parentLen; k++) {
      for (var t = 0; t < this.childLen; t++) {
        this.childCheckExpandCollapse[k][t] = 1;
      }
    }
  }
  //method to close all node if respective parent node is closed
  closeAllChildNodes(index) {
    for (var t = 0; t < this.childLen; t++) {
      this.childCheckExpandCollapse[index][t] = 1;
    }
  }
}
