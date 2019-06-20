import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DownloadService {

  // private _baseUrl: string = 'http://localhost:3000/api/downloadCsv';
  private _baseUrl: string = 'http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2UserConnectorSample.csv';
  constructor(private http: HttpClient) { }

  downloadFile(payload: { accountId: string, startDate: Date, endDate: Date }): Observable<Blob> {
    const headers = new HttpHeaders();
    headers.append('responseType', 'blob')
    return this.http.get(this._baseUrl, {
      responseType: "blob"
    }); 
  }


}
