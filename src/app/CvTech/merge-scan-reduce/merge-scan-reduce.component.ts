import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { merge, scan, reduce, map, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-merge-scan-reduce',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './merge-scan-reduce.component.html',
  styleUrl: './merge-scan-reduce.component.css',
})
export class MergeScanReduceComponent {
  constructor() {}
  streamOneValue = new FormControl('');
  streamTwoValue = new FormControl('');

  subjectOne = new Subject<void | null>();
  subjectTwo = new Subject<void | null>();

  // @ts-ignore
  streamOne$ = this.streamOneValue.valueChanges.pipe(map((value) => +value), takeUntil(this.subjectOne));
  // @ts-ignore
  streamTwo$ = this.streamTwoValue.valueChanges.pipe(map((value) => +value), takeUntil(this.subjectTwo));

  mergeValue: unknown = 0;
  scanValue: number = 0;
  reduceValue: number = 0;

  merge$ = merge(this.streamOne$, this.streamTwo$);

  scan$ = this.merge$.pipe(scan((acc: number, curr: number) => acc + curr));
  reduce$ = this.merge$.pipe(
    takeUntil(this.subjectOne),
    takeUntil(this.subjectTwo),
    reduce((acc: number, curr: number) => acc + curr)
  );
  mergeSubscribe = this.merge$.subscribe((value) => (this.mergeValue = value));
  scanSubscribe = this.scan$.subscribe((value) => (this.scanValue = value));
  reduceSubscribe = this.reduce$.subscribe((value) => (this.reduceValue = value));

  terminateOne($event: Event) {
    this.subjectOne.next(null);
    this.subjectOne.complete();
  }

  terminateTwo($event: Event) {
    this.subjectTwo.next(null);
    this.subjectTwo.complete();
  }
}
