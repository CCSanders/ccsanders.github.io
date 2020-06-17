import { Injectable } from '@angular/core';
import { SoftwareProjectModel } from '../software/models/software-project.model';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  //TODO : have this pulling data from an api 
  private dummyData : SoftwareProjectModel[] = new Array(
    
    {
      id : "web-portfolio",
      title : "Web Portfolio V1.0",
      description : "The website you are currently on! Pretty meta, right?",
      techStack: new Array("Angular 10", "SCSS", "TypeScript")
    },
    {
      id : "covid-graphs",
      title : "Programmatically Graphing COVID-19", 
      description : "Assisted my girlfriend in learning Python for an extra credit project by pulling current COVID data and graphing it using data visualization libraries.",
      techStack: new Array("Python", "pandas", "Matplotlib")
    },
    {
      id : "cs301-final-project",
      title : "Relational Select & Join Algorithms in Java",
      description : "Final Project for Intro to Database Management Systems at UA. The goal was to implement selection and projection on a given set of data in a language of choice.",
      techStack: new Array("Java")
    },
    {
      id : "cs300-final-project",
      title : "Interprocess Communication & Multithreading Project",
      description : "Final Project for Operating Systems at UA. This project consists of a C process and a multithreaded Java process that communicate using System V message queues to process text.",
      techStack: new Array("C", "Java", "System V")
    },
    {
      id : "cs201-structures-library",
      title : "Data Structures & Algorithms Library", 
      description : "A compilation of the projects I had to implement in DS/A. Includes Dynamic Circular Arrays, Heaps, Binomial Heaps, & Left-Leaning Red Black Trees",
      techStack: new Array("C++")
    },
    {
      id : "fbla-coding-programming",
      title : "FBLA Coding & Programming Competition Project",
      description : "Future Business Leaders of America Coding & Programming competition project. Employee & POS Software with proto-Cloud Support",
      techStack: new Array("Java", "SQL")
    },
    {
      id : "kenaston-proj",
      title : "AP Computer Science Extra Credit Project",
      description : "My first extracurricular project in high school. Notifications phone app for teacher's church.",
      techStack: new Array("iOS", "Swift")
    }
  );

  constructor() { }

  public getProjects() : SoftwareProjectModel[]{
    return this.dummyData;
  }

  public getProject(id : string) : SoftwareProjectModel{
    return this.dummyData.find(element => element.id = id);
  }
}
