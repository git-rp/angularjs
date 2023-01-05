import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Server 1', content: 'Just test' }];
  newServerName = '';
  newServerContent = '';
  ninja = {
    name: 'Ryu',
    belt: 'black',
  };
  yell(e) {
    alert('i am yelling');
  }
  sayHello(user) {
    alert(user);
  }
}
