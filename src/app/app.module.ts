import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodayComponent } from './components/today/today.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatMenuModule} from '@angular/material/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MarketComponent } from './components/market/market.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HistoricComponent } from './components/historic/historic.component';
import { StaffComponent } from './components/staff/staff.component';
import { HistoricChartItemComponent } from './components/historic-chart-item/historic-chart-item.component';
import { StaffChartItemComponent } from './components/staff-chart-item/staff-chart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodayComponent,
    MarketComponent,
    HistoricComponent,
    StaffComponent,
    HistoricChartItemComponent,
    StaffChartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    NgApexchartsModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
