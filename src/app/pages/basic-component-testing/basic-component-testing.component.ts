import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-component-testing',
  templateUrl: './basic-component-testing.component.html',
  styleUrls: ['./basic-component-testing.component.scss'],
})
export class BasicComponentTestingComponent implements OnInit {
  testVar01 = 'testStr01';
  testNum01 = 10;

  constructor() {}

  ngOnInit(): void {}

  incrementTestNum01(): void {
    console.log('testNum01 old value: ' + this.testNum01++);
    // this.testNum01++;
    console.log('testNum01 new value: ' + this.testNum01);
  }
}
