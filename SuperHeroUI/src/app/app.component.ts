import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SuperHero.UI';
  heroes: SuperHero[] = []; // initialiaze  an empty array of Heroes
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService,) //inject superHero service 
  { }

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result)); // get the data from the server and assign it to our local variable "heros
  }

  initNewHero() { 
    this.heroToEdit = new SuperHero();
  }
  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  editHero(hero: SuperHero) { 
    this.heroToEdit = hero;
  }
}
