import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0,
  };

  emitNewCharacter(): void {
    if (this.newCharacter.name.trim().length === 0) return;
    this.onNewCharacter.emit({ ...this.newCharacter });

    // Reset the form
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
