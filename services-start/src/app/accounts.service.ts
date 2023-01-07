import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor(private loggingService: LoggingService) {}
  addAccount(name: string, status: string) {
    this.loggingService.logStatusChange(name + status);

    this.accounts.push({
      name: name,
      status: status,
    });
  }
  updateStatus(id: number, status: string) {
    this.loggingService.logStatusChange(this.accounts[id].name + status);
    this.accounts[id].status = status;
  }
  statusUpdated = new EventEmitter<string>();
}
