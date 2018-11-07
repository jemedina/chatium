import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SetupUserComponent } from './components/setup-user/setup-user.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent },
  {path : 'setup', component : SetupUserComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }