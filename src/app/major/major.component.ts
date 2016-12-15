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
		if (!this.validate()) {
			return;
		}

		this.majorSrv.create(this.major)
			.subscribe(
				newMajor => {
					this.reset();
					this.list();
				}
			);
	}

	onDelete(id) {
		let r = window.confirm('Bạn chắc chắn muốn xóa?');
		if (!r) {
			return;
		}

		this.majorSrv.remove(id)
			.subscribe(
				result => {
					this.list();
				}
			)
	}

	reset() {
		this.major = {};
	}

	validate() {
		if (!this.major.name) {
			alert('Vui lòng nhập đầy đủ tên');
			return false;
		}

		if (!this.major.date) {
			alert('Vui lòng nhập ngày thành lập');
			return false;
		}

		if (!this.major.number) {
			alert('Vui lòng nhập số giảng viên');
			return false;
		}

		return true;
	}

}
