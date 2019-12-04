import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieAllComponent } from './components/movie-all/movie-all.component'

import { MovieGenreComponent } from './components/movie-genre/movie-genre.component'
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component'
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [

  {path: "", redirectTo: "movies", pathMatch:"full"},
  {path:'movies', component: MovieAllComponent},
  {path:'movies/genre', component: MovieGenreComponent},
  
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'profile/:id', component: ProfileComponent},
  {path:'order', component: OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
