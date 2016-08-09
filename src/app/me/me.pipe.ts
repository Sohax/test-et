import { Pipe } from '@angular/core';

@Pipe({
	name: 'search'
})

export class SearchPipe {
	transform(value: any[], term) {
		if (term.length > 0) {
			return value.filter(value => {
				return value.custName.toLowerCase().indexOf(term.toLowerCase()) !== -1 || value.custCountry.toLowerCase().indexOf(term.toLowerCase()) !== -1;
			});
		} else {
			return value;
		}

	}
}