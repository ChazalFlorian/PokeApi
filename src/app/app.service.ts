import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  base = "http://pokeapi.co/api/v2/";

  constructor(private http: Http) { }

  getPokemon(id) {
    return this.http.get(this.base + "pokemon/" + id)
        .map(res => res.json());
  }

  getAllPokemons(page){
      var offset =20 * page;
    return this.http.get(this.base+"pokemon/?offset="+offset)
        .map(res =>res.json())
  }


}
