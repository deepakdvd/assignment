import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AssignmentComponent } from './assignment/assignment.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { DesignComponent } from './design/design.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    SecondpageComponent,
    ThirdpageComponent,
    DesignComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
