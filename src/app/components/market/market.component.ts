import {Component, OnDestroy, ViewChild} from '@angular/core';
import { ThemesService } from '../../services/themes.service';

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

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnDestroy {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public mode = '';
  public subscription;
  public header: any = ['Hotel Name', 'Jul/01', 'Jul/02', 'Jul/03', 'Jul/04', 'Jul/05', 'Jul/06', 'Jul/07'];
  public rows: any = [
    {
      name: 'Hotel A',
      month: [
        {
          status: 'available',
          point: 75,
        },
        {
          status: 'available',
          point: 75,
        },
        {
          status: 'available',
          point: 75,
        },
        {
          status: 'available',
          point: 80,
        },
        {
          status: 'available',
          point: 80,
        },
        {
          status: 'available',
          point: 75,
        },
        {
          status: 'available',
          point: 75,
        },
      ]
    },
    {
      name: 'Hotel B',
      month: [
        {
          status: 'available',
          point: 85,
        },
        {
          status: 'available',
          point: 85,
        },
        {
          status: 'available',
          point: 85,
        },
        {
          status: 'available',
          point: 92,
        },
        {
          status: 'available',
          point: 92,
        },
        {
          status: 'available',
          point: 85,
        },
        {
          status: 'available',
          point: 85,
        },
      ]
    },
    {
      name: 'Hotel C',
      month: [
        {
          status: 'available',
          point: 72,
        },
        {
          status: 'available',
          point: 72,
        },
        {
          status: 'available',
          point: 70,
        },
        {
          status: 'available',
          point: 70,
        },
        {
          status: 'available',
          point: 68,
        },
        {
          status: 'available',
          point: 68,
        },
        {
          status: 'busy',
          point: 60,
        },
      ]
    },
    {
      name: 'Hotel D',
      month: [
        {
          status: 'busy',
          point: 55,
        },
        {
          status: 'busy',
          point: 55,
        },
        {
          status: 'reserved',
          point: 55,
        },
        {
          status: 'busy',
          point: 52,
        },
        {
          status: 'busy',
          point: 50,
        },
        {
          status: 'busy',
          point: 50,
        },
        {
          status: 'busy',
          point: 50,
        },
      ]
    },
    {
      name: 'Hotel E',
      month: [
        {
          status: 'reserved',
          point: 57,
        },
        {
          status: 'busy',
          point: 57,
        },
        {
          status: 'reserved',
          point: 55,
        },
        {
          status: 'busy',
          point: 55,
        },
        {
          status: 'busy',
          point: 60,
        },
        {
          status: 'available',
          point: 70,
        },
        {
          status: 'available',
          point: 70,
        },
      ]
    },
    {
      name: 'Hotel F',
      month: [
        {
          status: 'busy',
          point: 50,
        },
        {
          status: 'busy',
          point: 50,
        },
        {
          status: 'reserved',
          point: 55,
        },
        {
          status: 'busy',
          point: 60,
        },
        {
          status: 'busy',
          point: 65,
        },
        {
          status: 'reserved',
          point: 66,
        },
        {
          status: 'reserved',
          point: 66,
        },
      ]
    },
  ];
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
          name: "Hotel A",
          data: [32, 27, 108, 33, 106, 96, 98]
        },
        {
          name: "Hotel B",
          data: [103, 75, 61, 77, 87, 88, 68],
        },
        {
          name: "Hotel C",
          data: [33, 59, 59, 28, 86, 60, 120]
        },
        {
          name: "Hotel D",
          data: [51, 112, 33, 58, 117, 60, 91]
        },
        {
          name: "Hotel E",
          data: [45, 30, 21, 42, 43, 78, 38]
        }
      ],
      chart: {
        height: 250,
        width: '100%',
        type: "line",
        toolbar: {
          show: false
        },
      },
      tooltip: {
        marker: {
          show: true,
          colors: this.changeLineColor(this.mode),
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
        text: "COMPARISON CHART",
        align: "left",
        offsetY: 30,
        offsetX: 10,
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Roboto',
          color: this.changeColor(this.mode)
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: "right",
        markers : {
          fillColors: this.changeLineColor(this.mode),
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
          "57",
          "59",
          "55",
          "65",
          "67",
          "66",
          "66",
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
      return ["#025998", "#0594E6", "#51C4F4", "#0EABF1", "#0679BA"];
    } else if (mode === 'light') {
      return ["#025998", "#0594E6", "#51C4F4", "#0EABF1", "#0679BA"];
    } else if (mode === 'orange') {
      return ['#BE3417', '#FE552D', "#FFBF32", "#FE9627", "#FE6D1F"];
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


