import { Component, OnInit } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-image-url',
  templateUrl: './image-url.component.html',
  styleUrls: ['./image-url.component.css']
})
export class ImageUrlComponent implements OnInit {
  imageToShow:any;
  myURL:any


  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  
onURLinserted() {
      this.getImage(this.myURL).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log("Error occured",error);
      });
}

getImage(imageUrl: string): Observable<Blob> {
    return this.http
        .get<Blob>(imageUrl, { observe: 'body', responseType: 'blob' as 'json' });
}

createImageFromBlob(image: Blob) {
   let reader = new FileReader(); //you need file reader for read blob data to base64 image data.
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result; // here is the result you got from reader
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}

}

