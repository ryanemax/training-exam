import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// Http Import
// HTTP for angular 5
import { HttpClientModule } from '@angular/common/http';
// HTTP for angular 4
import { HttpModule } from '@angular/http';
// end of Http Import
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    // Http Import
    // HTTP for angular 5
    HttpClientModule,
    // HTTP for angular 4
    HttpModule,
    // end of Http Import
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
