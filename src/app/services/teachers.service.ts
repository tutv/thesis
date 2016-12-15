import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";

@Injectable()
export class TeachersService {

	constructor(private api: ApiService) {
	}

	public list() {
		return this.api.request({
			url: '/teachers',
			method: 'GET'
		});
	}

	public create(teacher) {
		return this.api.request({
			url: '/teachers/create',
			method: 'POST',
			data: teacher
		});
	}

	public remove(id) {
		return this.api.request({
			url: '/teachers/remove',
			method: 'POST',
			data: {
				id: id,
			}
		});
	}

}
