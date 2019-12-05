import { Component, OnInit } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  size: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
