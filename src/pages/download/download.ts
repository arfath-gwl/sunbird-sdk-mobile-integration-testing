import {Component, Inject} from '@angular/core';
import {DownloadService} from 'sunbird-sdk';

@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {

  constructor(@Inject('DOWNLOAD_SERVICE') private downloadService: DownloadService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadPage');
  }

  onDownload() {
    this.downloadService.download([{
      downloadUrl: 'https://www.office.xerox.com/latest/SFTBR-04U.PDF',
      identifier: prompt('enter identifier'),
      filename: 'dummy.pdf',
      mimeType: '',
      destinationFolder: ''
    }, {
      downloadUrl: 'https://www.office.xerox.com/latest/SFTBR-04U.PDF',
      identifier: prompt('enter identifier'),
      filename: 'dummy.pdf',
      mimeType: '',
      destinationFolder: ''
    }]).subscribe();
  }

  onCancel() {
    this.downloadService.cancel({
      identifier: prompt('enter identifier'),
    }).subscribe();
  }

  // onResume() {
  //   this.downloadService.resume().subscribe();
  // }

}
