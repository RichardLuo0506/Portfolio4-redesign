import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
	providedIn: 'root'
})
export class ProjectsService {
	private _projects: Project[]

	constructor() {
		this._projects = [
			new Project({
				title: 'Portfolio v3',
				subtitle: 'Built With AngularJS',
				imgSrc: 'assets/img/portfolio3.png'
			}),
			new Project({
				title: 'Goat Alerts',
				subtitle: 'Automated TradingView Bot',
				imgSrc: 'assets/img/goat-sw.png',
			}),
			new Project({
				title: 'Portfolio v4',
				subtitle: 'Built With Angular 8',
				imgSrc: 'assets/img/portfolio4-screenshot-draft.png'
			}),
			new Project({
				title: 'Backbone File List',
				subtitle: 'Keyboard navigable fully accessible table',
				imgSrc: 'assets/img/pagelist-demo.png'
			}),
			new Project({
				title: 'List Manager',
				subtitle: 'Nested list items editor',
				imgSrc: 'assets/img/list-manager2.png'
			}),
			new Project({
				title: 'Template Manager',
				subtitle: 'Batch templates creator',
				imgSrc: 'assets/img/template-manager2.png'
			}),
			new Project({
				title: 'Schedule Tracker',
				subtitle: 'Email delivery status tracker',
				imgSrc: 'assets/img/schedule-tracker2.png'
			}),
		]

		for (let i in this._projects) {
			let counter = parseInt(i) + 1
			let number = counter > 9 ? counter.toString() : '0' + counter
			this._projects[i].number = number
		}
	}

	get projects() {
		return this._projects
	}
}