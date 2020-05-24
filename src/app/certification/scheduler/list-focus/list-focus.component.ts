import {Component, ViewChild , OnInit, Output, EventEmitter, Input} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { CertifService } from 'src/app/certif.service';
import { HttpserviceService } from 'src/app/shared/httpservice.service';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-list-focus',
  templateUrl: './list-focus.component.html',
  styleUrls: ['./list-focus.component.css']
})
export class ListFocusComponent implements OnInit {

  model: any;

  @Input()

  @Output() 
  change: EventEmitter<any> = new EventEmitter<any>();
  @Output() 
  change2: EventEmitter<any> = new EventEmitter<any>();
  //@Output() valueoutput;
  
  
  /*notificationToparent() {
    this.outputToParent.emit(this.model);
  }*/


  constructor(certifService : CertifService , Httpservice : HttpserviceService) { }

  certifService : CertifService ;
  httpservice : HttpserviceService ;

  ngOnInit() {
    this.change.emit(this.model);
    /*this.change.subscribe((emittedVal) => {
      console.log('This is emitted value'+ emittedVal);
    });*/
    //this.certifService.get_certif();
    //this.certifService.test_function();
    //console.log(this.certifService);
    //console.log(this.certifService.test_function());
    //console.log(this.httpservice.testservice());
    console.log(this.httpservice.testservicearray());

  }

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  onChange(newValue) {
    //console.log(newValue);
    //-------  this one works  -------------
    //this.change.emit(newValue); 
    this.change.emit(this.model);
  
    //this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}

doStuff(model) {
  console.log(model);
  this.change2.emit(this.model);
  this.change2.subscribe(x => console.log("change2 event logging: "+x));
}


}