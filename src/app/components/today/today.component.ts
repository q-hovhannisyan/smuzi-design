import { Component, ViewChild, OnDestroy } from "@angular/core";
import {ThemesService} from '../../services/themes.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTheme
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  theme: ApexTheme
};
export type SecondChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
export type ThirdChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnDestroy{
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public secondChartOptions: Partial<SecondChartOptions>;
  public thirdChartOptions: Partial<ThirdChartOptions>;
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
          name: "RevPAR",
          data: [100, 78, 91, 13, 40, 31, 100]
        },
        {
          name: "RevPOR",
          data: [78, 80, 63, 60, 97, 38, 70],
        },
        {
          name: "Total",
          data: [110, 14, 65, 70, 105, 117, 75]
        }
      ],
      chart: {
        height: 250,
        width: 900,
        type: "line",
        toolbar: {
          show: false
        },
      },
      tooltip: {
        // fillSeriesColor: false,
        // fillSeriesColor: false,
        marker: {
          show: true,
          colors: this.changeFirstColor(this.mode),
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        colors: this.changeFirstColor(this.mode),
        curve: "straight",
        dashArray: [0, 0, 0]
      },
      title: {
        text: "REVENUE",
        align: "left",
        offsetY: 30,
        offsetX: 10,
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Avenir',
          color: this.changeColor(this.mode)
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: "right",
        markers : {
          fillColors: this.changeFirstColor(this.mode),
          strokeColor: '#fff',
          width: 10,
          height: 10,
        },
        labels: {
          colors: this.changeColor(this.mode),
        },
      },
      markers: {
        colors: this.changeDots(this.mode),
        size: 5,
        hover: {
          sizeOffset: 4
        },
        strokeWidth: 3,
        strokeColors: this.changeFirstColor(this.mode)
      },
      xaxis: {
        labels: {
          trim: false,
          style: {
            colors: this.changeColor(this.mode),
          },
        },
        categories: [
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
        ],
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#fff',
          height: 6,
          offsetX: 0,
          offsetY: 0
        }
      },
      yaxis: {
        min: 0,
        max: 120,
        tickAmount: 4,
        labels: {
          style: {
            colors: this.changeColor(this.mode)
          },
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          }
        },
        borderColor: "#CCCCCC"
      }
    };
    ///////////////////////
    this.secondChartOptions = {
      series: [
        {
          name: "Occupation Rate",
          data: [78, 80, 63, 60, 97, 38, 70],
        },
        {
          name: "ADR",
          data: [100, 78, 91, 13, 40, 31, 100]
        },
      ],
      chart: {
        height: 250,
        width: 900,
        type: "line",
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        colors: this.changeLineColor(this.mode),
        curve: "straight",
        dashArray: [0, 0, 0]
      },
      title: {
        text: "ROOMS",
        align: "left",
        offsetY: 30,
        offsetX: 10,
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Avenir',
          color: this.changeColor(this.mode)
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: "right",
        markers : {
          fillColors: this.changeLineColor(this.mode),
          width: 10,
          height: 10,
        },
        labels: {
          colors: this.changeColor(this.mode),
        },
      },
      markers: {
        colors: this.changeDots(this.mode),
        size: 5,
        hover: {
          sizeOffset: 4
        },
        strokeWidth: 3,
        strokeColors: this.changeLineColor(this.mode)
      },
      xaxis: {
        labels: {
          trim: false,
          style: {
            colors: this.changeColor(this.mode),
          },
        },
        categories: [
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
        ],
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#000',
          height: 6,
          offsetX: 0,
          offsetY: 0
        },
      },
      yaxis: {
        // axisTicks: {
        //   show: true,
        //   borderType: 'solid',
        //   color: '#78909C',
        //   width: 6,
        //   offsetX: 0,
        //   offsetY: 0
        // },
        min: 0,
        max: 120,
        tickAmount: 4,
        labels: {
          style: {
            colors: this.changeColor(this.mode)
          },
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        borderColor: "#CCCCCC"
      }
    };
    this.thirdChartOptions = {
      series: [
        {
          name: "Guests",
          data: [78, 80, 63, 60, 97, 38, 70],
        },
        // {
          // name: "",
          // data: [],
        // }
      ],
      chart: {
        height: 250,
        width: 900,
        type: "line",
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        colors: this.changeOneLine(this.mode),
        curve: "straight",
        dashArray: [0, 0, 0]
      },
      title: {
        text: "GUESTS",
        align: "left",
        offsetY: 15,
        offsetX: 10,
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Avenir',
          color: this.changeColor(this.mode)
        },
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: "right",
        markers : {
          fillColors: this.changeOneLine(this.mode),
          width: 10,
          height: 10,
        },
        labels: {
          colors: this.changeColor(this.mode),
        },
      },
      markers: {
        colors: this.changeDots(this.mode),
        size: 5,
        hover: {
          sizeOffset: 4
        },
        strokeWidth: 3,
        strokeColors: this.changeOneLine(this.mode)
      },
      xaxis: {
        labels: {
          trim: false,
          style: {
            colors: this.changeColor(this.mode),
          },
        },
        categories: [
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
        ],
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#000',
          height: 6,
          offsetX: 0,
          offsetY: 0
        }
      },
      yaxis: {
        // axisTicks: {
        //   show: true,
        //   borderType: 'solid',
        //   color: '#78909C',
        //   width: 6,
        //   offsetX: 0,
        //   offsetY: 0
        // },
        min: 0,
        max: 120,
        tickAmount: 4,
        labels: {
          style: {
            colors: this.changeColor(this.mode)
          },
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          },
        },
        borderColor: "#CCCCCC"
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
  changeFirstColor(mode) {
    if (mode === 'dark') {
      return ['#51D1E0', '#00838F', '#00BCD4'];
    } else if (mode === 'light') {
      return ['#066064', '#0A838E', '#13BDD2'];
    } else if (mode === 'orange') {
      return ['#FF6F00', '#FF8F00', '#FFD54F'];
    }
  }
  changeLineColor(mode) {
    if (mode === 'dark') {
      return ["#4FC3F7", "#03A9F4"];
    } else if (mode === 'light') {
      return ["#01579B", "#03A9F4"];
    } else if (mode === 'orange') {
      return ['#FF6F00', '#FF8F00'];
    }
  }
  changeOneLine(mode) {
    if (mode === 'dark') {
      return ['#7986CB'];
    } else if (mode === 'light') {
      return ['#7986CB'];
    } else if (mode === 'orange') {
      return ['#FE6D1F'];
    }
  }

  changeDots(mode) {
    if (mode === 'dark') {
      return ['#283147', '#283147', '#283147'];
    } else {
      return ['#ffffff', '#ffffff', '#ffffff'];
    }
  }

}
