import {Component, OnInit} from '@angular/core';
import {MajorsService} from "../services/majors.service";

@Component({
	selector: 'app-major',
	templateUrl: './major.component.html',
	styleUrls: ['major.component.scss'],
	providers: [MajorsService]
})
export class MajorComponent implements OnInit {
	public majors: Array<any> = [];

	public major: any = {};

	constructor(private majorSrv: MajorsService) {
	}

	ngOnInit() {
		this.list();
	}

	list() {
		this.majorSrv.list()
			.subscribe(
				majors => {
					this.majors = majors
				}
			);
	}

	onSubmit() {
		this.majorSrv.create(this.major)
			.subscribe(
				newMajor => {
					this.reset();
					this.list();
				}
			);
	}

	reset() {
		this.major = {};
	}

}
