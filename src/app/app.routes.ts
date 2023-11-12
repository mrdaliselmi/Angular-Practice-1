import { Routes } from '@angular/router';
import { CvComponent } from './CvTech/cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowStyleWriterComponent } from './rainbow-style-writer/rainbow-style-writer.component';

export const routes: Routes = [
    { path: 'cv', component: CvComponent },
    {path: 'mini-word', component: MiniWordComponent},
    {path: 'rainbow', component: RainbowStyleWriterComponent},
    {path: '', redirectTo: '/cv', pathMatch: 'full'},
    {path: '**', redirectTo: '/cv', pathMatch: 'full'}
];