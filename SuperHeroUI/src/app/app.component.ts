import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperHeroUI';

  heros: SuperHero[] = []; // initialiaze  an empty array of Heroes

  constructor(private superHeroService: SuperHeroService,) //inject superHero service 
  { }

  ngOnInit(): void {
    this.heros = this.superHeroService.getSuperHeroes();   // get the hero data from the service and assign it to our variable
    console.warn(this.heros);
  }
}
