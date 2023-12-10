import { CanDeactivateFn } from '@angular/router';
import {AddCvComponent} from "../CvTech/add-cv/add-cv.component";

export const addCvDeactivateGuard: CanDeactivateFn<AddCvComponent> = (component:AddCvComponent, currentRoute, currentState, nextState) => {
  if (component.addCvForm.dirty){
    return confirm('Are you sure you want to discard your changes?');
  }
  return true;
};
