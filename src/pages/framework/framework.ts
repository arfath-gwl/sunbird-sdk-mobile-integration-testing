import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService, HttpRequestType, Request, UpdateQuery, PageAssembleService, PageName, PageAssembleCriteria, DbService, InsertQuery, ReadQuery } from 'sunbird-sdk';

@Component({
  selector: 'page-framework',
  templateUrl: 'framework.html'
})
export class FrameworkPage {

  constructor(
    public navCtrl: NavController,
    @Inject('PAGE_ASSEMBLE_SERVICE') private pageService: PageAssembleService,
    @Inject('DB_SERVICE') private dbService: DbService,
  ) {

  }
  callApi() {
    // this.callUpdateApi();
    this.callReadApi();
    // this.callInsertApi();
  }
  callInsertApi() {
    console.log('callInsertApi called');
    const insertQuery: InsertQuery = {
      modelJson: {
        email: 'abs@abc1.com',
        fullName: 'Guest1',
        phone: 1234567891
      },
      table: 'test'
    };

    this.dbService.insert(insertQuery).subscribe((res: any) => {
      // res = JSON.parse(res);
      console.log('callInsertApi success', res);
    }, (err) => {
      console.log('callInsertApi err', err);
    });
  };
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

  callUpdateApi() {
    console.log('callUpdateApi called');
    const updateQuery: UpdateQuery = {
      table: 'test',
      selection: 'email = ?',
      selectionArgs: ['abs@abc2.com'],
      modelJson : {
        phone: 1234567811,
        fullName: 'changedName'
      }
    };

    this.dbService.update(updateQuery).subscribe((res: any) => {
      // res = JSON.parse(res);
      console.log('callUpdateApi success', res);
    }, (err) => {
      console.log('callUpdateApi err', err);
    });
  };

}
