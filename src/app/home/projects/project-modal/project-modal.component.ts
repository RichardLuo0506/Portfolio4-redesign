import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
	selector: 'project-modal',
	templateUrl: './project-modal.component.html',
	styleUrls: ['./project-modal.component.sass'],
	encapsulation: ViewEncapsulation.None
})
export class ProjectModalComponent implements OnInit {
	public show = false
	public project = {}
	public tab = 'details'

	public defaults = {
		show: false,
		project: {},
		tab: 'details'
	}

	constructor() { }

	ngOnInit() {
	}

	ngOnDestroy() {
		clearAllBodyScrollLocks();
	}

	viewProject(project) {
		console.log(project);
		var self = this
		this.project = project
		setTimeout(() => {
			this.calculateTitleSpace()
			this.show = true
			// code to enable scrolling if for some reason scrolling doesn't work when body scroll is blocked
			// disableBodyScroll(document.querySelector('#content'))
			disableBodyScroll()
		})
	}

	getMarkup(tech) {
		let logoMap = {
			'AngularJS': 'angularjs-logo.png',
			'EmailJS': 'emailjs-logo.png',
			'jQuery UI': 'jqueryui-logo.png',
			'MySQL': '',
			'PHP': 'php-logo.png',
			'SASS': '',
			'ScrollReveal': 'scrollreveal-logo.svg'
		}
		if (logoMap[tech])
			return `<img src="assets/img/${logoMap[tech]}" />${tech}`
		else
			return `${tech}`
	}

	calculateTitleSpace() {
		let $title = document.getElementById('project-title')
		$title.classList.remove('min-content')
		if (multiLine($title))
			$title.classList.add('min-content')
		function multiLine($el) {
			let divHeight = $el.offsetHeight
			let computedStyle = getComputedStyle($el);
			let textHeight = $el.offsetHeight - Math.round(parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom) + parseFloat(computedStyle.borderWidth) * 2)
			let lineHeight = Math.round(parseFloat(document.defaultView.getComputedStyle($el, null).getPropertyValue('line-height')))
			return textHeight > lineHeight
		}
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
