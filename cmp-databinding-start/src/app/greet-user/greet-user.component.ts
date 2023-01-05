import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greet-user',
  templateUrl: './greet-user.component.html',
  styleUrls: ['./greet-user.component.css'],
})
export class GreetUserComponent implements OnInit {
  @Input() userData: { name: string; age: number };
  constructor() {}

  ngOnInit(): void {}
}
