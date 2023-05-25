import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
 
  {path: "pages/add", component: AddComponent },
  {path:"pages/about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
