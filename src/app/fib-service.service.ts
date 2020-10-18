import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibServiceService {

  constructor(private client: HttpClient) { }

  getFibonacciByIndex(index: number) {
    return this.client.get("http://localhost:8080/fib/" + index, { responseType: 'text' });
  }
}
