import { Component, OnInit } from '@angular/core';

import { GameProjectModel } from './models/game-project.model';
import { GamesService } from '../services/games.service';
import { TitleTagService } from '../services/title-tag.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
 
  public projects : GameProjectModel[]
  public showAll : boolean = false;
  public initialShowCount: number = 6;

  constructor(public gamesService: GamesService, private titleTagService: TitleTagService) { }

  ngOnInit() {
    this.projects = this.gamesService.getProjects();
    this.titleTagService.setTitle("Games - Colin Sanders Portfolio");
    this.titleTagService.setSocialMediaTags("https://ccsanders.github.io/games", "Games - Colin Sanders Portfolio", "Games - Colin Sanders Portfolio", '/assets/imgs/website-logo.png');
  }

}
