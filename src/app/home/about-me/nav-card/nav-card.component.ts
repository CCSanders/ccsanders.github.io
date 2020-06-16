import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss']
})
export class NavCardComponent implements OnInit {

  @Input() title: string;
  @Input() route: string;
  @Input() color: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
