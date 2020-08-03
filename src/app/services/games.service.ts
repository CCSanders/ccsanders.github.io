import { Injectable } from '@angular/core';
import { GameProjectModel } from '../games/models/game-project.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

//TODO : have this pulling data from an api 
private dummyData : GameProjectModel[] = new Array(
    
  {
    id : "ruin-escape",
    title : "Ruin Escape",
    summary : "A first-person fantasy puzzle game made in UE4 for the My First Game Jam: Summer 2020 event.",
    description: "Ruin Escape is a first-person fantasy puzzle game made as part of the My First Game Jam: Summer 2020 event. I worked with friends Cameron Meyer and Andrew Sylvester, as we've been wanting to work on some outside-of-work projects together. The primary goal of the jam was to learn something new, so we all decided to dive into the Unreal Game Engine and take a crack at making a game. We had a blast working on this project and can't wait to do more in UE4.",
    techStack: new Array("Unreal Engine 4", "C++"),
    type: "Game Jam Submission",
    lastUpdated: "7/31/2020",
    repo: "https://github.com/ssm-studios/FGJProject",
    location: "https://thebricktator.itch.io/ruin-escape"
  },
  {
    id : "atb-battlesystem",
    title : "ATB Battlesystem",
    summary : "A weekend project made in Unity trying to replicate a real-time turn-based battle system similar to Final Fantasy 13.",
    description: "As so many of my projects start, I play a game I really enjoy, in this case Final Fantasy 13, and decide to try to replicate a system within the game. The battle system is really dynamic and fluid in the game so I took a crack at creating the foundations in Unity using a multitude of overlapping finite state machines.",
    techStack: new Array("Unity", "C#"),
    type: "Weekend Systems Project",
    lastUpdated: "9/29/2019",
    repo: "https://github.com/CCSanders/ATB-Battlesystem"
  },
  {
    id: "commerce-kingdom",
    title: "Commerce Kingdom",
    summary: "A WIP Mobile 2D City-Builder Game, inspired by Z2's Trade Nations & Battle Nations",
    description: "Commerce Kingdom is my first attempt at a 2D / Mobile Game. This project connected to a Firebase realtime DB in order to dynamically load content and used open-source sprites in order to build a isometric city that generates resources.",
    techStack: new Array("Unity", "C#", "Firebase"),
    type: "Small Full-Game Project", 
    lastUpdated: "February 2020",
  },
  {
    id: "hex-game",
    title: "Hex Grid Strategy Engine",
    summary: "Inspired by the Civilization series, I spent about a month before my Summer 2019 internship working on a Hexagonal Strategy Game Engine in Unity",
    description: "Hex-Strategy games is one of my favorite genres, and I absolutely adore the Civilization series. This inspired me to follow the Catlike Coding Hex Tutorials to create a Civ V clone as much as I could in a month. This included an emphasis on procedural mesh generation and hex-grid algorithms such as shortest path.",
    techStack: new Array("Unity", "C#"),
    type: "Medium Full-Game Project", 
    lastUpdated: "7/26/2019",
    repo: "https://github.com/CCSanders/hex-game"
  },
  {
    id: "alacrity-academy-2d",
    title: "Alacrity Academy 2D",
    summary: "My team's project for the Game Development competition as part of Future Business Leaders of America, which is an RPG based around the life of a student. Took 1st place in Texas.",
    description: "After getting 10th in the Nation in Coding & Programming for the Future Business Leaders of America competitions, I decided to switch categories the following season to Game Development and join a team. The goal was to create an RPG that was school related. We took inspiration from the Pokemon overworld for movement. Other features included dynamic dialog and quests. My first time doing anything in Unity3D. Took 1st Place in Texas but unfortunately was unable to continue development for Nationals due to an internship.",
    techStack: new Array("Unity", "C#"),
    type: "School Project", 
    lastUpdated: "2018"
  },

);

  constructor() { }

  public getProjects() : GameProjectModel[]{
    return this.dummyData;
  }

  public getProject(id : string) : GameProjectModel{
    return this.dummyData.find(element => element.id == id);
  }
}
