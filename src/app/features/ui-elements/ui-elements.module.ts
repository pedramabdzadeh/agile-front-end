import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ClickOverDirective} from './directives/click-over.directive';
import {MatIconModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ClickOverDirective],
    imports: [
        CommonModule,
        MatIconModule,
        ReactiveFormsModule 
    ],
    exports: [
        ClickOverDirective,
    ]
})
export class UiElementsModule { }
