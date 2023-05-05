import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroesList: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage(
      `HeroesComponent: Selected hero id=${hero.name}`
    );
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroesList = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
