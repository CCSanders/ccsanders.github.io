import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoftwareService } from 'src/app/services/software.service';
import { SoftwareProjectModel } from '../models/software-project.model';

@Component({
  selector: 'app-software-project-details',
  templateUrl: './software-project-details.component.html',
  styleUrls: ['./software-project-details.component.scss']
})
export class SoftwareProjectDetailsComponent implements OnInit {

  private _projectId : string;
  private _project : SoftwareProjectModel;

  constructor(private _activatedRoute : ActivatedRoute, private _softwareService : SoftwareService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this._projectId = params.get('projectId');
      this._project = this._softwareService.getProject(this._projectId);
    })
  }

}
