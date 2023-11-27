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

export const routes: Routes = [
  { path: 'mergescanreduce', component: MergeScanReduceComponent},
  {path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cv/:id', component: DetailComponent,resolve: {person: cvDetailResolverResolver} },
  { path: 'cv', component: CvComponent,resolve: {persons: cvResolver} },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'rainbow', component: RainbowStyleWriterComponent },
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  { path: '**', redirectTo: '/cv', pathMatch: 'full' },
];
