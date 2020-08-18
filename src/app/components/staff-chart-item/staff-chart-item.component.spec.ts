import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffChartItemComponent } from './staff-chart-item.component';

describe('StaffChartItemComponent', () => {
  let component: StaffChartItemComponent;
  let fixture: ComponentFixture<StaffChartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffChartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
