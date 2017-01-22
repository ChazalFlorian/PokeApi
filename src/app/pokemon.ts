import {AppService} from "./app.service";

export class Pokemon {
    public id: Number;
    public image: String;
    public forms: Array<any>;
    public abilities: Array<any>;
    public stats: Array<any>;
    public name: String;
    public weight: Number;
    public moves: Array<any>;
    public sprites: Object;
    public held_items: Array<any>;
    public location_area_encounters: String;
    public height: Number;
    public is_default: Boolean;
    public species: Object;
    public order: Number;
    public game_indices: Array<any>;
    public base_experience: Number;
    public types: Array<any>;


    constructor(name: String = "", url: String = ""){
        var splittedUrl = url.split('/');
        this.id = Number(splittedUrl[6]) || 0;
        this.name = name;
        this.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.id+".png";
    }

    setDetails(pokemon){
        this.forms = pokemon.forms;
        this.abilities = pokemon.abilities;
        this.stats = pokemon.stats;
        this.weight = pokemon.weight;
        this.moves = pokemon.moves;
        this.sprites = pokemon.sprites;
        this.held_items = pokemon.held_items;
        this.location_area_encounters = pokemon.location_area_encounters;
        this.height = pokemon.height;
        this.is_default = pokemon.is_default;
        this.species = pokemon.species;
        this.order = pokemon.order;
        this.game_indices = pokemon.game_indices;
        this.base_experience = pokemon.base_experience;
        this.types = pokemon.types;
    }

    toChoosen(){
        var id = this.id.toString();
        var pokedex = JSON.parse(localStorage.getItem("pokedex"));
        pokedex[id] = !pokedex[id];
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
        console.log(this.isChoosen())
    }

    isChoosen(){
        var id = this.id.toString();
        var pokedex = JSON.parse(localStorage.getItem("pokedex"));
        return pokedex[id];
    }
}