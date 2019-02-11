import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageAssembleService, PageName } from 'sunbird-sdk';

/**
 * Generated class for the PageServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-page-service',
  templateUrl: 'page-service.html',
})
export class PageServicePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject('PAGE_ASSEMBLE_SERVICE') private pageAssembleService: PageAssembleService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageServicePage');
  }
  getPageAssemble(){
    const args = {
      name: PageName.RESOURCE,
      source: "web",
      filters: {
        gradeLevel: [
          "Grade 1"
        ],
        
        language: [
          "Hindi"
        ],
        contentType: [
          "Story",
          "Worksheet",
          "Collection",
          "Game"
        ],
      }
    }
   this.pageAssembleService.getPageAssemble(args).subscribe((val) => {
     console.log(val);
   }, err => {
     console.log("error:",err);
   })
  }

}
