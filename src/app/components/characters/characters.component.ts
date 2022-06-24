import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { CharacterModel } from 'src/app/models/model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
public characterList: CharacterModel [] = [];
  constructor(private apiService: CharactersService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((data: any) => {
      const charactersApi: CharacterModel[] = data.map(
        (character: any) => ({
          name: character.name,
          image: character.image,
          house: character.house,
          patronus: character.patronus,
        })
      );

      this.characterList = [...charactersApi]
    });
  }

}
