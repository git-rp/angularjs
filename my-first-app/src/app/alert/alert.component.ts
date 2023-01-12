import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message: string;
  @Output() closeEvent = new EventEmitter<void>();
  error = true;
  onClose() {
    //alert('closing');
    this.closeEvent.emit();
  }
}
