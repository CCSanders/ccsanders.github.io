import { Component, OnInit } from '@angular/core';

import { SoftwareService } from '../services/software.service';
import { SoftwareProjectModel } from './models/software-project.model';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  public projects : SoftwareProjectModel[]
  public showAll : boolean = false;
  public initialShowCount: number = 6;

  constructor(public softwareService: SoftwareService) { }

  ngOnInit() {
    this.projects = this.softwareService.getProjects();
  }

}
