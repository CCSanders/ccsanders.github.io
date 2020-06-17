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
//TODO CONVERT THESE INTO RESPECTIVE MODULES
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SoftwareComponent } from './software/software.component';
import { GamesComponent } from './games/games.component';
import { AcademiaComponent } from './academia/academia.component';
import { BlogComponent } from './blog/blog.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { SkillsComponent } from './home/skills/skills.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { WipComponent } from './shared/wip/wip.component';
import { NavCardComponent } from './home/about-me/nav-card/nav-card.component';
import { ExperienceEntryComponent } from './home/experience/experience-entry/experience-entry.component';
import { SoftwareProjectCardComponent } from './software/software-project-card/software-project-card.component';
import { SoftwareProjectDetailsComponent } from './software/software-project-details/software-project-details.component';
import { DataService } from './services/data.service';
import { GamesService } from './services/games.service';
import { SoftwareService } from './services/software.service';
import { RouterOutletComponent } from './shared/router-outlet/router-outlet.component';

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
        component: RouterOutletComponent,
        children: [
          {
            path: '',
            component: SoftwareComponent
          },
          {
            path: ':projectId',
            component: SoftwareProjectDetailsComponent
          }
        ]
      },
      {
        path: 'games',
        component: GamesComponent
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
  },
  {
    path: 'assets/resume.pdf', 
    redirectTo: '../assets/resume.pdf'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SoftwareComponent,
    GamesComponent,
    AcademiaComponent,
    BlogComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutMeComponent,
    ContactMeComponent,
    WipComponent,
    NavCardComponent,
    ExperienceEntryComponent,
    SoftwareProjectCardComponent,
    SoftwareProjectDetailsComponent,
    RouterOutletComponent
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
  providers: [
    DataService,
    SoftwareService,
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
