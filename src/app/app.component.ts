import { Component,OnInit } from '@angular/core';
import { Store,Select } from '@ngxs/store';
import { InitLocalization } from './../action/InitLocalization.action';
import { LocalizationState } from '../store/localizationState';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  localizationUrl ='';

  @Select(LocalizationState) localize$: Observable<any>;
  /**
   *
   */
  constructor(private store: Store) {
    
  }
  ngOnInit() {
    this.localize$.subscribe(r=> {
      console.log("from component:",r);
    });
  }
  
  clickHandling(){
    console.log("clickHandling");
    this.store.dispatch(new InitLocalization(this.localizationUrl));
  }
}
