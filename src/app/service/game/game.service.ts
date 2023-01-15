import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/model/game/game.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GameService {
  API = environment.api;

  constructor(private http: HttpClient) {}

  addGame(game: Game): Observable<object> {
    return this.http.post(`${this.API}/games.json`, game);
  }

  getGame(): Observable<object> {
    return this.http.get(`${this.API}/games.json`);
  }
}
