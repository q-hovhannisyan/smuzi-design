import {Component, OnDestroy, OnInit} from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexFill,
  ApexGrid,
  ApexTooltip
} from 'ng-apexcharts';

import { ThemesService } from '../../services/themes.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis,
  title: ApexTitleSubtitle,
  stroke: ApexStroke,
  fill: ApexFill,
  grid: ApexGrid,
  tooltip: ApexTooltip;
};


@Component({
  selector: 'app-staff-chart-item',
  templateUrl: './staff-chart-item.component.html',
  styleUrls: ['./staff-chart-item.component.scss']
})
export class StaffChartItemComponent implements OnInit, OnDestroy {
  public chartOptions: Partial<ChartOptions>;
  public mode = '';
  public subscription;
  constructor(private service: ThemesService) {
    this.mode = service.name;
    this.subscription = service.nameChange.subscribe((value) => {
      this.mode = value;
      this.updateTheme();
    });
    this.updateTheme();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateTheme() {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: [35, 25, 18, 15, 10, 7, 7, 6, 6, 5]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        }
      },
      title: {
        text: 'NET SALES BY MAJOR GROUP',
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Roboto',
          color: this.changeColor(this.mode),
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      fill: {
        colors: this.changeBarColor(this.mode)
      },
      dataLabels: {
        enabled: true,
        offsetX: 30,
        style: {
          fontSize: '12px',
          colors: [this.changeColor(this.mode)]
        },
        formatter(val) {
          return  val + ' Mil';
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: this.changeBarColor(this.mode),
        },
      },
      xaxis: {
        categories: [
          'Group 1',
          'Group 2',
          'Group 3',
          'Group 4',
          'Group 5',
          'Group 6',
          'Group 7',
          'Group 8',
          'Group 9',
          'Group 10',
          'Group 11',
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: this.changeColor(this.mode),
          offsetX: -6,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        min: 0,
        max: 40,
        axisBorder: {
          show: false,
          color: this.changeColor(this.mode),
        },
        axisTicks: {
          show: true,
          color: this.changeColor(this.mode),
          width: 6,
          offsetX: -6,
        },
        labels: {
          style: {
            colors: this.changeColor(this.mode),
          },
          offsetX: -6,
        }
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: false
          }
        },
      }
    };
  }

  changeColor(mode) {
    if (mode === 'dark') {
      return '#fff';
    } else if (mode === 'light') {
      return '#000';
    } else if (mode === 'orange') {
      return '#000';
    }
  }

  changeBarColor(mode) {
    if (mode === 'dark') {
      return [ '#0277BD'];
    } else if (mode === 'light') {
      return [ '#01579B'];
    } else if (mode === 'orange') {
      return [ '#FF8F00'];
    }
  }

}
