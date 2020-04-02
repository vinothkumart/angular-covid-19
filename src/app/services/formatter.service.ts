import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {

  constructor() { }

  number(num: number) {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  date(dateString: string) {
    let myMoment: moment.Moment = moment(dateString);

    return myMoment.fromNow();
  }

}