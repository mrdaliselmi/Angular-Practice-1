import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormControl, FormsModule} from "@angular/forms";
import {merge, scan, reduce, Observable, map, takeUntil} from "rxjs";
@Component({
  selector: 'app-merge-scan-reduce',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './merge-scan-reduce.component.html',
  styleUrl: './merge-scan-reduce.component.css'
})
export class MergeScanReduceComponent {
  constructor() {}
  streamOneValue = new FormControl('');
  streamTwoValue = new FormControl('');



  // @ts-ignore
  streamOne$ = this.streamOneValue.valueChanges.pipe(map(value => +value));
  // @ts-ignore
  streamTwo$ = this.streamTwoValue.valueChanges.pipe(map(value => +value));




  mergeValue: unknown = "";
  scanValue:number= 0;
  reduceValue:number= 0;

  merge$ = merge(this.streamOne$,this.streamTwo$)

  scan$ = this.merge$.pipe(scan((acc:number,curr:number)=>acc+curr));
  reduce$ = this.merge$.pipe(
    takeUntil(this.streamOne$.pipe(map(value => value === 0))),
    reduce((acc: number, curr: number) => acc + curr)
  );
  mergeSubscribe = this.merge$.subscribe((value)=>this.mergeValue=value);
  scanSubscribe = this.scan$.subscribe((value)=>this.scanValue=value);
  reduceSubscribe = this.reduce$.subscribe((value)=>this.reduceValue=value);


  terminateOne($event: Event) {

  }

  terminateTwo($event: Event) {
  }
}
