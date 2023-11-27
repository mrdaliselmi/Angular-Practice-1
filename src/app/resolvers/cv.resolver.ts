import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CvService} from "../CvTech/services/cv.service";

export const cvResolver: ResolveFn<any> =
  (route, state) => {
    console.log(inject(CvService).getPersons(""))
    return inject(CvService).getPersons("");
  }
