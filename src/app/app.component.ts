import { Component } from "@angular/core";
import $ from "jquery";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  obj_data = [
    {
      name: "parent",
      total: 0,
      description: "parent-description",
      child: [
        {
          name: "child",
          total: 0,
          description: "child-description",

          subchild: [
            {
              name: "subchild",
              price: 10,
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: 15,
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: 5,
              description: "subchild-description"
            }
          ]
        },
        {
          name: "child2",
          total: 0,
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: 5,
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: 5,
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: 0,
              description: "subchild-description"
            }
          ]
        },
        {
          name: "child3",
          total: 0,
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: 4,
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: 6,
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: 8,
              description: "subchild-description"
            }
          ]
        }
      ]
    },
    {
      name: "parent2",
      total: 0,
      description: "parent-description",
      child: [
        {
          name: "child",
          total: 0,
          description: "child-description",

          subchild: [
            {
              name: "subchild",
              price: 10,
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: 10,
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: 5,
              description: "subchild-description"
            }
          ]
        },
        {
          name: "child2",
          total: 0,
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: 5,
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: 5,
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: 5,
              description: "subchild-description"
            }
          ]
        },
        {
          name: "child3",
          total: 0,
          description: "child-description",
          subchild: [
            {
              name: "subchild",
              price: 4,
              description: "subchild-description"
            },
            {
              name: "subchild2",
              price: 4,
              description: "subchild-description"
            },
            {
              name: "subchild3",
              price: 8,
              description: "subchild-description"
            }
          ]
        }
      ]
    }
  ];
}
