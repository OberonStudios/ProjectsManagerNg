import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';

  links = [
    {path: '/', icon:'home', title: 'Home'},
    {path: '/customers', icon:'customers', title: 'Customers'},
    {path: '/projects', icon:'projects', title: 'Projects'}
  ];
}
