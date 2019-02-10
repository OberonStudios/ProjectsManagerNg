import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedProject;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.resetProject();
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  saveProject(project) {
    if(!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project) {
      this.projectsService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  resetProject() {
    this.selectedProject = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
  }

  cancel() {
    this.resetProject();
  }

}
