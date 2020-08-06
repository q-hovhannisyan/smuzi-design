import {Component, OnInit, OnDestroy} from '@angular/core';
import {ThemesService} from './services/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularDashboard';
  name = '';
  _subscription;

  constructor(private service: ThemesService) {
    this.name = service.name;
    this._subscription = service.nameChange.subscribe((value) => {
      this.name = value;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


}
