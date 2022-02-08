import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name: String = "Amesh";
  public input1: String = "Foo Bar";
  public input2: String = "Foo2 Bar2";
  public input3: Boolean = false;
  public input4: String = "danger";
  public newst: String = "brown";
  public color: String = "red";
  public animal: String = '';


  constructor() { }

  ngOnInit(): void {
  }

  greetings(): String {
    console.log(this.name);
    return "Welcome " + this.name + "!";

  }

  greetings2 = (a: any): String => {
    if (a) {
      this.name = a
    }
    return 'selectionMade: ' + this.name;
  }
  greetings3 = (): Boolean => {
    console.log("hi");
    this.input3 = !this.input3;
    return this.input3;
  }

  many2() {
    console.log(this.greetings2.call(this, this.input1));
    return
  }
  lolas(event: any) {
    console.log(event);
    return;
  }
  lolas2(event: any) {
    console.log(this.name);

    return;
  }
  changeColor(newColor: any): void {
    console.log(newColor)
    console.log(newColor.id)
    this.color = newColor.value;

  }





}
