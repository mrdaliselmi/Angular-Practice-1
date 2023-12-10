import { Routes } from '@angular/router';
import { CvComponent } from './CvTech/cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowStyleWriterComponent } from './rainbow-style-writer/rainbow-style-writer.component';
import { DetailComponent } from './CvTech/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { MergeScanReduceComponent} from "./CvTech/merge-scan-reduce/merge-scan-reduce.component";
import {ProductsComponent} from "./CvTech/products/products.component";
import {cvDetailResolverResolver} from "./resolvers/cv-detail-resolver.resolver";
import {cvResolver} from "./resolvers/cv.resolver";
import {AddCvComponent} from "./CvTech/add-cv/add-cv.component";
import {addCvDeactivateGuard} from "./guards/add-cv-deactivate.guard";
import {UpdateCvComponent} from "./CvTech/update-cv/update-cv.component";

export const routes: Routes = [
  { path: 'mergescanreduce', component: MergeScanReduceComponent},
  {path: 'products', component: ProductsComponent },
  { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent) },
  { path: 'cv/:id', component: DetailComponent,resolve: {person: cvDetailResolverResolver},data: {preload: true} },
  { path: 'cv', component: CvComponent,resolve: {persons: cvResolver},data: {preload: true} },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'rainbow', component: RainbowStyleWriterComponent },
  { path: 'addCv', component: AddCvComponent, canDeactivate: [addCvDeactivateGuard], data: {preload: true} },
  { path: 'updateCv', component: UpdateCvComponent, data: {preload: true} },
  { path: '', redirectTo: '/cv', pathMatch: 'full',data: {preload: true} },
  { path: '**', redirectTo: '/cv', pathMatch: 'full',data: {preload: true} },
];
