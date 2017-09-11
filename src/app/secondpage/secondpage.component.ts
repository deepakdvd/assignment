import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.less']
})
export class SecondpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  signUp(a){
    if(a==""){
      this.router.navigate(['/secondpage']);
    }
    else{
    console.log("adsad");
    this.router.navigate(['/thirdpage']);
  }
}

  onClickMe(){
    this.router.navigate(['/thirdpage']);
  }

}


