import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() ninjaData: { name: string; belt: string };
  @Output() onYell = new EventEmitter();
  @Output() onHello = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  fireYellEvent(e) {
    this.onYell.emit(e);
  }

  fireHelloEvent(e) {
    let user = {
      name: 'Bhuvi',
      age: 10,
    };
    this.onHello.emit(user);
  }
}
