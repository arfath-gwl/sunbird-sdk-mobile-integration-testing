import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseService } from 'sunbird-sdk'

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    @Inject('COURSE_SERVICE') private courseService: CourseService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

  batchDetails() {
    const batchData = {
      batchId: 'batch_id'
    }
    this.courseService.getBatchDetails(batchData).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }
  updateContent() {
    const args = {
      userId: 'u_id',
      courseId: 'do_21231295967811174417',
      contentId: 'do_2122162576275701761294',
      batchId: '1',
      status: 2,
      progress: 100,
      result: "pass",
      grade: "B",
      score: "10"
    }
    this.courseService.updateContentState(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err)
    })
  }
  courseBatchs() {
    const args = {
      courseId: 'course_id',
      filters: {
        "courseId": ["do_21252160591216640013060"],
        "status":["0","1", "2"]
      }
    }
    this.courseService.getCourseBatches(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err)
    })
  }
  getEnrollCourses(){
    const args = {
      userId: 'user_id'
    }
    this.courseService.getEnrolledCourses(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }
  enrollCourse() {
    const data = {
      userId: 'u_id',
      courseId: 'c_id',
      contentId: 'content_id',
      batchId: 'SAMPLE_BATCH_ID'
    }
    this.courseService.enrollCourse(data).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

}
