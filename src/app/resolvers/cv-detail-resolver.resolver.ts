import { ResolveFn } from '@angular/router';
import {Person} from "../models/person.model";
import {inject} from "@angular/core";
import {CvService} from "../CvTech/services/cv.service";

export const cvDetailResolverResolver: ResolveFn<any> =
  (route, state) => {
    return inject(CvService).getPersonById(+route.paramMap.get('id')!);
}
