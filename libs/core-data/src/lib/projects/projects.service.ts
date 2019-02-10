import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiUrl = 'http://localhost:3000/projects';

  constructor(private httpClient: HttpClient) { }
  
  getUrl () { return this.apiUrl; }
  getUrlForId(id) { return `${this.getUrl()}/${id}` } 

  all() {
    return this.httpClient.get<Project[]>(this.getUrl());
  }
  
  create(project) {
    return this.httpClient.post<Project[]>(this.getUrl(), project);
  }

  update(project) {
    return this.httpClient.patch<Project[]>(this.getUrlForId(project.id), project);
  }

  delete(id) {
    return this.httpClient.delete<Project[]>(this.getUrlForId(id));
  }
}
