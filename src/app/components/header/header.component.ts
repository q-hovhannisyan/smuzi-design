import {Component, OnChanges, OnInit} from '@angular/core';
import {ThemesService} from '../../services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mode = '';

  constructor(private service: ThemesService) {
    const theme = localStorage.getItem('theme-mode');
    if (theme) {
      this.service.change(theme);
    }
  }

  ngOnInit() {
  }

  changeTheme(mode) {
    this.mode = mode;
    this.service.change(mode);
    localStorage.setItem('theme-mode', mode.toString());
  }
}

