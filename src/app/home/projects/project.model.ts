interface ProjectOpts {
	title: string,
	subtitle?: string,
	imgSrc?: string,
	description?: string,
	number?: string,
}

export class Project {
	public number?: string
	constructor(opts: ProjectOpts) {
		Object.assign(this, opts)
	}
}