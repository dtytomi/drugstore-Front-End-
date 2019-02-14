import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "./home/home.component";

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  

  // otherwise redirect to home
  { path: '**', redirectTo: '/home' }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
