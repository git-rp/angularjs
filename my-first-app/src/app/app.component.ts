import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  error = false;
  name = 'Bhuvi app';
  myAlert() {
    //alert('test');
    this.error = true;
  }
  closeAlert() {
    this.error = false;
  }
}
