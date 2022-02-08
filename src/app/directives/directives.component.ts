import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public red: boolean = true;
  public important: boolean = true;
  public yellow: boolean = true;

  public elementClass: object = {
    "redText": this.red,
    "yellowBackground": this.yellow,
    "important": this.important
  }
  public fontStyles: object = {
    color: "purple",
    fontWeight: "bold",
    "important": this.important
  }
  constructor() { }

  ngOnInit(): void {
  }

}
