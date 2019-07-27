import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { HeroesComponent }      from './heroes/heroes.component';
//import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //{ path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  //{ path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }