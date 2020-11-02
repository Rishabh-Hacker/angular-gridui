import { Component } from "@angular/core";
import $ from "jquery";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  ngInit() {
    $(document).ready(function() {
      $("#grid").kendoGrid({
        height: 550
      });
    });
  }
}
