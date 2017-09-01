import { Component } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html'
})
export class MenuComponent {
  private resume_pdf: string = require("../../assets/pdf/resume.pdf");
  private portfolio_pdf: string = require("../../assets/pdf/portfolio.pdf");
}
