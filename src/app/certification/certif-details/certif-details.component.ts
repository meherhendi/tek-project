import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Certif } from 'src/app/certification/certif.model' ;
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-certif-details',
  templateUrl: './certif-details.component.html',
  styleUrls: ['./certif-details.component.css']
})
export class CertifDetailsComponent implements OnInit {

  // Input 
  name: string ;
  identifier : string;
  loadedCertif : Certif[] = [] ;
  certif : Certif ;
  currentJustify = 'fill';
  
  constructor(private router : Router ,
    private http: HttpClient , 
    private route : ActivatedRoute ,
    public authenticationService: AuthService
    ) { }

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
        console.log(postsArray);
        return postsArray;
        })
      ).pipe(map( array => {
        return array.find(element => element.name === this.identifier) ;
    
    }))
      .subscribe(posts => {console.log('inside subscribe',posts) ;
          this.certif = posts ;
          console.log ('certif inside subscribe', this.certif.name);
        } )

        console.log ('certif outside susbscribe',this.certif);
        console.log(this.identifier);
        this.name = this.identifier ;

  }  

  sampleClick(){}
  /*
      console.log("you clicked me!");
      console.log(this.selectedTypeahead);
      console.log(this.name)
  }*/
}