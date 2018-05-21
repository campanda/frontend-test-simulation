import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiWrapperService {
	baseURL: string = 'http://pokeapi.co/api/v2';

	constructor(private http: HttpClient) {}

	test() {
		return this.http.get(`${this.baseURL}/pokemon/1`).toPromise();
	}

	getTenRandom() {
		const promises = [];
		for (let i = 0; i < 10; i++) {
			promises.push(this.http.get(`${this.baseURL}/pokemon/${this.getRandomPokeNumber()}`).toPromise());
		}

		return Promise.all(promises).then((results) => {
			return results;
		});
	}

	private getRandomPokeNumber() {
		return Math.floor(Math.random() * 150 + 1);
	}
}
