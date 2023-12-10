import { ResolveFn } from '@angular/router';
import {Person} from "../models/person.model";
import {inject} from "@angular/core";
import {CvService} from "../CvTech/services/cv.service";
import {catchError} from "rxjs";

export const cvDetailResolverResolver: ResolveFn<Person | null> =
  (route, state) => {
    return inject(CvService).getPersonById(+route.paramMap.get('id')!).pipe(
      catchError((error) => {
        console.log('Error fetching user data:', error);
        return [];
      }),
    );
}
