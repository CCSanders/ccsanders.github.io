import { Component, OnInit } from '@angular/core';
import { TitleTagService } from '../services/title-tag.service';

@Component({
  selector: 'app-academia',
  templateUrl: './academia.component.html',
  styleUrls: ['./academia.component.scss']
})
export class AcademiaComponent implements OnInit {

  constructor(private titleTagService: TitleTagService) { }

  ngOnInit() {
    this.titleTagService.setTitle("Academia - Colin Sanders Portfolio");
    this.titleTagService.setSocialMediaTags("https://ccsanders.github.io/academia", "Academia - Colin Sanders Portfolio", "Academia - Colin Sanders Portfolio", '/assets/website-logo.png');
  }

}
