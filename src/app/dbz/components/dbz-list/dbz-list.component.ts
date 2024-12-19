import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css'
})
export class DbzListComponent {


  @Input()
  public characterList: Character[]=[];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  public onDeleteCharacter(id:string): void {
    this.onDelete.emit(id);
  }

}
