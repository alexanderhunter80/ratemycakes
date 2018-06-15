import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-cake',
  templateUrl: './show-cake.component.html',
  styleUrls: ['./show-cake.component.css']
})
export class ShowCakeComponent implements OnInit {

  @Input() cakeToShow: any;

  constructor() { }

  ngOnInit() {
  }

}
