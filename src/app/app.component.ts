import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'portfolio4-redesign';
	ngOnInit() {
		emailjs.init("user_EWYcOOxNiNYIfXO8NoEuQ");
	}
}
