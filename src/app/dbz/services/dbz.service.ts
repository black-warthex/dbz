import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    }, {
      id: uuid(),
      name: 'Krilin',
      power: 5000
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 80000
    }
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() }
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(characters => characters.id !== id);
  }
}
