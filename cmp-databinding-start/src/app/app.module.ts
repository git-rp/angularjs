import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { HomeComponent } from './home/home.component';
import { GreetUserComponent } from './greet-user/greet-user.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import { HighlighGreenDirective } from './customdirectives/highlightgreen/highligh-green.directive';
import { BetterHighlighterDirective } from './customdirectives/highlightgreen/better-highlighter.directive';
import { UnlessDirective } from './customdirectives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    HomeComponent,
    GreetUserComponent,
    EmployeeComponent,
    SalaryComponent,
    HighlighGreenDirective,
    BetterHighlighterDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
