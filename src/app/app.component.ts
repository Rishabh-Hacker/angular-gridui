import { Component } from "@angular/core";
import $ from "jquery";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // JSON Schema format required in tree view component.
  // export class Parent {
  //   name: string;
  //   total:[ number];
  //   description:string;
  //   child: Child[];
  // }
  // export class Child {
  //   name: string;
  //   total: number;
  //   description:string;
  //   subchild: SubChild[];
  // }
  // export class SubChild {
  //   name: string;
  //  description:string;
  //   price: [[]];
  // }

  obj_data = [
    {
      name: "test",
      total: [0],
      description: "test2",
      child: [
        {
          name: "testing",
          total: [0],
          description: "testing 1",
          subchild: [
            {
              name: "subchild",
              price: [10, 10],
              description: "testing 1 1"
            },
            {
              name: "subchild",
              price: [10, 5],
              description: "testing 1 2"
            },
            {
              name: "subchild2",
              price: [15, 3],
              description: "testing 1 3"
            },
            {
              name: "subchild3",
              price: [5, 1],
              description: "testing 1 4"
            }
          ]
        },
        {
          name: "child2",
          total: [0],
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: [5, 5],
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: [5, 6],
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: [0, -2],
              description: "subchild-description"
            }
          ]
        },
        {
          name: "child3",
          total: [0],
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: [4, 6],
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: [6, 7],
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: [8, 9],
              description: "subchild-description"
            }
          ]
        }
      ]
    },
    {
      name: "parent2",
      total: [0],
      description: "parent-description",
      child: [
        {
          name: "child",
          total: [0],
          description: "child-description",

          subchild: [
            {
              name: "subchild",
              price: [10, 11],
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: [10, 2],
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: [5, 3],
              description: "subchild-description"
            }
          ]
        },
        {
          name: "child2",
          total: [0],
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: [5, 5],
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: [5, 4],
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: [5, 4],
              description: "subchild-description"
            }
          ]
        },
        {
          name: "child3",
          total: [0],
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: [4, 5],
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: [4, 6],
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: [8, 3],
              description: "subchild-description"
            }
          ]
        }
      ]
    }
  ];
}
