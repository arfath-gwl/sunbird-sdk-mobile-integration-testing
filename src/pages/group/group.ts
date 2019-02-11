import {Component, Inject} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GroupService} from 'sunbird-sdk';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  createGroup() {
    const query = {
      gid: '',
      name: 'mobile',
      syllabus: ['eng', 'phy'],
      createdAt: 2,
      grade: ['A', 'B'],
      gradeValueMap: {"A": 'a'},
      updatedAt: 1,
    };

    this.groupService.createGroup(query).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  deleteGroupWithId() {
    this.groupService.deleteGroup('a7e2a30a-c170-4cce-851a-1ddab8f4e19d').subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  updateGroupWithId1() {
    const query = {
      gid: 'ed08d049-0ce6-4f7a-90cc-25a43c4a43d0',
      name: 'devops',
      syllabus: ['c', 'c++'],
      createdAt: 2,
      grade: ['A', 'B'],
      gradeValueMap: {"A": 'a'},
      updatedAt: 1,
    };

    this.groupService.updateGroup(query).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  getAllGroupsWithSpecificUserId() {
    const q = {
      uid: 'dfd4f1e5-c475-48c1-a5d2-5d245e684d12'
    };

    this.groupService.getAllGroups(q).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  getAllGroups() {
    this.groupService.getAllGroups().subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  addProfileToGroupWIthId2() {
    const q = {
      groupId: '22dba91b-e3e5-42d9-92cd-890380206edd',
      uidList: ['2a2390f9-4e46-432e-b495-5b7fe55b3366', 'd7de3607-02cc-490a-96ea-4a9696e43c23', 'a6858041-c159-4b8b-a813-bc5a5e9db8eb']
    };

    this.groupService.addProfilesToGroup(q).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err)
    })
  }

}

