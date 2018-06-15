import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ratemycakes';
  cakes: any;
  singleCake: any;
  newCake: any;

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.getAllFromService();
    this.newCake = {baker: null, imagepath: null};
    this.singleCake = null;
  };

  getAllFromService(){
    let observable = this._httpService.getAll();
    observable.subscribe((data)=>{
      console.log(data);
      this.cakes = data;
    })
  };

  getOneFromService(id){
    let observable = this._httpService.getOne(id);
    observable.subscribe((data)=>{
      console.log(data);
      this.singleCake = data;
    })
  };

  newCakeToService(cake){
    let cakeObject = {baker:cake.baker, imagepath:cake.imagepath, averagestars:0, reviews:[]};
    let observable = this._httpService.newCake(cakeObject);
    observable.subscribe((data)=>{
      console.log(data);
      this.singleCake = data;
    })
  };

  newReviewToService(id, stars, comment){
    let reviewObject = {stars:stars, comment:comment};
    let observable = this._httpService.newReview(id, reviewObject);
    observable.subscribe((data)=>{
      console.log(data);
    })
  };


}
