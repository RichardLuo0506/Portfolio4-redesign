import { Component, OnInit } from '@angular/core';
import { AmbientCanvas } from './ambient-canvas.model';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { WindowRef } from '../../shared/window-ref.service';

@Component({
	selector: 'ambient-canvas',
	templateUrl: './ambient-canvas.component.html',
	styleUrls: ['./ambient-canvas.component.sass']
})
export class AmbientCanvasComponent implements OnInit {
	constructor(private winRef: WindowRef) { }

	ngOnInit() {
		const types = ['coalesce', 'swirl']
		let index = Math.floor(Math.random() * 2)
		let baseHue = Math.floor(Math.random() * 255)
		this.initCanvas(types[index], { backgroundColor: '#1a1a1a', baseHue: baseHue })
	}

	initCanvas(type: string, opt?: object) {
		let ambientCanvas = new AmbientCanvas(type, opt || {})
		ambientCanvas.setup()

		fromEvent(this.winRef.nativeWindow, 'resize').pipe(debounceTime(200)).subscribe(() => {
			ambientCanvas.resize()
		})
	}
}
