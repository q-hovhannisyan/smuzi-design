import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemesService} from '../../services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy, OnInit {
  public mode = '';
  public subscription;

  constructor(private service: ThemesService) {
    this.mode = service.name;
    this.subscription = service.nameChange.subscribe((value) => {
      this.mode = value;
    });
    const theme = localStorage.getItem('theme-mode');
    if (theme) {
      this.service.change(theme);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeTheme(mode) {
    this.mode = mode;
    this.service.change(mode);
    localStorage.setItem('theme-mode', mode.toString());
  }
  ngOnInit() {
    if ('theme-mode'in localStorage) {
    } else {
      localStorage.setItem('theme-mode', 'light');
    }
    const startMode = localStorage.getItem('theme-mode');
    if (startMode) {
      this.service.change(startMode);
    }
  }
}

