import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieAllComponent } from './components/movie-all/movie-all.component'
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component'
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component'
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component'


const routes: Routes = [

  {path: "", redirectTo: "movies", pathMatch:"full"},
  {path:'movies', component: MovieAllComponent},
  {path:'movies/:category', component: MovieCategoriesComponent},
  {path:'movie/:id', component: MovieDetailComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
