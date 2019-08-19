import { Component,OnInit } from '@angular/core';
//--IMPORT--
import {HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mongoose Dashboard';
  animals;
  constructor(private _httpService: HttpService){
    this.getAnimals();
    console.log(this.animals);
  }
  ngOnInit(){
    this.getAnimals();
  }
  getAnimals(){
    let observable = this._httpService.getAnimals();
    observable.subscribe(data => {
      this.animals = data['results'];
      console.log(data);
    });
  }
}
