import { Component, OnInit } from '@angular/core';

import { SoftwareService } from '../services/software.service';
import { SoftwareProjectModel } from './models/software-project.model';
import { TitleTagService } from '../services/title-tag.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  public projects : SoftwareProjectModel[]
  public showAll : boolean = false;
  public initialShowCount: number = 6;

  constructor(public softwareService: SoftwareService, private titleTagService: TitleTagService) { }

  ngOnInit() {
    this.titleTagService.setTitle("Software - Colin Sanders Portfolio");
    this.titleTagService.setSocialMediaTags("https://ccsanders.github.io/software", "Software - Colin Sanders Portfolio", "Software - Colin Sanders Portfolio", '/assets/website-logo.png');

    this.projects = this.softwareService.getProjects();
  }

}
