import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuIcon: any = faBars;
  screenWidth: number;

  constructor(public router : Router) { 
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth
    };
  }

  scrollTo(selector: any){
    const element = document.querySelector(selector);
    if(element){
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}