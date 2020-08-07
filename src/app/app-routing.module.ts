import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent} from './components/today/today.component';
import { MarketComponent} from './components/market/market.component';

const routes: Routes = [
  { path: '', component: TodayComponent },
  { path: 'today', component: TodayComponent },
  { path: 'market', component: MarketComponent },
  { path: '', redirectTo: '/today', pathMatch: 'full' },
  { path: '**', component: TodayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
