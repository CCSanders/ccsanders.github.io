import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-academia',
  templateUrl: './academia.component.html',
  styleUrls: ['./academia.component.scss']
})
export class AcademiaComponent implements OnInit {

  constructor(private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle("Academia - Colin Sanders Portfolio");
  }

}
