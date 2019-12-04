//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule} from "@angular/material"

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

const routes: Routes = [
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
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
