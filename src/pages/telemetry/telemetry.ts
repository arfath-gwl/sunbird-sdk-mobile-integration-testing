import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImpressionType, ImpressionSubtype, PageId, Environment, GenerateImpressionTelemetryAfterMethod} from 'sunbird-sdk';

/**
 * Generated class for the TelemetryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-telemetry',
  templateUrl: 'telemetry.html',
})
export class TelemetryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelemetryPage');
  }
  @GenerateImpressionTelemetryAfterMethod({
    impressionType: ImpressionType.LIST,
    subType: ImpressionSubtype.RATING_POPUP,
    pageId: PageId.LIBRARY,
    env: Environment.LIBRARY
  })
  impressionTelemetryAfter(){
   
  }

}
