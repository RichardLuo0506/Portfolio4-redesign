import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
	selector: 'grid-lines',
	templateUrl: './grid-lines.component.html',
	styleUrls: ['./grid-lines.component.sass']
})
export class GridLinesComponent implements OnInit {
	@Input() color
	@Input() paddingTop
	constructor(private elementRef: ElementRef) { }

	ngOnInit() { }

	ngAfterViewInit() {
		if (this.color) {
			let grids = this.elementRef.nativeElement.children
			for (let grid of grids) {
				grid.style.borderColor = this.color
			}
		}
		if (this.paddingTop) {
			this.elementRef.nativeElement.style.paddingTop = this.paddingTop
		}
	}
}
