import { Component, Input } from '@angular/core';
import { GameProjectModel } from '../models/game-project.model';

@Component({
  selector: 'app-game-project-card',
  templateUrl: './game-project-card.component.html',
  styleUrls: ['./game-project-card.component.scss']
})
export class GameProjectCardComponent {

  @Input() project : GameProjectModel;

  constructor() { }

}
