import {Component, OnDestroy} from '@angular/core';
import {ThemesService} from '../../services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
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
}

