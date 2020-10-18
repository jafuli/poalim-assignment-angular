import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibServiceService } from '../fib-service.service';

@Component({
  selector: 'app-ng-fibonacci',
  templateUrl: './ng-fibonacci.component.html',
  styleUrls: ['./ng-fibonacci.component.css']
})
export class NgFibonacciComponent implements OnInit {

  input: FormGroup;
  value: string;

  constructor(private service: FibServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.input = this.fb.group({
      index: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
    });
  }

  getFib() {
    const index = this.input.controls.index.value;
    if (this.input.invalid) {
      return;
    }

    this.service.getFibonacciByIndex(index).subscribe(value => {
      console.log(value);
      this.value = value;
    }, err => {
      console.log(err.error);
      this.value = err.error;
    });
    // this.input.controls.index.setValue('');

  }


}
