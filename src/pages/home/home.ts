import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiService, HttpRequestType, Request, PageAssembleService, PageName, PageAssembleCriteria} from 'sunbird-sdk';
import {ProfilePage} from "../profile/profile";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    @Inject('PAGE_ASSEMBLE_SERVICE') private pageService: PageAssembleService,
    ) {

  }
  callPageApi(){
    console.log('callPageApi called');
    const criteria: PageAssembleCriteria = {
      name: PageName.COURSE,
      source: 'web',
      filters: {},
      mode: 'soft'
    };
    this.pageService.getPageAssemble(criteria).subscribe((res: any) => {
      res = JSON.parse(res);
      console.log('getPageAssemble success', res);
    }, (err) => {
      console.log('getPageAssemble err', err);
    });
  };

  goToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }
}
