import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http : HttpClient) {}

  testservice() {
    console.log('service works !')
  }

  testservicearray<array>() {
    return 'hello again !';
  }

  get_recommended_certif(certif_displayed) {
    // console.log("service function called !");
    return this.http.get('https://ng-prototype-10c50.firebaseio.com/recommendation/'+certif_displayed+'.json') //https://ng-prototype-10c50.firebaseio.com/recommendation.json
    .pipe(
      map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty((key))) {
            postsArray.push({...responseData[key],id:key});
          }
        }
        console.log("inside get_recommended_certif in http service",postsArray);
        return postsArray;
        })
      )//.pipe(map( array => {
       // return array.find(element => element.name === certif_displayed) ;
    //}))
    }
  
    Post_Schedule_WhiteTest_form(form){
      return this.http.post('https://ng-prototype-10c50.firebaseio.com/schedule.json', form)
    }
}
