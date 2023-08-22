import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page.component';
import { DockerPage } from './pages/docker-page/docker-page.component';
import { AccountPage } from './pages/account-page/account-page.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  { path: 'docker', component: DockerPage },
  { path: 'account', component: AccountPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
