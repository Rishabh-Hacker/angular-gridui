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
  parentCheckExpandCollapse = [];
  childCheckExpandCollapse = [];
  ngOnInit() {
    var parentLen = this.obj_data1.length;
    var [i, j, k] = [0, 0, 0];
    var childLen = this.obj_data1[i].child.length;
    for (var t = 0; t < parentLen; t++) {
      j = 0;
      this.parentCheckExpandCollapse[t] = 1;
      for (let index of this.obj_data1[t].child) {
        this.obj_data1[t].child[j++].total = index.subchild.reduce(
          (value, next) => value + next.price,
          0
        );
      }
      this.obj_data1[t].total = this.obj_data1[t].child.reduce(
        (value, next) => value + next.total,
        0
      );
    }
    for (var t = 0; t < parentLen; t++) {
      this.childCheckExpandCollapse[t] = 1;
    }
    console.log(this.obj_data1);

    //  $(document).ready(function() {
    //   $("#grid").kendoGrid({
    //     height: 550
    //   });
    // });
  }
  test;
  ChildExpandCollapse(check, index) {
    this.test = this.obj_data1[index].child;
    if (check) {
      this.childCheckExpandCollapse[index] = 0;
    } else {
      this.childCheckExpandCollapse[index] = 1;
    }
    // console.log(this.obj_data1[index].child, this.test);
  }
  test2;
  SubChildExpandCollapse(check, index) {
    this.test2 = index;
    if (check) {
      this.childCheckExpandCollapse[index] = 0;
    } else {
      this.childCheckExpandCollapse[index] = 1;
    }
    console.log(index);
  }
  //   if (check) {
  //     this.parentCheckExpandCollapse[i] = false;
  //   } else {
  //     this.parentCheckExpandCollapse[i] = true;
  //   }
  //   this.parent = this.obj_data1[i].child;
  //   console.log(this.obj_data1[i].child);
  //   console.log(i, check);
  // }
}
