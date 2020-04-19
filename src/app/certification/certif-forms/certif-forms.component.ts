
import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';

import {FormGroup, FormControl ,Validators, FormArray, NgForm,FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-certif-forms',
  templateUrl: './certif-forms.component.html',
  styleUrls: ['./certif-forms.component.css']
})
export class CertifFormsComponent implements OnInit {
  
  CertifForm: FormGroup ;
  //todos$: AngularFireList<any[]>;
  imgSrc: string;
  selectedImage: any = null;
  url;
  imageDetailList: AngularFireList<any>;

  currentJustify = 'fill';
  

  public checkboxGroupForm: FormGroup;

  public testsections : Array<string | boolean>


  constructor(/*private storage: AngularFireStorage , *//*private storage: AngularFireStorage*/ private formBuilder: FormBuilder , private http: HttpClient , private router: Router , public authenticationService: AuthService ) { } //, private af: AngularFireDatabase

  ngOnInit() {
    this.CertifForm= new FormGroup({
      //'certif_general_info' : new FormGroup({
        'name' : new FormControl (null,[Validators.required]),
        'Description' : new FormControl (null, Validators.required),
        'Purpose' : new FormControl (null, Validators.required),
        'passing_info' : new FormControl (null, Validators.required),
        'imagePath' : new FormControl(null , Validators.required ),
        'Chapters' : new FormControl(null , Validators.required),
        'official-link' : new FormControl(null, Validators.required),
        'tek-up-link' : new FormControl(),
      //}),
      //'cerif_our_info' : new FormGroup ({
        'rating' : new FormControl(),
        'Related_Certif' : new FormControl(),//new FormArray([]),
      //    }),
      'sectionstest' : new FormGroup({
          'security' : new FormControl(),
          'GL' : new FormControl(),
          'Data_science' : new FormControl(),
          'Web_Mobile' : new FormControl()
      })
    });

    

  

    //this.af.collection('posts').valueChanges().subscribe(val => console.log(val));


    //this.CertifForm.valueChanges.subscribe((status) => console.log(status));
    
    /**this.CertifForm = this.formBuilder.group({
      left: false,
      middle: false,
      right: false
    });**/
  }

  /**onSubmit(){
    console.log(this.onSubmit);
  }**/

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }
  /** 
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }*/
  /*
  uploadfile(file) { //formValue
    if (this.CertifForm.valid) {
      var filePath = '/test' //`${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            //formValue['imageUrl'] = url;
            this.imageDetailList.push(file);
            //this.resetForm();
          })
        })
      ).subscribe();
    }
  }
  */
  /*
 uploadFile(event) {
  const file = event.target.files[0];
  const filePath = 'name-your-file-path-here';
  const ref = this.storage.ref(filePath);
  const task = ref.put(file);
  }
  */

  onSubmit(){
    //console.log(this.CertifForm.value);
    console.log(this.CertifForm.value);
    //console.log(this.CertifForm.get('sectionstest'));
    //var formData: FormData = new FormData();

    //formData.append("name", this.CertifForm.get('name').value);
    //formData.append("avatar", this.CertifForm.get('Description').value);

    
    this.http.post('https://ng-prototype-10c50.firebaseio.com/posts.json', this.CertifForm.value).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)

    
    )
  // this.router.navigate(['/form']);
  //this.todos$ = this.af.list('/todos');
  //this.af.collection('posts').add(this.CertifForm.value);
  //console.log(this.af.collection('posts').snapshotChanges());
  //console.log(this.af.doc('/posts'));
  
  //console.log(this.af.collection('posts'));
  }

  onReturn() {
    this.router.navigate(['']);
  }

  /**addtolist(event){
    /**console.log(event);
    console.log(event.value);
    console.log(event.checked);
    console.log(event.returnValue)
    let testarray : Array<string> = [];

    if (event.target.checked) {
      testarray.push("it works !")
      console.log(testarray);
      //this.testsections.push("works" , true);
      this.testsections.push(event.target.value,true);
      console.log(this.testsections);
    } 
  }**/
}