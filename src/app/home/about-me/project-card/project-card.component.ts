import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() title: string;
  @Input() route: string;
  @Input() color: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}