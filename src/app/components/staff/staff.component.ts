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
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTooltip,
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
  legend: ApexLegend,
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, OnDestroy{
  public chartOptions: Partial<ChartOptions>;
  public bubbleChartOptions: Partial<ChartOptions>;
  public donutChartOptions: Partial<ChartOptions>;
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
          data: [0.12, 0.03, 0.01, 0.001, 0.001, 0.001, 0.001]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        }
      },
      legend: {
        labels: {
          colors: this.changeColor(this.mode),
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
        offsetX: 45,
        style: {
          fontSize: '12px',
          colors: [this.changeColor(this.mode)],
        },
        formatter(val) {
          return  val + ' Mi';
        }
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
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          color: this.changeColor(this.mode),
        },
        axisTicks: {
          show: false,
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
      yaxis: {
        min: 0,
        max: 0.20,
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
          color: this.changeColor(this.mode),
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        labels: {
          style: {
            colors: this.changeColor(this.mode),
          }
        }
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
      }
    };



    /* ------- buuble chart -------- */
    this.bubbleChartOptions = {
      series: [
        {
          name: 'Bubble1',
          data: this.generateData(new Date('11 Feb 2019 GMT').getTime(), 18, {
            min: 10,
            max: 60
          })
        },
      ],
      chart: {
        height: 350,
        type: 'bubble',
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        // opacity: 0.8,
        colors: this.changeBarColor(this.mode)
      },
      title: {
        text: 'GUESTS, NET SALES ANC CHECKS PER HOUR',
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Roboto',
          color: this.changeColor(this.mode),
        },
      },
      xaxis: {
        tickAmount: 12,
        type: 'category',
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
      },
      yaxis: {
        min: 0,
        max: 80,
        tickAmount: 4,
        axisBorder: {
          show: true,
          color: this.changeColor(this.mode),
        },
        axisTicks: {
          show: true,
          color: this.changeColor(this.mode),
        },
        labels: {
          style: {
            colors: this.changeColor(this.mode),
          }
        }
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
      },
    };


    /* --------- donut chart --------- */
    this.donutChartOptions = {
      series: [840, 495, 969, 518, 966, 457, 301],
      chart: {
        type: 'donut',
        height: 310,
      },
      title: {
        text: 'TOTAL BY TENDER TYPE',
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Roboto',
          color: this.changeColor(this.mode),
        },
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          offsetX: 0,
          offsetY: 10,
          donut: {
            size: '20%',
            labels: {
              show: false,
            }
          },
          dataLabels: {
            offset: 65,
          },
        }
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        formatter(val: number, opts?: any): any {
          return opts.w.config.series[opts.seriesIndex];
        },
        style: {
          colors: [this.changeColor(this.mode)],
        },
        dropShadow: {
          enabled: false,
        }
      },
      fill: {
        colors: this.changeDonutColor(this.mode)
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          }
        },
      },
    };

  }

  public generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
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

  changeDonutColor(mode) {
    if (mode === 'dark') {
      return ['#4FC3F7', '#7986CB', '#283593', '#01579B', '#0277BD', '#0091EA', '#03A9F4'];
    } else if (mode === 'light') {
      return ['#4FC3F7', '#7986CB', '#283593', '#01579B', '#0277BD', '#0091EA', '#03A9F4'];
    } else if (mode === 'orange') {
      return ['#FFC107', '#FF5722', '#BF360C', '#E65100', '#FF6F00', '#EF6C00', '#FFB74D'];
    }
  }

}
