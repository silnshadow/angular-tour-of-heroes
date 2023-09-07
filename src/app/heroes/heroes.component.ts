import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero? : Hero;

  constructor(private heroService: HeroService, private messageService: MessageService){}

  ngOnInit(): void{
    this.getHeroes();
  }
  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}')
  }

  /*
  Call it in ngOnInit()
While you could call getHeroes() in the constructor, 
that's not the best practice.
  */

  getHeroes(): void {
    this.heroService.getHeroes().
    subscribe(heroes => this.heroes = heroes);
  
  }
}
