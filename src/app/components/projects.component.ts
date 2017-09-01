import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html'
})
export class ProjectComponent {
  projects: Project[];

  constructor() {
    this.projects = this.getProjects();
  }

  private getProjects() {
    let project_list: Project[] = [
      {
        "title" : "URLShortener",
        "description" : "A url shortener clone developed in NodeJS",
        "technology" : [ "NodeJS", "JavaScript"],
        "github_link" : "https://github.com/ajaxisme/URLShortener"
      },
      {
        "title" : "tubix",
        "description" : "A web video player with lyrics to go along with.",
        "technology" : [ "Flask", "Python", "React", "JavaScript"],
        "github_link" : "https://github.com/ajaxisme/tubix"
      }
    ];

    return project_list;
  }

}

interface Project {
  title: string,
  description: string;
  technology: string[];
  github_link: string;
}
