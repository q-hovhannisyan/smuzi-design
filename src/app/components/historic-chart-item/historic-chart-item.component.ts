import {Component, OnDestroy, OnInit, Input, OnChanges} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexLegend,
  ApexGrid,
  ApexDataLabels,
  ApexMarkers,
  ApexStroke,
  ApexPlotOptions,
} from 'ng-apexcharts';

import {ThemesService} from '../../services/themes.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  grid: ApexGrid,
  markers: ApexMarkers,
  plotOptions: ApexPlotOptions
};
@Component({
  selector: 'app-historic-chart-item',
  templateUrl: './historic-chart-item.component.html',
  styleUrls: ['./historic-chart-item.component.scss']
})
export class HistoricChartItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title: any;
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  updateTheme() {
    this.chartOptions = {
      series: [
        {
          name: 'ADC - Average Room Rate',
          type: 'column',
          data: [120, 60.6, 66.7, 60.2, 54.3, 52.9, 55.0, 56.3, 55.2, 54.4, 53.2, 55.5]
        },
        {
          name: 'Quote Currency - UYU x USD (base 100UYU)',
          type: 'line',
          data: [110, 115, 107, 108, 76, 69, 50, 47, 78, 60, 40, 28]
        }
      ],
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        }
      },
      title: {
        text: '',
        align: 'left',
        offsetY: 15,
        offsetX: 30,
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Roboto',
          color: this.changeColor(this.mode)
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0, 0],
        offsetY: -8,
        style: {
          fontSize: '10px',
          colors: [this.changeColor(this.mode)],
        },
        background: {
          enabled: false,
        },
      },
      markers: {
        size: 0,
        strokeWidth: 0,
        strokeColors: this.changeLineColor(this.mode),
        hover: {
          sizeOffset: 0
        },
      },
      stroke: {
        width: [0, 4],
        colors: this.changeStrokeColor(this.mode)
      },
      fill: {
        colors: this.changeFillColor(this.mode)
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 5,
        offsetY: -2,
        labels: {
          colors: this.changeColor(this.mode),
        },
        markers : {
          fillColors: this.changeLineColor(this.mode),
        },
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: this.changeLineColor(this.mode),
        },
      },
      xaxis: {
        categories: [
          ['Jul', '2019'],
          ['Aug', '2019'],
          ['Sep', '2019'],
          ['Oct', '2019'],
          ['Nov', '2019'],
          ['Dec', '2019'],
          ['Jan', '2020'],
          ['Feb', '2020'],
          ['Mar', '2020'],
          ['Apr', '2020'],
          ['May', '2020'],
          ['Jun', '2020'],
        ],
        labels: {
          show: true,
          minHeight: 0,
          maxHeight: 50,
          offsetY: -4,
          style: {
            fontSize: '10px',
            fontFamily: 'Roboto',
            colors: this.changeColor(this.mode)
          }
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: this.changeColor(this.mode),
          height: 3,
        },
        axisBorder: {
          show: true,
          color: this.changeColor(this.mode),
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      yaxis: {
        show: false,
        min: 0,
        max: 120,
        tickAmount: 4,
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
  changeLineColor(mode) {
    if (mode === 'dark') {
      return ['#025998', '#0594E6'];
    } else if (mode === 'light') {
      return ['#0277BD', '#4FC3F7'];
    } else if (mode === 'orange') {
      return ['#FF8F00', '#BF360C'];
    }
  }

  changeStrokeColor(mode) {
    if (mode === 'dark') {
      return [ '#0594E6'];
    } else if (mode === 'light') {
      return [ '#4FC3F7'];
    } else if (mode === 'orange') {
      return [ '#BF360C'];
    }
  }
  changeFillColor(mode) {
    if (mode === 'dark') {
      return [ '#025998'];
    } else if (mode === 'light') {
      return [ '#0277BD'];
    } else if (mode === 'orange') {
      return [ '#FF8F00'];
    }
  }

  ngOnInit(): void {
    this.chartOptions.title.text = this.title;
  }
  ngOnChanges() {
    this.chartOptions.title.text = this.title;
  }

}
