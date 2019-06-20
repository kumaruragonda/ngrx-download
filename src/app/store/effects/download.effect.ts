import { DownloadService } from './../../download/download-service.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DOWNLOAD_TRANSACTION_STARTED, DOWNLOAD_TRANSACTION_FAIL,
   DOWNLOAD_TRANSACTION_SUCCESS, DownloadTransactionSuccess, DownloadTransactionFail, DownloadTransactionStarted } from '../actions';

import { map, withLatestFrom, tap, switchMap, catchError } from 'rxjs/operators';
import { State } from '../reducers/download.reducer';
import { environment } from '../../../environments/environment';

import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import { of } from 'rxjs/observable/of'; 
import {saveAs as importedSaveAs} from "file-saver";


@Injectable()
export class UserEffects {
  

  @Effect()
  printWeekScheduleReport$ = this.actions$.ofType(DOWNLOAD_TRANSACTION_STARTED).pipe(
    switchMap((action: DownloadTransactionStarted) => {
      console.log('inside the effect', action.payload);
      return this.downloadService.downloadFile(action.payload).pipe(
        map(blob => importedSaveAs(blob, 'DownloadCsvFileName')),
        map(() => new DownloadTransactionSuccess()),
        // return a Failed action when something went wrong  
        catchError(error => of(new DownloadTransactionFail(error))),
      );
    })
    
  );

  constructor(private actions$: Actions, private domainStore: Store<State>, private downloadService: DownloadService) {}


  

}
