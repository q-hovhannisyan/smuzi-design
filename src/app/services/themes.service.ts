import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  name: any;

  nameChange: Subject<string> = new Subject<string>();
  constructor() {
  }
  change(name){
    this.name = name;
    this.nameChange.next(this.name);
  }
}
