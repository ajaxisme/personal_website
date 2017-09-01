import { Component } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  private profile_pic: string = require("../../assets/images/profile_pic.jpg");
}
