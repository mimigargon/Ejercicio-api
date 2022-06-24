import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
public characterUrl: string = "http://hp-api.herokuapp.com/api/characters";
  constructor(private httpClient: HttpClient) { }

  public getCharacters(): Observable<any>{
    return this.httpClient.get(this.characterUrl)
  }
}
