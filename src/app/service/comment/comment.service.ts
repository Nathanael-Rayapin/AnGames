import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommentModel } from 'src/app/model/comment/comment.model';
import {
  CommentFeatureStoreSelectors,
  CommentFeatureStoreState,
} from 'src/app/store/comments/comment.index';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CommentService {
  API = environment.api;

  allComments$ = new BehaviorSubject<CommentModel[]>([]);
  comments$: Observable<CommentModel[]>;

  constructor(
    private http: HttpClient,
    private store: Store<CommentFeatureStoreState.CommentState>
  ) {
    this.comments$ = this.store.pipe(
      select(CommentFeatureStoreSelectors.selectAll)
    );
  }

  addComment(comment: CommentModel): Observable<object> {
    return this.http.post(`${this.API}/comments.json`, comment);
  }

  getComment(): Observable<object> {
    return this.http.get(`${this.API}/comments.json`);
  }
}
