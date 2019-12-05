import { Component, OnInit } from '@angular/core';
import { NgbProgressbarModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [NgbProgressbarConfig]
})
export class SkillsComponent {

  constructor(pbConfig: NgbProgressbarConfig) {
    pbConfig.striped = true;
    pbConfig.animated = true;
    pbConfig.showValue = true;
  }
}
