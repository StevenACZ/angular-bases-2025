import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  public newCharacter: Character = {
    name: 'ABC',
    power: 0,
  };

  emitNewCharacter(): void {
    console.log(this.newCharacter);
  }
}
