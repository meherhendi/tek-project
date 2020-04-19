import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent {


  constructor() { }
  name2 = 'Hello angular inline input';
  cost = 100;
  saveCost(value){
  this.cost=value;
  console.log(this.cost);

  }

  // Input 
  name: string = 'John';
  middle: string = 'D.';
  last:string;

  
 
  sampleClick(){
    console.log('clicked!!');
}

}
