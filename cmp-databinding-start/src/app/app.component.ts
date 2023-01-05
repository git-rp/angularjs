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
  userData = {
    name: '',
    age: 0,
  };
  ninja = {
    name: 'Ryu',
    belt: 'black',
  };
  country = {
    country: 'India',
    state: 'Maha',
    zip: '12345',
  };
  yell(e) {
    alert('i am yelling');
  }
  sayHello(userData: { name: string; age: number }) {
    alert(userData.name);
    this.userData = userData;
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }
}
