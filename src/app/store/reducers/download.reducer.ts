
import {  DOWNLOAD_TRANSACTION_FAIL, DOWNLOAD_TRANSACTION_SUCCESS, DownloadActions, DOWNLOAD_TRANSACTION_STARTED } from '../actions/download.action';

export enum DownloadStatus {
  Ready = 'Ready',
  Requested = 'Requested',
  Started = 'Started',
  Failed = 'Failed',
  Completed = 'Completed'
}

export interface State {
  status: DownloadStatus;
  error: string | null;
  progress: number | null;
}

export const initialState: State = {
  status: DownloadStatus.Ready,
  error: null,
  progress: null
};

export function reducer(state = initialState, action: DownloadActions): State {
  switch (action.type) {
    case DOWNLOAD_TRANSACTION_STARTED: {
      console.log('comae to DOWNLOAD_TRANSACTION_STARTED');

      return { ...state,
        status: DownloadStatus.Started,
        progress: 0 };
    }
    case DOWNLOAD_TRANSACTION_SUCCESS: {
      console.log('comae to DOWNLOAD_TRANSACTION_SUCCESS');
      return {  ...state,
        status: DownloadStatus.Completed,
        progress: 100,
        error: null };
    }
    case DOWNLOAD_TRANSACTION_FAIL: {
      return { ...state,
        status: DownloadStatus.Failed,
        error: action.payload.error,
        progress: null };
    }
  }

  return state;
}


