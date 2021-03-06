import {Component, Inject} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DbService} from 'sunbird-sdk';

/**
 * Generated class for the DbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-db',
  templateUrl: 'db.html',
})
export class DbPage {

  public entries: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject('DB_SERVICE') private dbService: DbService) {
  }

  ionViewDidLoad() {
  }

  onClicktoCreateDummyTable() {
    this.dbService.execute('CREATE TABLE dummy(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)').subscribe(() => {

    });
  }

  onClicktoCreateDummyEntry() {
    this.dbService.execute('INSERT INTO dummy(name) VALUES("ahmed")').subscribe(() => {

    });
  }

  onClicktoDeleteEntryWithId1() {
    this.dbService.delete({
      table: 'dummy',
      selection: 'id = ? AND name = ?',
      selectionArgs: ['1', 'ahmed']
    }).subscribe(() => {

    });
  }

  onClicktoDeleteAllEntries() {
    this.dbService.execute('DELETE FROM dummy').subscribe(() => {

    });
  }

  onClicktoGetAllEntries() {
    this.dbService.read({table: 'dummy'}).subscribe((v) => {
      console.log(v);
      this.entries = JSON.stringify(v);
    }, (e) => {
      console.log(e);
    })
  }

  onClicktoUpdateEntryWithId5() {
    this.dbService.update({
      table: 'dummy',
      selection: 'id = ?',
      selectionArgs: ['5'],
      modelJson: {name: 'ahmed_updated'}
    });
  }

}
