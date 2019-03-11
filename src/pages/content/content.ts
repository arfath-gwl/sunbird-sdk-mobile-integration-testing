import {Component, Inject, OnDestroy} from '@angular/core';
import {
  ChildContentRequest,
  ContentDetailRequest,
  ContentFeedbackService,
  ContentRequest,
  ContentService,
  EventNamespace,
  EventsBusService
} from 'sunbird-sdk';
import {Subscription} from 'rxjs/Subscription';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova;

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage implements OnDestroy {

  private eventsSubscription: Subscription;

  constructor(
    @Inject('CONTENT_SERVICE') private contentService: ContentService,
    @Inject('EVENTS_BUS_SERVICE') private eventsBusService: EventsBusService,
    @Inject('CONTENT_FEEDBACK_SERVICE') private contentFeedbackService: ContentFeedbackService) {
    this.eventsSubscription = this.eventsBusService
      .events(EventNamespace.DOWNLOADS)
      .do((e) => console.log(e))
      .subscribe() as any;
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  getContentDetails() {
    const request: ContentDetailRequest = {
      contentId: 'do_21269736318051123211983'
    };
    this.contentService.getContentDetails(request).subscribe((val) => {
      console.log('Successfully getContentDetails--  ', val);
    }, err => {
      console.log('error in getContentDetails--  ', err);
    })
  }

  getContent() {
    const request: ContentRequest = {
      uid: 'ec187ddf-7386-4c02-bd18-4b2550a817f2',
      contentTypes: [],
      audience: [],
      pragma: []
    };
    this.contentService.getContents(request).subscribe((val) => {
      console.log('successfully getContent--  ', val);
    }, err => {
      console.log('error in getContent -- ', err);
    })
  }

  getChildContentData() {
    const req: ChildContentRequest = {
      contentId: "do_2122162576275701761294",
      hierarchyInfo: [],
      level: 0
    };
    this.contentService.getChildContents(req).subscribe((val) => {
      console.log('successfully getChildContents--  ', val);
    }, err => {
      console.log('error in getChildContents--  ', err);
    })
  }

  // searchContentData() {
  //   const request: ContentSearchCriteria = {
  //     query: '',
  //     contentTypes: [''],
  //     facets: [''],
  //     audience: [''],
  //     mode: '',
  //     framework: '',
  //     languageCode: '',
  //     facetFilters: ,
  //     impliedFilters: '',
  //     sortCriteria: '',
  //     searchType: ''
  //   };
  //   this.contentService.searchContent(request).subscribe(success => {
  //     console.log('successfully searchedContent--  ', success);
  //   }, error => {
  //     console.log('error in searchContent -- ', error);
  //   })
  // }

  deleteContent() {
    const arg = {
      contentDeleteList: [
        {
          contentId: "do_2122162576275701761294",
          isChildContent: true
        }
      ]
    }
    this.contentService.deleteContent(arg).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  prevContentData() {
    const hierarchyInfo = [];
    this.contentService.prevContent(hierarchyInfo, 'content').subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })

  }

  nextContentData() {
    const hierarchyInfo = [];
    this.contentService.nextContent(hierarchyInfo, 'next_content').subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  importEcarFile() {

  }

  importContent() {
    this.contentService.importContent({
      contentImportArray: [{
        isChildContent: false,
        destinationFolder: cordova.file.externalDataDirectory,
        contentId: 'do_21264270761184460811673'
      }, {
        isChildContent: false,
        destinationFolder: cordova.file.externalDataDirectory,
        contentId: 'do_2124339505053450241746'
      }, {
        isChildContent: false,
        destinationFolder: cordova.file.externalDataDirectory,
        contentId: 'do_212296658391777280113'
      }],
      contentStatusArray: []
    }).subscribe((e) => {
      console.log(e);
    })
  }

  subscribeForImportStatus() {

  }

  cancelImportContent() {


  }

  exportContentData() {
    const args = {
      exportedFilePath: ''
    }
  }

  getStateDownload() {

  }

  cancelDownloadFile() {

  }

  getFeedback() {
    const args = {
      uid: 'ec187ddf-7386-4c02-bd18-4b2550a817f2',
      contentId: "do_2122162576275701761294"
    }
    this.contentFeedbackService.getFeedback(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  setFeedbackContent() {
    const args = {
      contentId: 'do_2122162576275701761294',
      rating: 1,
      comments: '',
      createdAt: 2,
      stageId: '',
      contentVersion: ''
    }
    this.contentFeedbackService.sendFeedback(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

}
