import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import {ProjectsGuard} from "./projects.guard";
import {ServicesComponent} from "./services/services.component";
import {MobileApplicationsComponent} from "./mobile-applications/mobile-applications.component";
import {GalleryComponent} from "./gallery/gallery.component";

const routes: Routes = [
  { path: 'mobile-applications', component: MobileApplicationsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'web-projects', component: WebProjectsComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [ProjectsGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
