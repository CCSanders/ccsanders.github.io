import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faGamepad, faChalkboard, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  faLaptopCode = faLaptopCode;
  faGamepad = faGamepad;
  faChalkboard = faChalkboard;
  faPen = faPen;

  public shouldShowProjectCards = false;

  constructor() { }

  ngOnInit() {
    this.shouldShowProjectCards = window.innerWidth > 991;
    
    window.onresize = () => {
      this.shouldShowProjectCards = window.innerWidth > 991;
    }
  }

}
