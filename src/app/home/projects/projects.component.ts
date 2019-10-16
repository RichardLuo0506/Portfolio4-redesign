import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from './projects.service';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
	selector: 'projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
	private _projects

	constructor(private projectsService: ProjectsService) { }

	ngOnInit() {
		this._projects = this.projectsService.projects

	}

	@ViewChild(ProjectModalComponent, { static: true }) projectModal
	ngAfterContentInit() {
		this.projectModal.viewProject(this._projects[3]);
	}

	get projects() {
		return this._projects
	}
}
