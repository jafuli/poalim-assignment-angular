import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgFibonacciComponent } from './ng-fibonacci/ng-fibonacci.component';


const routes: Routes = [
  { path: 'fib', component: NgFibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
