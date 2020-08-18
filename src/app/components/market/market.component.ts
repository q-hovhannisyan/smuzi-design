import {Component, OnDestroy, ViewChild, OnInit} from '@angular/core';
import { ThemesService } from '../../services/themes.service';
import { HttpClient } from '@angular/common/http';

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
  ApexTheme,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
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

export class MarketComponent implements OnDestroy, OnInit {
  @ViewChild('chart') chart: ChartComponent;
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

  public months: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public curYear: any = new Date().getFullYear();
  public curMonth: any = new Date().getMonth();
  public arr: any = [];

  constructor(private service: ThemesService, private http: HttpClient) {
    this.mode = service.name;
    this.subscription = service.nameChange.subscribe((value) => {
      this.mode = value;
      this.updateTheme();
    });
    this.updateTheme();
  }
  fillArr(dc){
    for(let i = 0; i < dc; i++)
    {
      this.arr.push(Math.floor(Math.random() * 100));
    }
  }
  MonthInfo(month, year){
    const firstDay    = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    return [firstDay, daysInMonth];
  }
  addMonth(k)
  {
    const month       = this.curMonth;
    const monthDiv    = document.getElementsByClassName('month')[k];
    monthDiv.getElementsByClassName('monthname')[0].innerHTML = this.months[month % 12] + '/' + this.curYear;
    const days        = monthDiv.getElementsByClassName('day');
    const fd          = this.MonthInfo(month, this.curYear)[0];
    const daysInMonth = this.MonthInfo(month, this.curYear)[1];
    this.fillArr(daysInMonth);
    for (let i = 0; i < 42; i++) {
      if (i < daysInMonth + fd && i >= fd){
        days[i].childNodes[1].textContent = JSON.stringify(i - fd + 1);
        days[i].childNodes[0].textContent = this.arr[i - fd];
        (<HTMLElement> days[i]).style.backgroundColor = 'rgb(' + '255, 255, 255' + ', ' + ((50 - this.arr[i - fd]) > 0 ? (50 - (this.arr[i - fd])) : 0) / 100 + ')';
      }
      else{
        days[i].classList.add('empty');
      }

    }
    if(this.curMonth >= 11)
    {
      this.curYear++;
    }
    this.curMonth++;
    this.curMonth %= 12;
  }
  ngOnInit() {
    this.addMonth(0);
    this.addMonth(1);
    this.addMonth(2);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  updateTheme() {
    this.chartOptions = {
      series: [
        {
          name: 'Hotel A',
          data: [32, 27, 108, 33, 106, 96, 98]
        },
        {
          name: 'Hotel B',
          data: [103, 75, 61, 77, 87, 88, 68],
        },
        {
          name: 'Hotel C',
          data: [33, 59, 59, 28, 86, 60, 120]
        },
        {
          name: 'Hotel D',
          data: [51, 112, 33, 58, 117, 60, 91]
        },
        {
          name: 'Hotel E',
          data: [45, 30, 21, 42, 43, 78, 38],
        }
      ],
      chart: {
        height: 250,
        width: '100%',
        type: 'line',
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
        curve: 'straight',
        dashArray: [0, 0, 0]
      },
      title: {
        text: 'COMPARISON CHART',
        align: 'left',
        offsetY: 30,
        offsetX: 10,
        style: {
          fontSize: '18px',
          fontWeight: '800',
          fontFamily: 'Roboto',
          color: this.changeColor(this.mode)
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
      legend: {
        position: 'top',
        horizontalAlign: 'right',
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
          '57',
          '59',
          '55',
          '65',
          '67',
          '66',
          '66',
        ],
        axisTicks: {
          show: true,
          color: this.changeColor(this.mode)
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
        },
        axisTicks: {
          show: true,
          color: this.changeColor(this.mode)
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          }
        },
        borderColor: '#CCCCCC'
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
      return ['#025998', '#0594E6', '#51C4F4', '#0EABF1', '#0679BA'];
    } else if (mode === 'light') {
      return ['#025998', '#0594E6', '#51C4F4', '#0EABF1', '#0679BA'];
    } else if (mode === 'orange') {
      return ['#BE3417', '#FE552D', '#FFBF32', '#FE9627', '#FE6D1F'];
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


