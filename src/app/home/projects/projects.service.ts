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
				tech: ['Angular 8', 'Canvas', 'Sass'],
				task: `<p>I needed a new website that showcases my ability to learn, knowledge of Angular 8, more polished and professional design tastes without losing the sense of adventure when implementing cool design ideas.</p>`,
				problems: `<p>The previous version of the website had the issue of congruency, so from the start I defined my colors and font choice. Apart from the primary color, and an occasional usage of a complementary color, everything else is shades of gray. I only have 2 fonts, 1 for headings and links, the other for all other texts, and a 3rd font for the singular red “R” as my logo that reflects the spirit of my tastes.</p><p>To keep things still playful and subtle, the page is divided in vertical lines to accentuate alignment (alignment is a key detail of my design), with translucent giant numbers to label the projects.</p><p>To make things adventurous, the background of the splash page is actually a canvas that draws different shapes and patterns in different colors each time you visit. The project details and blog are still under development.</p>`,
				result: `<p>The result is what you see :)</p>`,
			}),
			new Project({
				title: 'Goat Alerts',
				subtitle: 'Automated TradingView Bot',
				imgSrc: 'assets/img/goat-sw2.png',
				tech: ['AngularJS', 'Chrome Extension API', 'node.js', 'Stripe', 'Pine Script', 'Sass'],
				task: `<p>The specs of this project has changed over a year of development, but the gist of it is to be able to help traders automate part of their crypto currency trading process.</p>`,
				problems: `<p>There was a lot of fear in the community about stolen crypto with news of billions being stolen left and right. We’re a 3 man team, I’m frontend, another backend dev, and the project owner in charge of marketing etc. With our limited resources we could not create a giant trading platform that’s completely secure. So I decided to make the app a Chrome extension. Writing a chrome extension decentralizes the whole thing. With each user operating his own bot in Chrome, we don’t hold any personal info to be hacked. Many users like to have a dedicated VPS to run their bot 24/7, we tied the users personal info and app settings with their chrome account, so they can do things with their PC and the changes will be synched to their bot.</p><p>We started a new Discord server for all communications, so all the info is centralized in the bot’s UI and Discord.</p><p>We needed people to beta test our changes, enthusiastic users were more than happy to become QA and support for us, free of charge.</p><p>We didn’t have the resources to build a charting software or build complex indicators to analyze the market in realtime, so we left the charting to TradingView, the best web-based charting software. We would learn Pine Script (developed by TradingView) and code custom indicators that reflected our strategy.</p><p>We needed a better way to describe what orders to execute so we developed our own Syntax for that. When the right conditions are met, TradingView would fire off an alert, which would relay instructions written in our own syntax to the bot. With so many moving parts and so little resources, features often had to be rewritten or change direction completely.</p><p>At one point, development slowed to a crawl and the losing interest of the community put the project on life support. So I made the decision to stop writing perfect code, and just push out less polished code as quickly as possible. As long as the core of the code doesn’t execute orders incorrectly and bankrupt the user, it’s anything goes. This way, we offloaded much of the design decision and bug finding to the community. This spurred a great pace of development as well as reinvigorated interest in the community.</p><p>Despite my best efforts to simplify things, the bot is still quite complicated to use especially learning how to write in our syntax, so I created a Syntax Wizard UI that generates the appropriate syntax after user answers a series of questions on what they want to accomplish. I built the Syntax Wizard to look like the exchange UI so the user immediately knew how to use it. There are too many moving parts for things to fail occasionally and it’s difficult to pinpoint why something failed, so I coded an Events Log that would export everything the bot tried to do up to the point of failure in text form, that made debugging user issues much easier.</p><p>We made a marketplace for users to shadow trade and to make things even more hands-off.</p><p>One more thing that sets us apart from our competition is that I actively discuss bugs and features with the community, and implement as many suggested features as possible so they are very active in the growth of this project.</p>`,
				result: `<p>I've learned so much from this project as you can see how long the previous section was.</p><p>The short description of this Chrome Extension is that it reads alerts on TradingView. The alert would be written in our proprietary syntax, that translates the user’s intention into buy/sell requests of their trading exchange and automatically trades for them. It features a marketplace where experienced traders create custom alerts and the user can subscribe to them to shadow their trades.</p><p>I've also learned intangible business/development lessons.I learned that the best way to create a mutually beneficial relationship is to offer value first. Before partnering up and creating the extension, I was in the crypto automated trading community with 15,000 people. In this new market without regulation, altcoins were being pumped and dumped and the erratic behavior of these coins would trap trading bots in losing trades with no volume to get out. I wrote a script for the community that scanned all altcoins, filtered them based on volume, eliminated pump &amp; dump coins, and export into a CSV that could be imported into people’s bots. This got the attention of the community owner and started our partnership.</p><p>I am still actively developing this project. Our newest challenge is that people don't bother to read the wiki or even the tooltips for each feature, so there are many people using the extension incorrectly. The current solution is to upgrade Syntax Wizard's validation and creating a Syntax Analyzer that flagged incorrect feature combinations and illegal character.</p>`,
				chromeWebStore: `https://chrome.google.com/webstore/detail/goat-alerts-tradingview-b/gcfbekmogelpbhgcepghlkdbmhpbaaig?hl=en-US`,
			}),
			new Project({
				title: 'Backbone File List',
				subtitle: 'Keyboard navigable fully accessible table',
				imgSrc: 'assets/img/pagelist-demo2.png',
				tech: ['Backbone.js', 'jQuery UI', 'less'],
				task: `<p>The product is going through a redesign. I’m tasked with implementing the new design of the file list page, which is shared by many views.</p>`,
				problems: `<p>One problem that came up was we were doing the redesign along with changing our process to Agile. During this time, I learned to discuss and negotiate with the designer and QA on the possible implementation of certain details.</p><p>Our clients are universities, so there are high standards for accessibility. We went above and beyond that and dug deep into accessibility. We added complex ARIA techniques so that major screen readers will correctly report the current state of the application.</p><p>I’ve established a pair programming process with QA that greatly improved our productivity implementing accessibility.</p><p>I also had to learn to quickly dig into external library code to implement our custom accessibility needs without affecting basic functions of the library. Our clients also use all kinds of browsers, so we had to do very extensive work on web-browser compatibility between IE11, MS Edge, Firefox, Safari, Chrome.</p>`,
				result: `<p>The resulting list view is not only clean and feature rich, but fully keyboard accessible with convenience shortcuts. It also plays well with the top screen readers for a fully accessible experience.</p>`,
				demo: `https://www.youtube.com/watch?v=sdTuRGMo6Ps`,
			}),
			new Project({
				title: 'Portfolio v3',
				subtitle: 'Built With AngularJS',
				imgSrc: 'assets/img/portfolio3.png',
				tech: ['AngularJS', 'EmailJS', 'ScrollReveal', 'Sass'],
				task: `<p>I needed a new website to better express who I am and my growth as a developer.</p>`,
				problems: `<p>First I found a really cool font for the front page that showed my preference for minimalist design.</p><p>I wanted a stylish website so I made a flashy menu that pushes the page away in 3D space like opening a window.</p><p>I used ScrollReveal and cool hover animations to add flavor to the design.</p><p>Finally, I used EmailJS so that visitors could send me a message directly through the website.</p>`,
				result: `<p>I got a new job thanks to the website. The problem with this website is that there are so many different ideas that the whole thing lacked congruence, an ongoing issue with always wanting to try new ideas. I solve this problem in my latest v4 website design.</p>`,
				demo: `https://www.youtube.com/watch?v=E8BOLwjDgIo`,
			}),
			new Project({
				title: 'Template Manager',
				subtitle: 'Batch templates creator',
				imgSrc: 'assets/img/template-manager2.png',
				tech: ['AngularJS', 'jQuery UI', 'PHP', 'MySQL', 'Sass'],
				task: `<p>Company has its in-house ticketing system called PCS (Process Control System) built with PHP. There are many tasks and subtasks needed to be performed for each phase of work. The process is mostly established with some differences each project, so the COO is just tired of spending time to create the same tickets each time. I was tasked to code a feature that allowed PCS to batch create tickets.</p>`,
				problems: `<p>By now I’ve been given free reign on how to do my job, so I injected a self-contained AngularJS app into the old PHP system. First problem is how to display the nested relationship of the existing tasks and subtasks.</p><p>I took inspiration from the column view of the Finder app in MacOS and split it into 3 columns. This made exploring PCS self-explanatory.</p><p>To tackle the batch creation problem, I introduced the Template concept which allowed the user to create a series of tasks under one template. Then later, the user can create all the tasks by consuming the template.</p><p>The biggest issue was how to simply represent the nested relationships of the subtasks during the template creation process. Again, I went with the visual approach. I used JQuery UI draggable to create visual representation of the tasks, and the user could drag and drop them to represent their relationship. Vertical drags reordered the tasks, and horizontal drags made a task and all of its children a subtask of another task.</p>`,
				result: `<p>The COO no longer had to follow a document and create individual tasks for each phase of the project, he could create a template representing that phase of the project, then consume it to create the tasks all at once.</p><p>Template Manager was originally a much more ambitious project, but after its basic functions were coded, I got pulled into higher priority tasks. I still included it in my portfolio because it was my most aesthetically ambitious creation at the time. In fact, I created my own Sass framework that included my favorite fonts, icons, animations, and other design ideas just to make Template Manager.</p><p>Although Template Manager development stopped early, the Sass framework lived on to be the backbone of many of my later projects and many design ideas I still use today.</p>`,
				demo: `https://www.youtube.com/watch?v=wNy_lE2un-s`
			}),
			new Project({
				title: 'Schedule Tracker',
				subtitle: 'Email delivery status tracker',
				imgSrc: 'assets/img/schedule-tracker2.png',
				tech: ['AngularJS', 'jQuery UI', 'Moment.js', 'PHP', 'MySQL', 'Sass'],
				task: `<p>Company sends different mailing lists at different times of the day. Because we had about a million emails to send, there are always issues that come up, and keeping track of which emails are sent, which are missed, which are approved, which are currently sending, is very hairy. I’m tasked to create an email tracker that marketing team and remote workers can use.</p>`,
				problems: `</p><p>The first problem that came up was a timezone issue. Not all of our company worked in the PST timezone. I learned Moment.js and created a timezone setting in the EDS account view for remote workers. If the worker did not have set his timezone, Schedule Tracker would guess the timezone, with PST as the fallback.</p><p>Then as I built Schedule Tracker, I added jQuery UI datepicker to help filter results.</p><p>Because the target users were not tech savvy, I released a prototype for the marketing team to use for a while, then interviewed individuals from the marketing team on how to optimize their workflow. I added another setting so that for some users, Schedule Tracker remembered the last used date filter, while other users could set a custom date range that most pertains to their process, and Schedule Tracker would always start from there.</p><p>I’d also gathered that not everybody used Chrome, and my fancy design broke on some browsers. This was when I learned cross-browser-compatibility.</p><p>Sent email lists had a “Tracking” dropdown that aggregated the “opens”, “clicks”, “unsubs” and “bounces” of that email list. Clicking the title of the email list opens a new tab that rendered the email.</p><p>Lastly, I changed how Schedule Tracker initialized and added a “copy URL” button that allowed users to bookmark and share their common searches.</p>`,
				result: `<p>Before, remote workers had their own processes and mental notes to keep track of the different timezones when dealing with emails. Now they could choose to have Schedule Tracker translate the time, or they can opt out and stick to their established workflow.</p><p>Marketing team now has a tool to visualize and filter what they needed for their job. Remote workers could share what they’re looking at with the COO by sending them a link.</p>`,
				demo: `https://www.youtube.com/watch?v=56YHxEpgkFM`,
			}),
			new Project({
				title: 'List Manager',
				subtitle: 'Nested list items editor',
				imgSrc: 'assets/img/list-manager2.png',
				tech: ['AngularJS', 'PHP', 'MySQL', 'Sass', 'AWS'],
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