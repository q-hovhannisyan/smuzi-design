import { Component, ViewChild } from "@angular/core";

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
  ApexLegend
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
export class TodayComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public secondChartOptions: Partial<SecondChartOptions>;
  public thirdChartOptions: Partial<ThirdChartOptions>;

  constructor() {
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
        fillSeriesColor: false,
        marker: {
          show: true,
          colors: ["#066064", "#0A838E", "#13BDD2"],
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        colors: ["#066064", "#0A838E", "#13BDD2"],
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
          color: '#000000'
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: "right",
        markers : {
          fillColors: ["#066064", "#0A838E", "#13BDD2"],
          width: 10,
          height: 10,
        }
      },
      markers: {
        colors: ["#ffffff", "#ffffff", "#ffffff"],
        size: 5,
        hover: {
          sizeOffset: 4
        },
        strokeWidth: 3,
        strokeColors: ['#066064','#0A838E', '#13BDD2']
      },
      xaxis: {
        labels: {
          trim: false
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
        colors: ["#01579B", "#03A9F4" ],
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
          color: '#000000'
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: "right",
        markers : {
          fillColors: ["#01579B", "#03A9F4" ],
          width: 10,
          height: 10,
        }
      },
      markers: {
        colors: ["#ffffff", "#ffffff"],
        size: 5,
        hover: {
          sizeOffset: 4
        },
        strokeWidth: 3,
        strokeColors: ["#01579B" , "#03A9F4"]
      },
      xaxis: {
        labels: {
          trim: false
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
        }, {
          name: "",
          data: [],
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
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        colors: ["#01579B"],
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
          color: '#000000'
        },
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: "right",
        markers : {
          fillColors: ["#01579B", 'transparent'],
          width: 10,
          height: 10,
        }
      },
      markers: {
        colors: ["#ffffff"],
        size: 5,
        hover: {
          sizeOffset: 4
        },
        strokeWidth: 3,
        strokeColors: ["#01579B"]
      },
      xaxis: {
        labels: {
          trim: false
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
}
