import { Component, OnInit, Input } from '@angular/core';
import { Certif } from './certif.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  @Input() certif : Certif;
  @Input() index : number ;

  @Input() public title: string;
  @Input() public rating: number;
  @Input() public description: string;

  loadedCertif : Certif[] = [] ;
  observedloadedCertif : Observable<Certif[]>
  searchText;
  faCoffee = faCoffee;


  constructor(private router : Router,private route : ActivatedRoute , private http: HttpClient) {}

  /**
  Certifs : Certif[] = [
    {
      name : 'CCNA' ,
      rating : 4.5 ,
      imagePath : '../assets/CCNA-logo.jpg',
      Description : 'hello'
    } ,

    {
      name : 'CEH' ,
      rating : 4.5 ,
      imagePath : '../assets/CEH-logo.png' ,
      Description : 'hello'
    } ,

    {
      name : 'lpi101' ,
      rating : 4.5 ,
      imagePath : '../assets/LPI-101-logo.gif',
      Description : 'hello'
    } ,

    {
      name : 'CEH' ,
      rating : 4.5 ,
      imagePath : '../assets/CEH-logo.png',
      Description : 'hello'
    }
    **/

    /**
    new Certif('CCNA',4.5,'../assets/CCNA-logo.jpg'),
    new Certif ('CEH',5,'../assets/CEH-logo.png'),
    new Certif('lpi101',3,'../assets/LPI-101-logo.gif')
    **/


    //new Certif('CCNA',4.5,'test_string','../assets/CCNA-logo.jpg',['security','networking']) ,
    /**new Certif('lpi101',3,'test2string','../assets/LPI-101-logo.gif') ,
    new Certif ('CEH',5,'test3string','../assets/CEH-logo.png') ,
    new Certif('CCNA',4.5,'test_string','../assets/CCNA-logo.jpg') ,
    new Certif('lpi101',3,'test2string','../assets/LPI-101-logo.gif') ,
    new Certif ('CEH',5,'test3string','../assets/CEH-logo.png') ,
    new Certif('CCNA',4.5,'test_string','../assets/CCNA-logo.jpg') ,
    new Certif('lpi101',3,'test2string','../assets/LPI-101-logo.gif') ,
    new Certif ('CEH',5,'test3string','../assets/CEH-logo.png')**/
  //] ;
    


  ngOnInit() {
    
    this.fetchposts()
  }

  private fetchposts() {
    this.http.get<{ [key : string] : Certif}>('https://ng-prototype-10c50.firebaseio.com/posts.json').pipe(
      map(responseData => {
        const postsArray :Certif[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty((key))) {
            postsArray.push({...responseData[key],id:key});  
          }

        }
        
        return postsArray;
      })
    )
    .subscribe(posts => {console.log(posts) ;
      this.loadedCertif = posts ;
    //this.loadedPosts = posts ;
    //this.loadedCertif = posts.filter((e) => { return e.name === this.element.name }) ;
    /**console.log(posts.filter((e) => { return e.name === this.element.name }));
    console.log(this.element.name);
    console.log (this.loadedCertif);
    console.log(this.loadedCertif[0].id)
    console.log(this.loadedCertif[0].Description)**/
    //this.MyCertif.name = this.loadedCertif[0].Description ;
    //this.MyCertif.Description = this.loadedCertif[0].Description ;
    });
    


    /**
    for (let o of postsArray) {
      o.pipe(map(myresponse => {
        const oarray = [];
        for (const key in myresponse) {
          if (myresponse.hasOwnProperty((key))) {
            oarray.push({...myresponse[key],id:key});
          }
        }
        return oarray;
      })
    })**/

  }

}


/** {
      title: 'CCNA',
      rating: 4.5,
      description: 'This exam tests a candidate\'s knowledge and skills related to network fundamentals, LAN switching technologies, IPv4 and IPv6 routing technologies, WAN technologies, infrastructure services, infrastructure security, and infrastructure management.'
    },

    {
      title : 'lpi101',
      rating : 4,
      description : 'Candidates should be able to determine and configure fundamental system hardware'
    }
  ] */