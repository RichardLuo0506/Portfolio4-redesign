interface ProjectOpts {
	title: string,
	subtitle?: string,
	imgSrc?: string,
	description?: string,
	number?: string,
	tech?: string[],
	task?: string,
	problems?: string,
	result?: string,
	demo?: any,
	demoDesc?: string,
	blog?: string,
	chromeWebStore?: string,
}

export class Project {
	public number?: string
	constructor(opts: ProjectOpts) {
		Object.assign(this, opts)
	}
}