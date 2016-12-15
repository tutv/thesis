import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {
	private BASE_URL = '';

	constructor(private http: Http) {
		this.BASE_URL = environment.base_api;
	}

	public request(args): Observable<any> {
		let url_api = this.BASE_URL + args.url;

		let headers = new Headers();
		headers.set('Content-Type', 'application/json');

		return this
			.http
			.request(url_api, {
				method: args.method,
				headers: headers,
				body: args.data
			})
			.map(
				response => {
					return response.json();
				}
			);
	}
}
