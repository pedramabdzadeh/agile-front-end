import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSearchComponent } from './components/top-search/top-search.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [TopSearchComponent],
    exports: [
        TopSearchComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
