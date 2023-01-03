import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //This is selecting by element
  //selector: '[app-server]', //This is by attributes
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server created...';
  constructor() {
    setTimeout(() => {
      //alert('hi --' + this.allowNewServer);
      this.allowNewServer = true;
      //alert('hi --' + this.allowNewServer);
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created..';
  }
}
