import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;

  heroText: string;
 
  heroBtnText : string;
 
  heroBtnUrl:   string ;
  constructor() {  this.heroHeading =  "We are your ultimate Winter experience Provider" ;

  this.heroText =  "We are awesome, we do great things, we,are awesome, we do great things.We are awesome, we do great things, we,are awesome, we do great things," ;

  this.heroBtnText =  "Learn More" ;

  this.heroBtnUrl =  "https://codefactory.wien"  ;
}

  ngOnInit() {
  }

}
