import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, DownloadStatus } from './store/reducers/download.reducer';
import { DownloadTransactionStarted } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private sharedStore: Store<State>){

  }

  download(){
    console.log("inside download method ")
    const accountId = '123';
    const startDate = new Date();
    const endDate = new Date();
    this.sharedStore.dispatch(new DownloadTransactionStarted({accountId, startDate, endDate}));
  }
}
