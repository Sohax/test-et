import {Component} from '@angular/core';
import {GetJsonService} from '../shared/get-json.service';
import {SearchPipe} from './me.pipe';

@Component({
  moduleId: module.id,
  selector: 'flavius-bohaciuc',
  providers: [GetJsonService],
  pipes: [SearchPipe],
  templateUrl: 'me.component.html'
})
export class MeComponent {
	public searchTerm: string = '';
	public products: any;
	public customers: any = [];
	public countryGroups: any;

	constructor(public getJsonService: GetJsonService) {
		this.getCustomers();
	}

	getProducts() {
		let products$ = this.getJsonService.getProducts();
		products$.subscribe(data => {
			this.products = data;
		});
	}

	getCustomers() {
		let customers$ = this.getJsonService.getCustomers();
		customers$.subscribe(data => {
			this.customers = data;
		})
	}

	getCountryGroups() {
		let countryGroups$ = this.getJsonService.getCountryGroups();
		countryGroups$.subscribe(data => {
			this.countryGroups = data;
		})
	}
}
