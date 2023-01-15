/* eslint-disable no-undef */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { SnackBarService } from 'src/app/layout/material/snackbar/snackbar';
import { CommentModel } from 'src/app/model/comment/comment.model';
import { CommentService } from 'src/app/service/comment/comment.service';

import * as fromCommentActions from './comment.action';
import { CommentActions } from './comment.action';

@Injectable({ providedIn: 'root' })
export class CommentEffects {
  constructor(
    public router: Router,
    public dialog: MatDialog,
    private actions: Actions,
    private commentService: CommentService,
    private snackbarService: SnackBarService
  ) {}

  buildComments(comments: CommentModel[]): CommentModel[] {
    const loadedComments = [];

    for (const key in comments) {
      loadedComments.push({
        gameId: comments[key].gameId,
        id: comments[key].id,
        pseudo: comments[key].pseudo,
        content: comments[key].content,
      });
    }

    // Ngrx Selector Dosn't return all Values... Behavior alternative way
    this.commentService.allComments$.next(loadedComments);
    return loadedComments;
  }

  Get$: Observable<CommentActions> = createEffect(() =>
    this.actions.pipe(
      ofType<fromCommentActions.GetComment>(
        fromCommentActions.CommentActionsTypes.GET_COMMENT
      ),
      switchMap(() =>
        this.commentService.getComment().pipe(
          map((comments: CommentModel[]) => {
            return new fromCommentActions.GetCommentSuccess(
              this.buildComments(comments)
            );
          }),
          catchError((err: string) => {
            return of(new fromCommentActions.GetCommentError(err));
          })
        )
      )
    )
  );

  Add$: Observable<CommentActions> = createEffect(() =>
    this.actions.pipe(
      ofType<fromCommentActions.AddComment>(
        fromCommentActions.CommentActionsTypes.ADD_COMMENT
      ),
      switchMap(action =>
        this.commentService.addComment(action.payload).pipe(
          map((comment: CommentModel) => {
            return new fromCommentActions.AddCommentSuccess(comment);
          }),
          catchError((err: string) => {
            this.snackbarService.openSnackBar(
              'Comment Error: Please retry again later!',
              5
            );
            return of(new fromCommentActions.AddCommentError(err));
          })
        )
      )
    )
  );
}
