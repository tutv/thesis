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
		this.majorSrv.create(this.teacher)
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

}
