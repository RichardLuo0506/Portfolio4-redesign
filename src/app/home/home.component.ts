import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	scrollTo(id) {
		let element = document.getElementById(id)
		element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
	}
}
