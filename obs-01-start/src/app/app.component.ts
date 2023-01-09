import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  myObservable = new Observable((observer) => {
    console.log('start');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
  });

  ngOnInit() {
    console.log('init');
    this.myObservable.subscribe((val) => {
      console.log(val);
    });
  }
}
