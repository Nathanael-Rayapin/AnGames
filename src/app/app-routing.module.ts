import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MainGamesSpaceComponent } from './components/main-games-space/main-games-space.component';
import { AdminGuard } from './service/auth/admin.guard';
import { AuthGuard } from './service/auth/auth.guard';

const routes: Routes = [
  {
    path: 'main-games',
    component: MainGamesSpaceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
