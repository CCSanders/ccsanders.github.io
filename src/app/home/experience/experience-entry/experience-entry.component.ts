import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-entry',
  templateUrl: './experience-entry.component.html',
  styleUrls: ['./experience-entry.component.scss']
})
export class ExperienceEntryComponent implements OnInit {

  @Input() title: string;
  @Input() timePeriod: string;
  @Input() company: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
