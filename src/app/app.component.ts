import { Component } from '@angular/core';
import { NgForm } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private section:string = "";
  private search:string = "";
  private sectionOptions: Array<string> = ["home","opinion", 
    "world","national","politics","upshot","nyregion","business","technology","science","health","sports","arts","books","movies","theater","sundayreview","fashion","tmagazine","food","travel","magazine","realestate","automobiles","obituaries",  "insider"];
  private url:string = "http://api.nytimes.com/svc/topstories/v2/";
  private apiKey:string = "?api-key=8aa5953a8a17443f9b554d744c81c694";
  private resType:string = ".json";
  private resData;
  private searchData = [];

  constructor(private _http:HttpClient){}

  ngOnInit(){
    this.getData("home");
  }

  getData(section){
    this._http.get(this.url + section + this.resType + this.apiKey).subscribe(
      (res) => {
        console.log(res)
        this.resData = res;
        this.searchData = this.resData.results;
      },
      (err) => {
        console.log(err)
      }
    )   
  }


  searchResults(){
    this.searchData = [];
    this.resData.results.forEach(element => {
      if (element.abstract.toUpperCase().includes(this.search.toUpperCase()) || element.title.toUpperCase().includes(this.search.toUpperCase())){
        this.searchData.push(element);
      }
    })
    console.log(this.searchData.length)
  }
}

  // lookUp(search){
  //   this.resData.results.forEach(element => {
  //     for (let key in element){
  //       console.log(key)
  //       // if (element.key.toUpperCase().includes(search.toUpperCase())){
  //       //   this.searchData.push(element)
  //       // }
  //     }
  //     });
  //     // if (element.abstract.toUpperCase().includes(search.toUpperCase())){
  //     //   this.searchData.push(element);
  //     // }
    // }

//<div *ngIf="data.abstract.toUpperCase().includes(search.toUpperCase()) || data.title.toUpperCase().includes(search.toUpperCase())">

  //http://api.nytimes.com/svc/topstories/v2/{section}.{response-format}?api-key={your-api-key}