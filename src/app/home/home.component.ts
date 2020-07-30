import { Component, OnInit } from '@angular/core';

import { TitleTagService } from '../services/title-tag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private titleTagService: TitleTagService) {}

  ngOnInit(){
    this.titleTagService.setTitle("Home - Colin Sanders Portfolio");
    this.titleTagService.setSocialMediaTags("https://ccsanders.github.io/", "Home - Colin Sanders Portfolio", "Home - Colin Sanders Portfolio", '/assets/website-logo.png');
  }

}