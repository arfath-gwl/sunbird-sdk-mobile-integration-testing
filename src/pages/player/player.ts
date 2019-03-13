import { SunbirdSdk } from 'sunbird-sdk';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { canvasConfig, customConfig } from './config';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import genieservice from './canvas-interface.js';
import { PlayerService } from './player.service';
/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  private win: any = window;
  constructor(public navCtrl: NavController, public navParams: NavParams, private webView: WebView, private playerService: PlayerService) {
    console.log('genieService', genieservice.getCurrentUser());
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    // if (!window.myPosition) {this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    //   window.myPosition = function() {
    //       return navigator.appName.toLowerCase().indexOf("explorer") >= 0 ? { x: window.screenLeft, y: window.screenTop } : { x: window.screenX, y: window.screenY };
    //   };
    // };

  }

  ionViewDidLoad() {
    let that = this;
    let previewElement: HTMLIFrameElement = document.getElementById('preview') as HTMLIFrameElement;
    previewElement.contentWindow['SunbirdSdk'] = SunbirdSdk.instance;
    console.log(previewElement.contentWindow);
    previewElement.onload = function () {
      console.log('previewElement Loaded', previewElement);
      (previewElement['contentWindow'] as any).initializePreview(customConfig);
      //that.playerService.getCurrentUser();
      //console.log("EventBus ==>", window['EventBus'].hasEventListneer());
    }
  }

}
