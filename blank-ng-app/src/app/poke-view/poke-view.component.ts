import { Component, OnInit } from '@angular/core';
import { ApiWrapperService } from '../api-wrapper.service';

@Component({
	selector: 'app-poke-view',
	templateUrl: './poke-view.component.html',
	styleUrls: [ './poke-view.component.css' ]
})
export class PokeViewComponent implements OnInit {
	pokemons: Array<any>;

	constructor(private api: ApiWrapperService) {}

	ngOnInit() {
		this.getPokemons();
	}

	getPokemons() {
		this.api.getTenRandom().then((pokemons) => {
			console.log(pokemons);
			this.pokemons = pokemons;
		});
	}
}
