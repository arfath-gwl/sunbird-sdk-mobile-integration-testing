import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupService } from 'sunbird-sdk';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export default class GroupPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    @Inject('GROUP_SERVICE') private groupService: GroupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

  createGroups() {
    const query = {
      gid: 'gr-1',
      name: 'mobile',
      syllabus: ['eng', 'phy'],
      createdAt: 2,
      grade: ['A', 'B'],
      gradeValueMap: { "A": 'a' },
      updatedAt: 1,
    }
    this.groupService.createGroup(query).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  deleteGroups() {
    this.groupService.deleteGroup('gr-1').subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }
  updateGroups() {
    const query = {
      gid: 'gr-1',
      name: 'devops',
      syllabus: ['c', 'c++'],
      createdAt: 2,
      grade: ['A', 'B'],
      gradeValueMap: { "A": 'a' },
      updatedAt: 1,
    }
    this.groupService.updateGroup(query).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }
  getAllGroups() {
    const q = {
      uid: 'dfd4f1e5-c475-48c1-a5d2-5d245e684d12'
    }
    this.groupService.getAllGroup(q).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }
  addProfileToGroup(){
    const q = {
      groupId: 'gr-1',
    uidList: ['dfd4f1e5-c475-48c1-a5d2-5d245e684d12', '7695bab4-6188-4557-8e95-31b41de8cf1c', '4bc2e57a-7ba8-46fc-b8f8-c6a867de3b8e']
    }
    this.groupService.addProfilesToGroup(q).subscribe((val) => {
       console.log(val);
    }, err => {
      console.log(err)
    })
  }

}

