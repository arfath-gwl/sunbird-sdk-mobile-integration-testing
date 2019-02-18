import {Component, Inject} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContentService, ContentFeedbackService} from 'sunbird-sdk';

/**
 * Generated class for the ContentPage page.
  *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject('CONTENT_SERVICE') private contentService: ContentService,
              @Inject('CONTENT_FEEDBACK_SERVICE') private contentFeedbackService: ContentFeedbackService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }
  contentDetails(){
    const args = {
      contentId: "do_2122162576275701761294"
    }
    this.contentService.getContentDetails(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  getContent(){
    const args ={
      uid: 'ec187ddf-7386-4c02-bd18-4b2550a817f2',
      contentTypes: [],
      audience: [],
      pragma: []
    }
    this.contentService.getContents(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  getChildContentData(){
    const args = {
      contentId: "do_2122162576275701761294",
      hierarchyInfo: [],
      level: 0
  }
  this.contentService.getChildContents(args).subscribe((val) => {
    console.log(val);
  }, err => {
    console.log(err);
  })
}

  searchContentData(){
   
  }

  deleteAcontent(){
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

  prevContentData(){
    const hierarchyInfo = [];
    this.contentService.prevContent(hierarchyInfo, 'content').subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })

  }

  nextContentData(){
    const hierarchyInfo = [];
    this.contentService.nextContent(hierarchyInfo, 'next_content').subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  importEcarFile(){

  }

  importContentData(){

  }

  subscribeForImportStatus(){

  }

  cancelImportContent(){
   

  }

  exportContentData(){
    const args = {
      exportedFilePath: ''
    }
  }

  getStateDownload(){

  }

  cancelDownloadFile(){

  }

  getFeedback(){
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

  setFeedbackContent(){
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
