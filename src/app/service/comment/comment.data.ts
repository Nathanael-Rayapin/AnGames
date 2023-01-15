/* eslint-disable no-undef */
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentService } from './comment.service';
import { CommentModel } from '../../model/comment/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentData implements OnDestroy {
  commentsSub: Subscription;

  constructor(private commentService: CommentService) {}

  getFilteredCommentByGame(gameId: number): CommentModel[] {
    const filteredComments = [];
    const commentsSub = this.commentService.allComments$.subscribe(comments => {
      const result = comments.filter(comment => comment.gameId === gameId);
      if (result) {
        filteredComments.push(...result);
      }
    });

    return filteredComments;
  }

  ngOnDestroy(): void {
    if (this.commentsSub != null) {
      this.commentsSub.unsubscribe();
    }
  }
}
