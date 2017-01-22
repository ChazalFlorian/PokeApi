import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../pokemon";
import {AppService} from "../app.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AppService]
})
export class DetailComponent implements OnInit {
  public pokemon: Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private service: AppService) {
    let id = +this.route.snapshot.params['id'];
    this.service.getPokemon(id)
        .subscribe(
            response => {
              this.pokemon = new Pokemon(response.name, "https://pokeapi.com/api/v1/pokemon/"+id+"/");
              this.pokemon.setDetails(response)
              console.log(this.pokemon)
            },
            error => {
              console.log(error)
            }
        );
  }

  ngOnInit() {


  }

}