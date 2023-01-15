import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { commentReducer } from './comment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from './comment.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ comment: commentReducer }),
    EffectsModule.forRoot([CommentEffects]),
  ],
  providers: [],
})
export class CommentFeatureStoreModule {}
