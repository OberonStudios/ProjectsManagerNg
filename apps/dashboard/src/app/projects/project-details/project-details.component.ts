import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  originalTitle: string;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() currentProject: Project;

  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }
}
