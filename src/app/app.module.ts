//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { MarkdownModule } from 'ngx-markdown'

//app modules
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { DataService } from './services/data.service';
import { GamesService } from './services/games.service';
import { SoftwareService } from './services/software.service';

import { AppHomeModule } from './home/home.module';
import { AppSoftwareModule } from './software/software.module';
import { AppGamesModule } from './games/games.module';
import { AppBlogModule } from './blog/blog.module';
import { AppAcademiaModule } from './academia/academia.module';
import { AppSharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    //APP MODULES
    AppHomeModule,
    AppSoftwareModule,
    AppGamesModule,
    AppBlogModule,
    AppAcademiaModule,
    AppSharedModule,
    AppRoutingModule,

    //3RD PARTY MODULES
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
    RouterModule.forRoot([]),
    MarkdownModule.forRoot({
      loader: HttpClientModule,
      sanitize: SecurityContext.NONE
    })
  ],
  providers: [
    DataService,
    SoftwareService,
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
