import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	contactFormModel = <any>{};
	emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
	sendBtnText = 'Send Message'
	constructor() { }

	ngOnInit() {
	}

	scrollTo(id) {
		let element = document.getElementById(id)
		element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
	}

	sendEmail(form) {
		form.form.controls.name.pristine = false
		form.form.controls.email.pristine = false
		form.form.controls.message.pristine = false
		if (form.form.status === 'INVALID')
			return

		this.sendBtnText = 'Sending...'
		var self = this
		emailjs.send("richard_luo", "rluo_dev", { from_name: this.contactFormModel.name, from_email: this.contactFormModel.email, body: this.contactFormModel.message }).then(function(res) {
			if (res.text === 'OK') {
				setTimeout(function() {
					self.sendBtnText = 'Sent!'
				}, 500)
			}
		}, function(err) {
			console.log('', err);
		});
	}
}
