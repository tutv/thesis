import {Component, OnInit} from '@angular/core';
import {TeachersService} from "../services/teachers.service";
import {MajorsService} from "../services/majors.service";

@Component({
	selector: 'app-teachers',
	templateUrl: './teachers.component.html',
	styleUrls: ['teachers.component.scss'],
	providers: [TeachersService, MajorsService]
})
export class TeachersComponent implements OnInit {
	public teachers: Array<any> = [];
	public teacher: any = {};
	public majors: Array<any> = [];

	constructor(private majorSrv: MajorsService,
				private teacherSrv: TeachersService) {
		this.teacher.major = 0;
	}

	ngOnInit() {
		this.fetchMajors();
		this.list();
	}

	fetchMajors() {
		this.majorSrv.list()
			.subscribe(
				majors => {
					this.majors = majors;
				}
			)
	}

	list() {
		this.teacherSrv.list()
			.subscribe(
				teachers => {
					this.teachers = teachers
				}
			);
	}

	onSubmit() {
		if (!this.validate()) {
			return;
		}

		let majorID = this.teacher.major;

		this.teacher.major = this.majors.find(m => {
			return (m._id == majorID);
		});

		this.teacherSrv.create(this.teacher)
			.subscribe(
				newTeacher => {
					this.reset();
					this.list();
				}
			);
	}

	reset() {
		this.teacher = {};
	}

	validate() {
		if (!this.teacher.name) {
			alert('Vui lòng nhập đầy đủ tên');
			return false;
		}

		if (!this.teacher.email) {
			alert('Vui lòng nhập email');
			return false;
		}

		if (!this.teacher.date) {
			alert('Vui lòng nhập ngày sinh');
			return false;
		}

		if (!this.teacher.major) {
			alert('Vui lòng chọn đơn vị');
			return false;
		}

		return true;
	}

}
