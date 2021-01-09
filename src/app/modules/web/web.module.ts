import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionTopComponent} from './section-top/section-top.component';
import {SectionPropertiesComponent} from './section-properties/section-properties.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {Database} from "../../../assets/properties/database";

@NgModule({
  declarations: [
    SectionTopComponent,
    SectionPropertiesComponent
  ],
  exports: [
    SectionTopComponent,
    SectionPropertiesComponent
  ],
  providers: [
    Database
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class WebModule {
}
