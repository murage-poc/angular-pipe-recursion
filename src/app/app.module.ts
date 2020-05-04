import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ObjectValuePipe } from "./object-value.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ObjectValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
