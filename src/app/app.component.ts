import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  data = [
    {
      keys: "eru8ur83r",
      source: { tier: "Tier one", timestamp: "1920:3949:3949" }
    }
  ];

  ngOnInit() {}


}
