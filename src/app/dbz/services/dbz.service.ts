import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuidv4(), name: 'Piccolo', power: 8000 },
    { id: uuidv4(), name: 'Gohan', power: 8500 },
    { id: uuidv4(), name: 'Frieza', power: 12000 },
    { id: uuidv4(), name: 'Cell', power: 11000 },
    { id: uuidv4(), name: 'Majin Buu', power: 13000 },
    { id: uuidv4(), name: 'Broly', power: 14000 },
    { id: uuidv4(), name: 'Beerus', power: 15000 },
    { id: uuidv4(), name: 'Whis', power: 16000 },
    { id: uuidv4(), name: 'Jiren', power: 17000 },
    { id: uuidv4(), name: 'Hit', power: 12500 },
  ];

  // Add the new character to the list
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  // Delete the character from the list
  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
