import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Piccolo', power: 8000 },
    { name: 'Gohan', power: 8500 },
    { name: 'Frieza', power: 12000 },
    { name: 'Cell', power: 11000 },
    { name: 'Majin Buu', power: 13000 },
    { name: 'Broly', power: 14000 },
    { name: 'Beerus', power: 15000 },
    { name: 'Whis', power: 16000 },
    { name: 'Jiren', power: 17000 },
    { name: 'Hit', power: 12500 },
  ];

  // Add the new character to the list
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  // Delete the character from the list
  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
