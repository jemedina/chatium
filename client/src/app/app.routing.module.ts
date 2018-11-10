import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SetupUserComponent } from './components/setup-user/setup-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectpeopleComponent } from './components/connectpeople/connectpeople.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'setup', component: SetupUserComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'chat/:friendId', component: ChatComponent },
      { path: 'connect', component: ConnectpeopleComponent },
      { path: '**', component: ConnectpeopleComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }