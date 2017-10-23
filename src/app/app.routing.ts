import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ResumedwnldComponent } from "./resumedwnld/resumedwnld.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CreationsComponent } from "./creations/creations.component";


export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumedwnldComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'creations', component: CreationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}