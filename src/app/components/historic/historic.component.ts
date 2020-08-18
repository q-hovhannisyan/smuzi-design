import {Component, OnDestroy, OnInit} from '@angular/core';
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

import { ThemesService } from '../../services/themes.service';

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
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit, OnDestroy {
  public areaChartOptions: Partial<ChartOptions>;
  public columnChartOptions: Partial<ChartOptions>;
  public columnsChartOptions: Partial<ChartOptions>;
  public mode = '';
  public subscription;
  public title: 'component';
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

    this.areaChartOptions = {
      series: [
        {
          name: 'Rooms Oc.',
          data: [80, 60, 70, 30, 100, 45, 20, 55, 18, 90]
        },
        {
          name: 'Out of Order',
          data: [20, 27.5, 75, 40, 30, 90, 93, 60, 70, 90]
        },
        {
          name: 'Day USe',
          data: [75, 25, 30, 65, 15, 70, 27, 73, 61, 66]
        },
        {
          name: 'House USe',
          data: []
        },
        {
          name: 'Av. Room',
          data: []
        }
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        }
      },
      title: {
        text: 'HISTORICAL SERIES',
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
      fill: {
        colors: this.changeAreaColor(this.mode),
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.4,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 5,
        labels: {
          colors: this.changeColor(this.mode)
        },
        markers : {
          fillColors: this.changeAreaSeriesColor(this.mode),
        },
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: this.changeAreaSeriesColor(this.mode),
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: this.changeAreaColor(this.mode),
        width: [0, 0, 0]
      },
      markers: {
        size: 0,
        strokeWidth: 0,
        strokeColors: this.changeAreaColor(this.mode),
        hover: {
          sizeOffset: 0
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
      },
    };
    /* ------ colum chart ------ */
    this.columnChartOptions = {
      series: [
        {
          name: 'ADC - Average Room Rate',
          type: 'column',
          data: [120, 60.6, 66.7, 60.2, 54.3, 52.9, 55.0, 56.3, 55.2, 54.4, 53.2, 55.5]
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        }
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
        labels: {
          colors: this.changeColor(this.mode),
        },
        markers : {
          fillColors: this.changeFillColor(this.mode),
        },
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: this.changeFillColor(this.mode),
        },
      },
      title: {
        text: 'HISTORICAL GUEST',
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
      dataLabels: {
        enabled: false,
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
    /* ---------- columns chart -------- */
    this.columnsChartOptions = {
      series: [
        {
          data: [80, 150, 140, 135, 210, 135, 260, 30, 25, 240, 340, 260, 200, 205, 80]
        },
        {
          data: [370, 300, 60, 325, 150, 100, 210, 30, 200, 310, 10, 130, 190, 70, 225]
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        width: 1500,
        toolbar: {
          show: false,
        }
      },
      title: {
        text: 'DIARIA MEDIA',
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
          columnWidth: '55%',
        }
      },
      fill: {
        colors: this.changeColumnsColor(this.mode)
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [
          ['SAO', '239,58', '239,58'],
          ['RIO', '145,33', '145,33'],
          ['BHZ', '162,66', '162,66'],
          ['VIX', '173,51', '173,51'],
          ['CPQ', '242,04', '242,04'],
          ['SSA', '210,59', '210,59'],
          ['REC', '188,70', '188,70'],
          ['FOR', '232,60', '232,60'],
          ['BSB', '238,43', '238,43'],
          ['GYN', '183,01', '183,01'],
          ['CWB', '199,35', '199,35'],
          ['POA', '201,05', '201,05'],
          ['FLN', '242,06', '242,06'],
          ['MAO', '162,20', '162,20'],
          ['BEL', '212,91', '212,91'],
        ],
        tickAmount: 10,
        axisTicks: {
          show: true,
          color: this.changeColor(this.mode),
        },
        labels: {
          show: true,
          style: {
            fontSize: '10px',
            fontFamily: 'Roboto',
            colors: this.changeColor(this.mode)
          }
        },
      },
      yaxis: {
        min: 0,
        max: 400,
        tickAmount: 4,
        axisTicks: {
          show: true,
          color: this.changeColor(this.mode),
        },
        labels: {
          show: true,
          style: {
            fontSize: '10px',
            fontFamily: 'Roboto',
            colors: this.changeColor(this.mode)
          },
          formatter(val) {
            return 'R$ ' + val;
          }
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
        borderColor: '#CCCCCC'
      },
      tooltip: {
        enabled: false,
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
      return ['#0594E6'];
    } else if (mode === 'light') {
      return ['#4FC3F7'];
    } else if (mode === 'orange') {
      return ['#BF360C'];
    }
  }
  changeFillColor(mode) {
    if (mode === 'dark') {
      return ['#0277BD'];
    } else if (mode === 'light') {
      return ['#01579B'];
    } else if (mode === 'orange') {
      return ['#FF8F00'];
    }
  }

  changeAreaColor(mode) {
    if (mode === 'dark') {
      return ['#4FC3F7', '#03A9F4', '#01579B'];
    } else if (mode === 'light') {
      return ['#4FC3F7', '#03A9F4', '#01579B'];
    } else if (mode === 'orange') {
      return ['#FF8F00', '#FF9800', '#D84315'];
    }
  }
  changeAreaSeriesColor(mode) {
    if (mode === 'dark') {
      return ['#01579B', '#03A9F4', '#4FC3F7', '#6095BE', '#8FD6F5'];
    } else if (mode === 'light') {
      return ['#01579B', '#03A9F4', '#4FC3F7', '#6095BE', '#8FD6F5'];
    } else if (mode === 'orange') {
      return ['#D84315', '#FF9800', '#FF8F00', '#D84315', '#FF9800'];
    }
  }
  changeColumnsColor(mode) {
    if (mode === 'dark') {
      return ['#51C4F4', '#0679BA'];
    } else if (mode === 'light') {
      return ['#03A9F4', '#01579B'];
    } else if (mode === 'orange') {
      return ['#FF8F00', '#FFC107'];
    }
  }

}
