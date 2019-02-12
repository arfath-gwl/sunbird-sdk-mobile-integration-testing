import {Component, Inject} from '@angular/core';
import {FormRequest, FormService} from 'sunbird-sdk';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  constructor(@Inject('FORM_SERVICE') private formService: FormService) {
  }

  startForm() {
    const request: FormRequest = {
      type: 'pageassemble',
      subType: 'course',
      action: 'filter',
      rootOrgId: 'null',
      frameWork: 'null'
    };
    this.formService.getForm(request).subscribe(res => {
      console.log('getForm--', res);
    }, err => {
      console.log('err', err);
    })
  }
}
