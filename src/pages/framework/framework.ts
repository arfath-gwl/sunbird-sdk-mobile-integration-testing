import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService, HttpRequestType, Request, UpdateQuery, PageAssembleService, PageName,
   PageAssembleCriteria, DbService, InsertQuery, ReadQuery, FrameworkService,
    ChannelDetailsRequest, FrameworkDetailsRequest } from 'sunbird-sdk';
import { File } from '@ionic-native/file';
@Component({
  selector: 'page-framework',
  templateUrl: 'framework.html'
})
export class FrameworkPage {

  constructor(
    public navCtrl: NavController,
    @Inject('PAGE_ASSEMBLE_SERVICE') private pageService: PageAssembleService,
    @Inject('DB_SERVICE') private dbService: DbService,
    @Inject('FRAMEWORK_SERVICE') private frameworkService: FrameworkService,
    private file: File
  ) {

  }
  ionViewDidLoad(){
    console.log(this.file);
    this.file.checkDir(this.file.applicationDirectory, 'www/assets/data/channel').then(file => 
      console.log('Directory exists')
   ).catch(err => console.log('Directory doesnt exist'));

  }
  
  getChannelDetails() {
    console.log('in getChanneleDetails');
    const channelDetailsRequest: ChannelDetailsRequest = {
      channelId : 'b00bc992ef25f1a9a8d63291e20efc8d'
    }
    this.frameworkService.getChannelDetails(channelDetailsRequest).subscribe( res => {
      console.log('getChannelDetails res', res);
    }, err => {
      console.log('err', err);
    })
  }

  getFrameworkDetaisl() {
    console.log('in getFrameworkDetaisl');
    const frameworkDetailsRequest: FrameworkDetailsRequest = {
      frameworkId : 'ap_k-12_13'
    }
    this.frameworkService.getFrameworkDetails(frameworkDetailsRequest).subscribe( res => {
      console.log('getFrameworkDetaisl res', res);
    }, err => {
      console.log('getFrameworkDetaisl err', err);
    })
  }

  // db.read(readQuery.distinct!!,
  //     readQuery.table,
  //     readQuery.columns!,
  //     readQuery.selection!,
  //     readQuery.selectionArgs!,
  //     readQuery.groupBy!,
  //     readQuery.having!!,
  //     readQuery.orderBy!!,
  //     readQuery.limit!! + '', (json: any[]) => {
  //         observable.next(json);
  //         observable.complete();
  //     }, (error: string) => {
  //         observable.error(error);
  //     });

  callReadApi() {
    console.log('callReadApi called');
    const readQuery: ReadQuery = {
      table: 'test',
      // selection: 'email = ?',
      // selectionArgs: ['abs@abc2.com'],
      // orderBy: 'email',
      groupBy: 'email'
    };

    this.dbService.read(readQuery).subscribe((res: any) => {
      // res = JSON.parse(res);
      console.log('callreadAPI success', res);
    }, (err) => {
      console.log('callreadAPI err', err);
    });
  };

  

}
