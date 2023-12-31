import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { SelectionListsContainer } from './components/selection-lists-container/selection-lists-container.component';
import { DockerPage } from './pages/docker-page/docker-page.component';
import { HomePage } from './pages/home-page/home-page.component';
import { SelectionList } from './components/selection-list/selection-list.component';
import { AccountPage } from './pages/account-page/account-page.component';
import { DockerfileOutput } from './components/dockerfile-output/dockerfile-output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    SelectionListsContainer,
    DockerPage,
    HomePage,
    SelectionList,
    AccountPage,
    DockerfileOutput
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
