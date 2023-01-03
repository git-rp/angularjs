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
  serverName = 'TestServer';
  userName = 'Bhuvi';
  isUSerEmpty = false;
  constructor() {
    setTimeout(() => {
      //alert('hi --' + this.allowNewServer);
      this.allowNewServer = true;
      //alert('hi --' + this.allowNewServer);
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created..' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    // alert(this.userName.length);
    if (this.userName.length > 0) {
      this.isUSerEmpty = true;
    } else {
      this.isUSerEmpty = false;
    }
  }
  onUserAdd() {
    this.userName = '';
    this.isUSerEmpty = false;
  }
}
