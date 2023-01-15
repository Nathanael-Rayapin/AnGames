import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGamesSpaceComponent } from './components/main-games-space/main-games-space.component';
import { AuthGuard } from './service/auth/auth.guard';

const routes: Routes = [
  {
    path: 'main-games',
    component: MainGamesSpaceComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
