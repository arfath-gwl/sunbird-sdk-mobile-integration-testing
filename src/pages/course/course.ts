import {Component, Inject} from '@angular/core';
import {CourseService, UnenrollCourseRequest} from 'sunbird-sdk'


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

  constructor(
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
        "status": ["0", "1", "2"]
      }
    }
    this.courseService.getCourseBatches(args).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err)
    })
  }

  getEnrollCourses() {
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
      userId: '8442887c-b03a-43fb-a862-b22d0b0c4956',
      courseId: 'do_2123163551322849281354',
      contentId: 'do_2123163551322849281354',
      batchId: '01232279970878259274'
    }
    this.courseService.enrollCourse(data).subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    })
  }

  unenrollCourse() {
    const request: UnenrollCourseRequest = {
      userId: '8442887c-b03a-43fb-a862-b22d0b0c4956',
      courseId: 'do_2123163551322849281354',
      batchId: '01232279970878259274'
    };
    this.courseService.unenrollCourse(request).subscribe(success => {
      console.log('successfully unEnrolled ---', success);
    }, error => {
      console.log('error in UnEnrolling', error);
    })
  }

}
