import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() ninjaData: { name: string; belt: string };
  @Input() myCountry: { country: string; state: string; zip: number };
  @Output() onYell = new EventEmitter();
  @Output() onHello = new EventEmitter<{ name: string; age: number }>();

  constructor() {
    console.log('constructor');
  }
  cricketer = {
    name: 'tend',
    number: 1,
  };

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
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
