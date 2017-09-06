import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs: string[];
  current_tab: string;

  private resume_pdf: string = require("./../assets/pdf/resume.pdf");
  private portfolio_pdf: string = require("./../assets/pdf/portfolio.pdf");

  constructor() {
    this.tabs = ["intro", "projects", "skills", "experience", "education", "design", "contact"];
    this.current_tab = this.tabs[1];
  }

  changeTab(tab: number) {
    this.current_tab = this.tabs[tab];
  }
}
