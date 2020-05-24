import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Certif } from './certification/certif.model';
import { SchedulerModule } from './certification/scheduler/scheduler.module';


@Injectable()/*{
  providedIn: 'root' //'root'
})*/
export class CertifService {
  certif : Certif[];

  constructor(private http: HttpClient ) { }

  get_certif() {
    this.http.get('https://ng-prototype-10c50.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty((key))) {
              postsArray.push({ ...responseData[key], id: key });

            }
          }
          console.log(postsArray);
          return postsArray;
        })
      )//.pipe(map(array => {
       // return array.find(element => element.name === this.identifier);

      //}))
      .subscribe(posts => {
        console.log('inside subscribe', posts);
        this.certif = posts;
        //console.log('certif inside subscribe', this.certif.name);
        console.log('certif inside subscribe', this.certif);
      })
  }

  test_function() {
    console.log("service works !")
  }
}
