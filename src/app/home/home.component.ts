import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faGamepad, faChalkboard, faPen } from '@fortawesome/free-solid-svg-icons';
import { NgbProgressbarModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap'
import { config } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbProgressbarConfig]
})
export class HomeComponent {

  title: any = "HOME";
  
  //icons
  faLaptopCode = faLaptopCode;
  faGamepad = faGamepad;
  faChalkboard = faChalkboard;
  faPen = faPen;

  constructor(pbConfig: NgbProgressbarConfig) {
    pbConfig.striped = true;
    pbConfig.animated = true;
    pbConfig.showValue = true;
   }
}