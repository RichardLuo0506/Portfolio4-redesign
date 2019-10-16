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
				title: 'Portfolio v4',
				subtitle: 'Built With Angular 8',
				imgSrc: 'assets/img/portfolio4-screenshot-draft.png',
				tech: [],
				task: ``,
				problems: ``,
				result: ``,
				demo: ``,
			}),
			new Project({
				title: 'Goat Alerts',
				subtitle: 'Automated TradingView Bot',
				imgSrc: 'assets/img/goat-sw2.png',
				tech: [],
				task: ``,
				problems: ``,
				result: ``,
				chromeWebStore: `https://chrome.google.com/webstore/detail/goat-alerts-tradingview-b/gcfbekmogelpbhgcepghlkdbmhpbaaig?hl=en-US`,
			}),
			new Project({
				title: 'Backbone File List',
				subtitle: 'Keyboard navigable fully accessible table',
				imgSrc: 'assets/img/pagelist-demo2.png',
				tech: [],
				task: ``,
				problems: ``,
				result: ``,
				demo: `https://www.youtube.com/watch?v=sdTuRGMo6Ps`,
			}),
			new Project({
				title: 'Portfolio v3',
				subtitle: 'Built With AngularJS',
				imgSrc: 'assets/img/portfolio3.png',
				tech: ['AngularJS', 'EmailJS', 'ScrollReveal', 'SASS'],
				task: `<p>I needed a new website to better express who I am and my growth as a developer.</p>`,
				problems: `<p>First I found a really cool font for the front page that showed my preference for minimalist design.</p><p>I wanted a stylish website so I made a flashy menu that pushes the page away in 3D space like opening a window.</p><p>I used ScrollReveal and cool hover animations to add flavor to the design.</p><p>Finally, I used EmailJS so that visitors could send me a message directly through the website.</p>`,
				result: `<p>I got a new job thanks to the website. The problem with this website is that there are so many different ideas that the whole thing lacked congruence, an ongoing issue with always wanting to try new ideas. I solve this problem in my latest v4 website design.</p>`,
				demo: `https://www.youtube.com/watch?v=E8BOLwjDgIo`,
			}),
			new Project({
				title: 'Template Manager',
				subtitle: 'Batch templates creator',
				imgSrc: 'assets/img/template-manager2.png',
				tech: ['AngularJS', 'jQuery UI', 'PHP', 'MySQL', 'SASS'],
				task: `<p>Company has its in-house ticketing system called PCS (Process Control System) built with PHP. There are many tasks and subtasks needed to be performed for each phase of work. The process is mostly established with some differences each project, so the COO is just tired of spending time to create the same tickets each time. I was tasked to code a feature that allowed PCS to batch create tickets.</p>`,
				problems: `<p>By now I’ve been given free reign on how to do my job, so I injected a self-contained AngularJS app into the old PHP system. First problem is how to display the nested relationship of the existing tasks and subtasks.</p><p>I took inspiration from the column view of the Finder app in MacOS and split it into 3 columns. This made exploring PCS self-explanatory.</p><p>To tackle the batch creation problem, I introduced the Template concept which allowed the user to create a series of tasks under one template. Then later, the user can create all the tasks by consuming the template.</p><p>The biggest issue was how to simply represent the nested relationships of the subtasks during the template creation process. Again, I went with the visual approach. I used JQuery UI draggable to create visual representation of the tasks, and the user could drag and drop them to represent their relationship. Vertical drags reordered the tasks, and horizontal drags made a task and all of its children a subtask of another task.</p>`,
				result: `<p>The COO no longer had to follow a document and create individual tasks for each phase of the project, he could create a template representing that phase of the project, then consume it to create the tasks all at once.</p><p>Template Manager was originally a much more ambitious project, but after its basic functions were coded, I got pulled into higher priority tasks. I still included it in my portfolio because it was my most aesthetically ambitious creation at the time. In fact, I created my own SASS framework that included my favorite fonts, icons, animations, and other design ideas just to make Template Manager.</p><p>Although Template Manager development stopped early, the SASS framework lived on to be the backbone of many of my later projects and many design ideas I still use today.</p>`,
				demo: `https://www.youtube.com/watch?v=wNy_lE2un-s`
			}),
			new Project({
				title: 'Schedule Tracker',
				subtitle: 'Email delivery status tracker',
				imgSrc: 'assets/img/schedule-tracker2.png',
				tech: ['AngularJS', 'jQuery UI', 'Moment.js', 'PHP', 'MySQL', 'SASS'],
				task: `<p>Company sends different mailing lists at different times of the day. Because we had about a million emails to send, there are always issues that come up, and keeping track of which emails are sent, which are missed, which are approved, which are currently sending, is very hairy. I’m tasked to create an email tracker that marketing team and remote workers can use.</p>`,
				problems: `</p><p>The first problem that came up was a timezone issue. Not all of our company worked in the PST timezone. I learned Moment.js and created a timezone setting in the EDS account view for remote workers. If the worker did not have set his timezone, Schedule Tracker would guess the timezone, with PST as the fallback.</p><p>Then as I built Schedule Tracker, I added jQuery UI datepicker to help filter results.</p><p>Because the target users were not tech savvy, I released a prototype for the marketing team to use for a while, then interviewed individuals from the marketing team on how to optimize their workflow. I added another setting so that for some users, Schedule Tracker remembered the last used date filter, while other users could set a custom date range that most pertains to their process, and Schedule Tracker would always start from there.</p><p>I’d also gathered that not everybody used Chrome, and my fancy design broke on some browsers. This was when I learned cross-browser-compatibility.</p><p>Sent email lists had a “Tracking” dropdown that aggregated the “opens”, “clicks”, “unsubs” and “bounces” of that email list. Clicking the title of the email list opens a new tab that rendered the email.</p><p>Lastly, I changed how Schedule Tracker initialized and added a “copy URL” button that allowed users to bookmark and share their common searches.</p>`,
				result: `<p>Before, remote workers had their own processes and mental notes to keep track of the different timezones when dealing with emails. Now they could choose to have Schedule Tracker translate the time, or they can opt out and stick to their established workflow.</p><p>Marketing team now has a tool to visualize and filter what they needed for their job. Remote workers could share what they’re looking at with the COO by sending them a link.</p>`,
				demo: `https://www.youtube.com/watch?v=56YHxEpgkFM`,
			}),
			new Project({
				title: 'List Manager',
				subtitle: 'Nested list items editor',
				imgSrc: 'assets/img/list-manager2.png',
				tech: ['AngularJS', 'jQuery', 'PHP', 'MySQL', 'SASS', 'AWS'],
				task: `<p>This was my first major task at my first programming job. Our backend developer Scott was in the beginning stages of creating EDS (Email Delivery System) to boost the productivity of the marketing team. He was writing it in AngularJS, which was right up my alley.</p><p>Scott needed a way to quickly find and edit the info of our email lists. We had dozens of lists, and subscriber count totaling up to 600,000.</p>`,
				problems: `<p>Because of the sheer info I had to display, I decided it’s best to represent it in a nested table. We only had a couple dozen lists, so a sort by table column feature is sufficient. When you clicked a list item, the table would break apart and nest inside the list details and its subscribers, this allowed me to clearly show the relationship without sacrificing screen real-estate. The tough part is that each list had 5 to 6 figures worth of subscribers, so displaying all of them could break the browser, and a bad query would congest the server.</p><p>For the frontend issue, I learned how to write pagination in PHP, and displayed 20 most recently emailed subscribers per page. Since the main user of this feature would be our tech savvy backend developer Scott, I implemented a search bar with 4 modes of search: “is”, “begins with”, “ends with” and “contains”. This lessened the burden on server resources and allowed a very smooth experience. Apart from adding/deleting rows, the tech-unsavvy marketing team needed to edit the data.</p><p>To make things very simple, I explored how to implement “edit in place” for each table cell without making the DOM too heavy. The marketing team also pasted code into some fields, which meant I had to learn how to sanitize the input in the backend for security reasons.</p><p>Scott then wanted to be able to use the List Manager with a keyboard, so added keyboard shortcuts and tooltips. This was the beginning of my journey on learning about web accessibility.</p><p>Later, I was tasked to import another half million subscribers in the form of several CSVs with different keys and bad values, all needed to be backed up on AWS. Apart from that, importing would take hours and clog up the server.</p><p>To solve the first problems, I mapped out different keys to the standard one in List Manager. Entries missing required keys were put into a file on the server at the end of the import, for that I had to learn how to write files in PHP.</p><p>To solve the server issue, I learned how to split the import into several batches. Finally, I learned to hook up List Manager to AWS so every change made would be backed up in the cloud.</p>`,
				result: `<p>Before this feature, every time we needed to edit something, our only backend developer Scott had to query the database from the command line and change the data. Now, much of the work could be taken on by non-developers.</p><p>We were also able to easily identify duplicate subscribers and bad email inputs as they are easily identified by the List Manager when performing a search.</p><p>After this, I took over EDS and built it into a whole suite of tools used by everyone in the company.</p>`,
				demo: `https://www.youtube.com/watch?v=aBeXVlwydss`,
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