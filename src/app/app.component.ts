import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  items = [];
  tod = "";
  constructor() {}
  submit(f) {
    console.log(f.value);
    this.items.push(f.value.todo);
    f.reset();
  }
  delete(index) {
    this.items.splice(index, 1);
  }
}
