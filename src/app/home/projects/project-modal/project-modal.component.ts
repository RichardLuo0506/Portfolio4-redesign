import { Component, OnInit, HostListener } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
	selector: 'project-modal',
	templateUrl: './project-modal.component.html',
	styleUrls: ['./project-modal.component.sass']
})
export class ProjectModalComponent implements OnInit {
	public show = false
	public project = {}

	public defaults = {
		show: false,
		project: {}
	}

	constructor() { }

	ngOnInit() {
	}

	ngOnDestroy() {
		clearAllBodyScrollLocks();
	}

	viewProject(project) {
		console.log(project);
		this.project = project
		this.show = true
		// this.targetElement = document.querySelector('#targetElementId');
		// disableBodyScroll(this.targetElement)
		disableBodyScroll()
	}

	@HostListener('window:keyup', ['$event'])
	keyEvent(e: KeyboardEvent) {
		if (!this.show)
			return
		if (e.key === 'Escape')
			this.close()
	}

	close() {
		this.reset(this.defaults)
	}

	reset(def) {
		this.show = false
		enableBodyScroll()

		var self = this
		setTimeout(() => {
			for (let prop in def) {
				self[prop] = def[prop]
			}
		}, 300)
	}
}
