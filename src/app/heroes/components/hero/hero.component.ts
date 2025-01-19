import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
