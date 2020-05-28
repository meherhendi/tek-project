import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateEditorComponent } from './date-editor.component';
//import { BsDatepickerModule } from "ngx-bootstrap/datepicke";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        DateEditorComponent
    ],
    exports: [DateEditorComponent]
})
export class DateEditorModule {
    static forRoot(): ModuleWithProviders<DateEditorModule> {
        return {
            ngModule: DateEditorModule,
        }
    }
}