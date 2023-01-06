import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('nameInput') name: ElementRef;
  title = 'recipe-app';
  loadedFeature = 'recipe';
  constructor() {}
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  // onAddItem() {
  //   alert('test--' + this.name.nativeElement.value);
  // }
}
