import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro.component';
import { ProjectComponent } from './components/projects.component';
import { SkillComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { EducationComponent } from './components/education.component';
import { DesignComponent } from './components/design.component';
import { ContactComponent } from './components/contact.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    DesignComponent,
    ContactComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
