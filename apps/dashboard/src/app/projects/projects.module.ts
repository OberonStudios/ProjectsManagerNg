import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@workshop/material';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
