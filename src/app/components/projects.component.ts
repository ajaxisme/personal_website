import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent {
  projects: Project[];
  current_project: Project;

  constructor() {
    this.projects = this.getProjects();
    this.current_project = this.projects[0];
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
        "title" : "Tubix",
        "description" : "A web video player with lyrics to go along with",
        "technology" : [ "Flask", "Python", "React", "JavaScript"],
        "github_link" : "https://github.com/ajaxisme/tubix"
      },
      {
        "title" : "NZSearch",
        "description" : "A mini web search engine for .nz domain",
        "technology" : [ "C++", "Python"],
        "github_link" : "https://bitbucket.org/ajaxisme/query_processor"
      },
      {
        "title" : "Password Manager",
        "description" : "A password manager to store passwords securely on cloud and on premise",
        "technology" : [ "Python", "C++"],
        "github_link" : "https://bitbucket.org/crypto-nyu/passwordmanager"
      },
      {
        "title" : "File System Checker",
        "description" : "A file system checker to check FUSE file system health",
        "technology" : [ "Python"],
        "github_link" : "https://bitbucket.org/ajaxisme/file-system-checker"
      }
    ];

    return project_list;
  }

  changeCurrentProject(index: number) {
    this.current_project = this.projects[index];
  }

}

interface Project {
  title: string,
  description: string;
  technology: string[];
  github_link: string;
}
