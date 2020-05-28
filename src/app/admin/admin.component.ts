import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import {HttpserviceService} from 'src/app/shared/httpservice.service'

interface Date{
  day:number;
  month:number;
  year:number
}

interface schedule {
  id:string;
  WT_token : string;
  WT_number : string;
  certif_name : string;
  date:Date;
  accepted:boolean;
}



interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  countries$: Observable<Country[]>;
  filter = new FormControl('');

  schedule_List: schedule[] = [] ;

  constructor(pipe: DecimalPipe,private HttpService: HttpserviceService) { 
    this.countries$ = this.filter.valueChanges.pipe(
    startWith(''),
    map(text => search(text, pipe))
    );}

  ngOnInit() {
    this.get_schedules();
    // this.HttpService.
  }
  ngOnDestroy(){}

  get_schedules(){
    this.HttpService.get_Schedule_WhiteTest().subscribe(
      (response) => {
        console.log(response),
        this.schedule_List = response , 
        console.log("schedule list: ",this.schedule_List)},
      (error) => console.log(error)
    );
  }

  Accept_Deny_Buttons(id:string,decision:boolean){
    // console.log(this.schedule_List.map(function(e) { return e.accepted=decision; }));
    this.schedule_List
    .map(function(e) {
      if (e.id==id)
       return e.accepted=decision 
    })

    this.HttpService.Accept_Deny_schedule_request(id,decision)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );
  }

  button_click(){}
  
}
