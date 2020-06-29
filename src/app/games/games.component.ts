import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { GameProjectModel } from './models/game-project.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
 
  public projects : GameProjectModel[]
  public showAll : boolean = false;
  public initialShowCount: number = 6;

  constructor(public gamesService: GamesService, private _titleService: Title) { }

  ngOnInit() {
    this.projects = this.gamesService.getProjects();
    this._titleService.setTitle("Games - Colin Sanders Portfolio");
  }

}
