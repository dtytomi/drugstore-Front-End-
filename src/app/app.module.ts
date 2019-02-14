import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { DrugService } from './_service';

import { MatTableModule, MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CdkTableModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DrugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
