import { Action } from '@ngrx/store';


export const DOWNLOAD_TRANSACTION_STARTED = '[TRANSACTION] download transaction started';
export const DOWNLOAD_TRANSACTION_FAIL = '[TRANSACTION] download transaction fail';
export const DOWNLOAD_TRANSACTION_SUCCESS = '[TRANSACTION] download transaction success';

export class DownloadTransactionStarted implements Action {
  readonly type = DOWNLOAD_TRANSACTION_STARTED;
  constructor(public payload: { accountId: string, startDate: Date, endDate: Date }) {}

}

export class DownloadTransactionFail implements Action {
  readonly type = DOWNLOAD_TRANSACTION_FAIL;

  constructor(public payload: { error: string }) {}
}

export class DownloadTransactionSuccess implements Action {
  readonly type = DOWNLOAD_TRANSACTION_SUCCESS;

  
}

// action types:
export type DownloadActions = DownloadTransactionStarted | DownloadTransactionFail | DownloadTransactionSuccess;
