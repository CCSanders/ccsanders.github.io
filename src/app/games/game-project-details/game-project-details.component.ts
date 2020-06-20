import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowCircleLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { GameProjectModel } from '../models/game-project.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-project-details',
  templateUrl: './game-project-details.component.html',
  styleUrls: ['./game-project-details.component.scss']
})
export class GameProjectDetailsComponent implements OnInit {

  private _projectId : string;
  public project : GameProjectModel;

  faArrowCircleLeft = faArrowCircleLeft;
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;

  constructor(private _activatedRoute : ActivatedRoute, private _gamesService: GamesService) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(params => {
      this._projectId = params.get('projectId');
      this.project = this._gamesService.getProject(this._projectId);
    })
  }

}
