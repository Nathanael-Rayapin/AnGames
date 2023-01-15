import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gameReducer } from './games.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './games.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ game: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [],
})
export class GameFeatureStoreModule {}
