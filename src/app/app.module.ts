import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {NgbTabsetModule, NgbDatepicker, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AuthGardGuard } from './auth/auth-gard.guard';
import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Platform } from '@angular/cdk/platform';
import {InputEditorModule , TextAreaEditorModule} from '../../lib/index';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationComponent } from './certification/certification.component';
import { CertifDetailsComponent } from './certification/certif-details/certif-details.component';
import { CertifFormsComponent } from './certification/certif-forms/certif-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageUrlComponent } from './certification/certif-forms/image-url/image-url.component';
import { SectionsComponent } from './certification/certif-forms/sections/sections.component';
import { RouterModule, Routes } from '@angular/router';
import { DropzoneDirective } from './certification/certif-forms/uploader/dropzone.directive';
import { UploaderComponent } from './certification/certif-forms/uploader/uploader.component';
import { UploadTaskComponent } from './certification/certif-forms/uploader/upload-task/upload-task.component';
import { AuthComponent } from './auth/auth.component';
import { AngularFireStorage } from '@angular/fire/storage/storage';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule , NbChatModule , NbSpinnerModule ,
        NbAlertModule, NbIconModule, NbCheckboxModule , NbInputModule , 
        NbActionsModule , NbUserModule , NbContextMenuModule , NbSearchModule , NbDatepickerModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TestComponent } from './test/test.component';
import { EditableComponent } from './test/editable/editable.component';
import { CheckboxComponent } from './test/checkbox/checkbox.component';
import { EditModeDirective } from './test/editable/edit-mode.directive';
import { EditableOnEnterDirective } from './test/editable/editable-on-enter.directive';
import { ViewModeDirective } from './test/editable/view-mode.directive';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { EditInputComponent } from './inline-edit/edit-input/edit-input.component';
import { AutofocusDirective } from './inline-edit/autofocus.directive';
import { Test2Component } from './test2/test2.component';

  //const redirectLoggedInToform = () => redirectLoggedInTo(['form']);
  const appRoutes : Routes = [
    { path: '' , component : CertificationComponent  } ,
    { path: 'certifdetails' , component : CertifDetailsComponent } ,
    { path: 'certifdetails/:identifier' , component : CertifDetailsComponent } ,
    { path: 'form' , component : CertifFormsComponent} , //, canActivate : [AuthGardGuard]
    { path: 'auth' , component : AuthComponent, /*,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToform}*/} ,
    { path: 'bot' , component : ChatbotComponent } ,
    { path: 'test' , component : TestComponent } ,
    { path: 'inline' , component : EditInputComponent } ,
    { path: 'test2' , component : Test2Component } ,
    { path: 'test2/:identifier' , component : Test2Component } ,
    //{ path: 'scheduler', loadChildren: () => import('./certification/scheduler/scheduler.module').then(m => m.SchedulerModule) },
    { path: 'scheduler/:identifier', loadChildren: () => import('./certification/scheduler/scheduler.module').then(m => m.SchedulerModule) },

  ] ;

@NgModule({
  declarations: [
    AppComponent,
    CertificationComponent,
    
    CertifDetailsComponent,
    
    CertifFormsComponent,
    
    ImageUrlComponent,
    
    SectionsComponent,
    
    DropzoneDirective,
    
    UploaderComponent,
    
    UploadTaskComponent,
    
    AuthComponent,
    
    ChatbotComponent,
    
    TestComponent,
    
    EditableComponent,
    
    CheckboxComponent,
    
    EditModeDirective,
    
    EditableOnEnterDirective,
    
    ViewModeDirective,
    
    InlineEditComponent,
    
    EditInputComponent,
    
    AutofocusDirective,
    
    Test2Component,
    
    

    

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule ,
    AngularFirestoreModule ,
    HttpClientModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule ,
    NgbTabsetModule,
    
    RouterModule.forRoot(appRoutes),
    
    BrowserAnimationsModule,
    
    NbThemeModule.forRoot({ name: 'default' }),
    
    NbLayoutModule,
    
    NbEvaIconsModule ,

    NbChatModule ,

    NbSpinnerModule ,

    NbAlertModule,

    NbIconModule,

    NbCheckboxModule,

    NbInputModule,

    InputEditorModule.forRoot(),

    TextAreaEditorModule.forRoot(),

    NbActionsModule,

    NbUserModule,

    NbContextMenuModule,

    NbSearchModule ,

    Ng2SearchPipeModule,

    FontAwesomeModule,

    NgbDatepickerModule
    
  ],
  providers: [AngularFirestoreModule , AngularFireModule , Platform  ], //AngularFireDatabase
  bootstrap: [AppComponent ]
})
export class AppModule { }
