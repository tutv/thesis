import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";

@Injectable()
export class MajorsService {

	constructor(private api: ApiService) {
	}

	public list() {
		return this.api.request({
			url: '/majors',
			method: 'GET'
		});
	}

	public create(major) {
		return this.api.request({
			url: '/majors/create',
			method: 'POST',
			data: major
		});
	}
}
