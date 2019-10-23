import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AmbientCanvasComponent } from './home/ambient-canvas/ambient-canvas.component';
import { GridLinesComponent } from './shared/grid-lines/grid-lines.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ProjectModalComponent } from './home/projects/project-modal/project-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AmbientCanvasComponent,
    GridLinesComponent,
    ProjectsComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
