import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormControl} from "@angular/forms";
import {merge,scan,reduce,Observable} from "rxjs";
@Component({
  selector: 'app-merge-scan-reduce',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './merge-scan-reduce.component.html',
  styleUrl: './merge-scan-reduce.component.css'
})
export class MergeScanReduceComponent {
  constructor() {}
  streamOneValue = new FormControl('');
  streamTwoValue = new FormControl('');

  streamOne$ = this.streamOneValue.valueChanges;
  streamTwo$ = this.streamTwoValue.valueChanges;

  // @ts-ignore
  merge$ = this.streamOne$.pipe(merge(this.streamTwo$));
  // @ts-ignore
  scan$ = this.merge$.pipe(scan((acc, curr) => acc + curr, 0));
  // @ts-ignore
  reduce$ = this.merge$.pipe(reduce((acc, curr) => acc + curr, 0));



}
