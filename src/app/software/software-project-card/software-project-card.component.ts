import { Component, OnInit, Input } from '@angular/core';
import { SoftwareProjectModel } from '../models/software-project.model';

@Component({
  selector: 'app-software-project-card',
  templateUrl: './software-project-card.component.html',
  styleUrls: ['./software-project-card.component.scss']
})
export class SoftwareProjectCardComponent implements OnInit {

  @Input() project : SoftwareProjectModel;

  constructor() { }

  ngOnInit(): void {
  }

}
