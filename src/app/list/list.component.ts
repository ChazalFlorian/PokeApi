import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";
import { AppService } from '../app.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
	providers: [AppService]
})
export class ListComponent implements OnInit {

	title = 'PokeApp - Liste des Pokemons';
	private pokemons: Pokemon[] = [];
	public choosenPage: boolean;
	constructor(private service: AppService, private router: Router) {
		console.log()
	}

	getPokemons(page){
		this.service.getAllPokemons(page)
            .subscribe(
				response => {
					if(response.next){
						var superThis = this;
						setTimeout(function(){
							superThis.getPokemons(++page);
						}, 2000)
					}
					for(var i in response.results){
						var name = response.results[i].name;
						var url = response.results[i].url;
						var pokemon = new Pokemon(name, url);

						if(this.router.url === "/" && pokemon.isChoosen())
							this.pokemons.push(pokemon)
						if(this.router.url === "/pokemon")
							this.pokemons.push(pokemon)

					}
				},
				error => {
					console.log(error)
				}
			);
	}

	ngOnInit() {
		this.getPokemons(0);
	}

}
