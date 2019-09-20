import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

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
		console.log(this._projects);
	}

	get projects() {
		return this._projects
	}
}
