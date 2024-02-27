import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
// import { HttpClient } from 
@Injectable({
    providedIn: 'root'
})
export class SuperHeroService {

    constructor(
        // httpClient: HttpClient
    ) { }

    public getSuperHeroes(): SuperHero[] {
        let hero = new SuperHero();
        hero.id = 12;
        hero.firstName = "Spiederman";
        hero.lastName = "Venom";
        hero.name = "Peter Parker";
        hero.place = "New York";

        return [hero];
    }
}