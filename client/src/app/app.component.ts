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
  cakeReview: any;

  stars = [
    { value: 5, text: '★★★★★' },
    { value: 4, text: '★★★★☆' },
    { value: 3, text: '★★★☆☆' },
    { value: 2, text: '★★☆☆☆' },
    { value: 1, text: '★☆☆☆☆' },
  ];

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
      for (let c of this.cakes){
        c.stars = null;
        c.comment = null;
      }
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
    this.newCake = {baker: null, imagepath: null};
  };

  newReviewToService(id, review, cake){
    let observable = this._httpService.newReview(id, review);
    observable.subscribe((data)=>{
      console.log(data);
    })
    cake.stars = null;
    cake.comment = null;
    this.getAllFromService();
  };


}
