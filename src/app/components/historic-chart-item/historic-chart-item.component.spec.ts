import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricChartItemComponent } from './historic-chart-item.component';

describe('HistoricChartItemComponent', () => {
  let component: HistoricChartItemComponent;
  let fixture: ComponentFixture<HistoricChartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricChartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
