import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetJsonService {
	constructor(public http: Http){
	}

	salut() {
		console.log('salut!!!');
	}

	getProducts() {
		// console.log('getProducts');
		let url:string = `/data/products.json`;

		return this.http
			.get(url)
			.map(res => res.json());
	}

	getCustomers() {
		let url:string = `/data/customers.json`;

		return this.http.get(url).map(res => res.json());
	}

	getCountryGroups() {
		let url:string = `/data/country-groups.json`;

		return this.http.get(url).map(res => res.json());
	}
}