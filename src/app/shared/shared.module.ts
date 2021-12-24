import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { Error404Component } from './components/error404/error404.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [ Error404Component],
  imports: [CommonModule, HttpClientModule, FlexLayoutModule, MaterialModule],
  exports: [HttpClientModule, FlexLayoutModule, Error404Component, MaterialModule],
})
export class SharedModule { }
