import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { CompetitionsComponent } from './competitions/competitions.component';

export const routes: Routes = [
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'competitions',
    component: CompetitionsComponent
  },
  {
    path: '**',
    redirectTo: 'games'
  }
];
