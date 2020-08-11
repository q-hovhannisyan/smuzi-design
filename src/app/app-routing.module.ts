import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent} from './components/today/today.component';
import { MarketComponent} from './components/market/market.component';
import {HistoricComponent} from './components/historic/historic.component';
import {StaffComponent} from './components/staff/staff.component';

const routes: Routes = [
  { path: '', component: TodayComponent },
  { path: 'today', component: TodayComponent },
  { path: 'market', component: MarketComponent },
  { path: 'historic', component: HistoricComponent },
  { path: 'staff', component: StaffComponent },
  { path: '', redirectTo: '/today', pathMatch: 'full' },
  { path: '**', component: TodayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
