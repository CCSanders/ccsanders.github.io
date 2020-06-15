//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

//3rd party modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

//app modules
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { GameDevelopmentComponent } from './game-development/game-development.component';
import { AcademiaComponent } from './academia/academia.component';
import { BlogComponent } from './blog/blog.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { SkillsComponent } from './home/skills/skills.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { WipComponent } from './shared/wip/wip.component';
import { ProjectCardComponent } from './home/about-me/project-card/project-card.component';
import { ExperienceEntryComponent } from './home/experience/experience-entry/experience-entry.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'software',
        component: SoftwareDevelopmentComponent
      },
      {
        path: 'games',
        component: GameDevelopmentComponent
      },
      {
        path: 'academia',
        component: AcademiaComponent
      },
    ]
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SoftwareDevelopmentComponent,
    GameDevelopmentComponent,
    AcademiaComponent,
    BlogComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutMeComponent,
    ContactMeComponent,
    WipComponent,
    ProjectCardComponent,
    ExperienceEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FontAwesomeModule,
    NgbModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
