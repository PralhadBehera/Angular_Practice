import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { ToDoComponent } from './to-do/to-do.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login', // Path should be a string enclosed in quotes
    component: LoginComponent
  },
  {
    path: 'signup', // Path should be a string enclosed in quotes
    component: SignupComponent
  },
  {
    path: 'nav', // Path should be a string enclosed in quotes
    component: NavComponent
  },
  {
    path: 'to-do', // Path should be a string enclosed in quotes
    component: ToDoComponent
  },
  {
    path: 'Search', // Path should be a string enclosed in quotes
    component: SearchComponent
  },

  {
    path: 'Home', // Path should be a string enclosed in quotes
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
