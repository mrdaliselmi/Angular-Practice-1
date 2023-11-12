import { Routes } from '@angular/router';
import { CvComponent } from './CvTech/cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowStyleWriterComponent } from './rainbow-style-writer/rainbow-style-writer.component';
import { DetailComponent } from './CvTech/detail/detail.component';

export const routes: Routes = [
    {path: 'cv/:id', component: DetailComponent},
    { path: 'cv', component: CvComponent },
    {path: 'mini-word', component: MiniWordComponent},
    {path: 'rainbow', component: RainbowStyleWriterComponent},
    {path: '', redirectTo: '/cv', pathMatch: 'full'},
    {path: '**', redirectTo: '/cv', pathMatch: 'full'}
];