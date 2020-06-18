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
      summary : "The website you are currently on! Pretty meta, right? Click to learn more!",
      description: "This project is the website you are currently on. This is my big personal project for the first half of 2020. I am using it to refine my application development skills in Angular, while also adding support for an API of some sort and cloud databases.",
      techStack: new Array("Angular 10", "SCSS", "TypeScript"),
      type: "Personal Project / Portfolio",
      lastUpdated: "6/18/2020",
      location: "http://ccsanders.github.io/",
      repo: "https://github.com/CCSanders/ccsanders.github.io/tree/codebase"
    },
    {
      id : "covid-graphs",
      title : "Programmatically Graphing COVID-19", 
      summary : "Assisted my girlfriend in learning Python for an extra credit project by pulling current COVID19 data and graphing it using data visualization libraries.",
      description: "The COVID19 Pandemic has become a big part of our lives in 2020. My girlfriend was tasked with improving herself technologically in her finance course at her college, so I decided to teach her Python. We decided to create dynamically generated graphs of COVID data from different countries based on a report from the NYT and data sources from health organizations.",
      techStack: new Array("Python", "pandas", "Matplotlib"),
      type: "School Project",
      lastUpdated: "4/30/2020",
      repo: "https://github.com/CCSanders/covid-graphs"
    },
    {
      id : "cs301-final-project",
      title : "Relational Select & Join Algorithms in Java",
      summary : "Final Project for Intro to Database Management Systems at UA. The goal was to implement selection and projection on a given set of data in a language of choice.",
      description: "The final project for my Intro to Database Management Systems course at the University of Alabama. Based on the information we learned about how database systems implement SQL joins and selects, we had to replicate the algorithms that performed these selections and projections on a preselected set of relational data in a language of our choice, WITHOUT using SQL, of which I used Java. My project got a 100.",
      techStack: new Array("Java"),
      type: "School Project",
      lastUpdated: "April 2020",
      repo: "https://github.com/CCSanders/cs301-final-project"
    },
    {
      id : "cs300-final-project",
      title : "Interprocess Communication & Multithreading Project",
      summary : "Final Project for Operating Systems at UA. This project consists of a C process and a multithreaded Java process that communicate using System V message queues to process text.",
      description: "The final project for my Operating Systems course at the University of Alabama. This goal of this project was to combine gained knowledge on multithreaded, interprocess communication, and semaphores / mutexes to create a system that quickly analyzed text passages. A C Process took in a number of prefix arguments and sent requests to a running Java process, which opened up a number of passages and used a Trie data structure to find the longest word with a given prefix in each passage simultaneously. We also had to create a set of in-depth test cases and document our testing processes. One of the coolest school projects I've gotten to work on, and my project got a grade of 100%. It was a very complex project and I was super nervous that I had forgotten an edge case! ",
      techStack: new Array("C", "Java", "System V"),
      type: "School Project",
      lastUpdated: "April 2020",
      repo: "https://github.com/CCSanders/cs300-final-project"
    },
    {
      id : "cs201-structures-library",
      title : "Data Structures & Algorithms Library", 
      summary : "A compilation of the projects I had to implement in DS/A. Includes Dynamic Circular Arrays, Heaps, Binomial Heaps, & Left-Leaning Red Black Trees",
      description: "Over the course of my Data Structures & Algorithms course, we had three projects in C++ to get some hands on practice with the theory we were learning in class. Project 1 was an implementation of a Circular Dynamic Array, which included a random buffer and really fast amortized insert and delete time. Project 2 related to heaps, where I implemented a normal heap and a Binomial Heap using the Circular Dynamic Array from P1. The third project was a Left-Leaning Red-Black Tree. The implementation is difficult and my code wasn't perfect, but my professor (who went to Princeton) was advised by the creator of the LLRBT so he was excited to have us implement it.",
      techStack: new Array("C++"),
      type: "School Project",
      lastUpdated: "Nov 2019",
      repo: "https://github.com/CCSanders/cs200-library"
    },
    {
      id : "fbla-coding-programming",
      title : "FBLA Coding & Programming Competition Project",
      summary : "Future Business Leaders of America Coding & Programming competition project. Employee & POS Software with proto-Cloud Support. 10th in the Nation",
      description: "When I heard that the Future Business Leaders of America chapter had a programming contest (of which I had never done extracurricular programming), I joined the club immediately! The goal was to implement a employee tracking and point-of-sale software. I used Java, Spring, and SQL. I had to present in front of judges and got 1st in Texas and 10th in the Nation! This led me to become the President of the local chapter for my senior year.",
      type: "Competition Project",
      lastUpdated: "2017",
      techStack: new Array("Java", "SQL")
    },
    {
      id : "kenaston-proj",
      title : "AP Computer Science Extra Credit Project",
      summary : "My first extracurricular project in high school. Notifications phone app for teacher's church.",
      description: "In my third year of CS classes in high school (all with the same teacher), I was quite comfortable programming and using introductory computer science concepts. In my HS's first year of AP Computer Science, I was the only student taking the test, so he let me study independently for the test while giving me a large assignment to work on over the school year. He wanted me to create an iOS application for his church that would track check-ins and allow people to sign up for a newsletter.",
      techStack: new Array("iOS", "Swift"),
      type: "School Project",
      lastUpdated: "2016",
      repo: "https://github.com/CCSanders/kenaston-proj"
    }
  );

  constructor() { }

  public getProjects() : SoftwareProjectModel[]{
    return this.dummyData;
  }

  public getProject(id : string) : SoftwareProjectModel{
    return this.dummyData.find(element => element.id == id);
  }
}
