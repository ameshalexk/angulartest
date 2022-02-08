import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
  // template: `<p> Hello from test component</p>`,
  // styles: [`
  // p {
  //   color: blue;
  // }
  // `]

})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
