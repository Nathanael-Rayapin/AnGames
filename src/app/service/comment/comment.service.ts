import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/comment/comment.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CommentService {
  API = environment.api;

  constructor(private http: HttpClient) {}

  addComment(comment: Comment): Observable<object> {
    return this.http.post(`${this.API}/comments.json`, comment);
  }

  getComment(): Observable<object> {
    return this.http.get(`${this.API}/comments.json`);
  }
}
