
import { Component ,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  inputArray: string = '';
  sortedArray: number[] = [];
  constructor() { 
  }
  ngOnInit(): void {
  }

  sortArray(inputArray: string) {
    of(inputArray)
      .pipe(
        map(input => input.split(',').map(num => +num)),
        map(array => array.sort((a, b) => a - b))
      )
      .subscribe(sortedArray => {
        this.sortedArray = sortedArray;
      });
  }
}
