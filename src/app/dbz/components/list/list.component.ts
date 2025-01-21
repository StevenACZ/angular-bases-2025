import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  deleteCharacter(index: number): void {
    this.onDeleteCharacter.emit(index);
  }
}
