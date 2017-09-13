import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SecondpageComponent } from './secondpage.component';

@NgModule({
  declarations: [
    
    SecondpageComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SecondpageComponent]
})
export class SecondpageModule { }
