import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Certif } from 'src/app/certification/certif.model' ;
import { AuthService } from 'src/app/auth/auth.service';

import {HttpserviceService} from 'src/app/shared/httpservice.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-certif-details',
  templateUrl: './certif-details.component.html',
  styleUrls: ['./certif-details.component.css']
})


export class CertifDetailsComponent implements OnInit {

  // Input 
  name: string ;
  identifier : string;
  //loadedCertif : Certif[] = [] ;
  currentJustify = 'fill';
  certif : Certif = new Certif("",null,"","",[],"","",[],[]) ;
  recommended : object[];

  
  constructor(private router : Router ,
    private http: HttpClient , 
    private route : ActivatedRoute ,
    public authenticationService: AuthService ,
    private HttpService: HttpserviceService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
        };
      }

  
  ngOnInit() { 
    this.identifier = this.route.snapshot.params['identifier'];
    this.http.get('https://ng-prototype-10c50.firebaseio.com/posts.json')
    .pipe(
      map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty((key))) {
            postsArray.push({...responseData[key],id:key});
            
          }
        }
        //console.log(postsArray);
        return postsArray;
        })
      ).pipe(map( array => {
        return array.find(element => element.name === this.identifier) ;
    
    }))
      .subscribe(posts => { //console.log('inside subscribe',posts) ;
          this.certif = posts ;
          //console.log ('certif inside subscribe', this.certif.name);
        } )

        //console.log ('certif outside susbscribe',this.certif);
        //console.log(this.identifier);
        this.name = this.identifier ;

        this.get_similar_certif();
  }



  ngOnDestroy(){}
  
  white_test_cliked() {
    this.router.navigate(['/scheduler',this.identifier])
  }

  get_similar_certif() {
    this.HttpService.get_recommended_certif(this.identifier).subscribe(
      data => { this.recommended = data[0] ;
        console.log("this.recommended: ",this.recommended)
        console.log("data: ",data);
        console.log("data[0]: ",data[0]);
        console.log("data inside object: ",data[0][0].name);
        // this.recommended = Object.values(Object.values(data)[0]);
        // console.log("this.recommended : ",this.recommended);
        // console.log("element search",this.recommended.find(element => element === this.certif.name))
        // console.log("loaded certif",this.certif)
        // console.log("common-function: ",this.findCommonElement(this.recommended,this.loadedCertif))
        //  console.log("data inside subscription: ",data);
        //  console.log("element search",data.find(element => element[0] === this.certif.name))
        //  console.log("first element: ",data.entries() )
        //  console.log("type of first element :",typeof(data.values))
        //  console.log("object.values :",Object.values(Object.values(data)[0]))

        },
      err => console.error(err),
      () => {console.log('done loading similar certif') ;
            console.log("finished loading: ",this.recommended) 
            console.log("")
          }
      );
      
  }


  sampleClick(){}
  /*
      console.log("you clicked me!");
      console.log(this.selectedTypeahead);
      console.log(this.name)
  }*/
  cliked(){
    console.log(this.recommended);
  }
}