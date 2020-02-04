import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {ClickOverDirective} from './directives/click-over.directive';
import {MatIconModule} from '@angular/material';
import { StepperModalComponent } from './components/stepper-modal/stepper-modal.component';
import { StepComponent } from './components/stepper-modal/step/step.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [DropdownComponent, ClickOverDirective, StepperModalComponent, StepComponent],
    imports: [
        CommonModule,
        MatIconModule,
        ReactiveFormsModule
    ],
    exports: [
        ClickOverDirective,
        DropdownComponent,
        StepperModalComponent
    ]
})
export class UiElementsModule { }
