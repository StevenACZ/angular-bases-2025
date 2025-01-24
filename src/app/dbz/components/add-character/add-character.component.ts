import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    id: uuidv4(),
    name: '',
    power: 0,
  };

  emitNewCharacter(): void {
    if (this.newCharacter.name.trim().length === 0) return;
    this.onNewCharacter.emit({ ...this.newCharacter });

    // Reset the form
    this.newCharacter = {
      id: uuidv4(),
      name: '',
      power: 0,
    };
  }
}
