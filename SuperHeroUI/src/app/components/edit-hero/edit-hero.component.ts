import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() herosUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => this.herosUpdated.emit(heroes));
   }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => this.herosUpdated.emit(heroes));
   }

  createHero(hero: SuperHero) {
    this.superHeroService
      .createSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => this.herosUpdated.emit(heroes));
   }

}
