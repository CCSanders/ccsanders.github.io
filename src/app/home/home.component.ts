import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faGamepad, faChalkboard, faPen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: any = "HOME";
  
  faLaptopCode = faLaptopCode;
  faGamepad = faGamepad;
  faChalkboard = faChalkboard;
  faPen = faPen;

  constructor() { }

  ngOnInit() {

  }

}