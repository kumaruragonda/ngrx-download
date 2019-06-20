import { TestBed, inject } from '@angular/core/testing';

import { DownloadServiceService } from './download-service.service';

describe('DownloadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadServiceService]
    });
  });

  it('should be created', inject([DownloadServiceService], (service: DownloadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
