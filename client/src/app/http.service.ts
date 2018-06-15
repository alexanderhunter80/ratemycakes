import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    console.log('getAll()');
    return this._http.get('/cakes');
  }

  getOne(id){
    console.log('getOne() - id '+id);
    return this._http.get('/cakes/'+id)
  };

  newCake(obj){
    console.log('newCake() - object '+obj);
    console.log(obj.baker, obj.imagepath);
    return this._http.post('/cakes', obj);
  };

  newReview(id, obj){
    console.log('newReview() - id '+id+' - review '+obj);
    return this._http.put('/cakes/'+id, obj);
  };

}
