import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrl: './dbz-form.component.css'
})
export class DbzFormComponent {

  @Output()
  public onAddCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    id:'',
    name: '',
    power: 0
  }

  public emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onAddCharacter.emit({...this.character});
    this.clearCharacter();
  }

  private clearCharacter(): void {
    this.character = {
      id : '',
      name: '',
      power: 0
    }
  }

}
