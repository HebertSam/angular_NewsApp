import { Component } from '@angular/core';
import {NgForm} from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section = "";
  search = "";
  sectionOptions = ["home","opinion", 
    "world","national","politics","upshot","nyregion","business","technology","science","health","sports","arts","books","movies","theater","sundayreview","fashion","tmagazine","food","travel","magazine","realestate","automobiles","obituaries",  "insider"];

  constructor(){

  }

  find(){
    console.log(this.search)
    console.log(this.section)
  }
}

  // getSelection(){
  //   return
  // }
