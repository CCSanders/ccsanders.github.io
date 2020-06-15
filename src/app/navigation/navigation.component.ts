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
  isCollapsed: boolean = true;

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
    const navbar = document.getElementById("sideNav");
    
    //if the navbar exists, we should account for it when scrolling to the item we want and then close it. 
    if(navbar){
      const offset = element.getBoundingClientRect().top - navbar.getBoundingClientRect().bottom + 56;
      window.scrollTo({top: offset, behavior: "smooth"});
      this.isCollapsed = true;
    }else{
      element.scrollIntoView({behavior: "smooth"});
    }

    //const navbarHeight = document.querySelector()

  }
}