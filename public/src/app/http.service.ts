import { Injectable } from '@angular/core';

//---IMPORT---
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//--WHERE WE CREATE A OBJECT---
export class HttpService {

  constructor( private _http: HttpClient ) {
  }

  //--OBSERVABLE METHOD-- SUBCRIBE TO A URL IN BACKEND
  getAnimals(){
    return this._http.get('/home');
  }
}
