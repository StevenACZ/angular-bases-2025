import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  get heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string): void {
    if (name && name.trim()) {
      this.name = name.trim();
    }
  }

  changeAge(age: number): void {
    if (age && age > 0) {
      this.age = age;
    }
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
