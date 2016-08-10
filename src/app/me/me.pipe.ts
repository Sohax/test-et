import { Pipe } from '@angular/core';

@Pipe({
	name: 'search'
})

export class SearchPipe {
	transform(arr: any[], terms) {
		terms.map(term => {
			if (term.value) {
				arr = arr.filter(item => {
					// If number
					if( +term.value == term.value ) {
						return (item[term.field] + '').indexOf(term.value) !== -1;
					}
					// If string
					else if(typeof term.value === 'string') {
						return item[term.field].toLowerCase().indexOf(term.value.toLowerCase()) !== -1;
					}
				});
			}
		});

		return arr;
	}
}
