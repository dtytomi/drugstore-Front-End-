import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Drug } from '../_models';
import { DrugsService } from "../_service";

@Component({
  selector: 'app-createdrug',
  template: 
    `<form [formGroup]="drugForm" (ngSubmit)="onSubmit()">
      <div class="form-group row">
        <label for="name" class="col-sm-5 col-form-label">Drug Name</label>
        <div class="col-sm-7">
          <input formControlName="name" type="text" class="form-control" id="name" placeholder="Drug Name" required/>
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-sm-5 col-form-label">Drug Price</label>
        <div class="col-sm-7">
          <input formControlName="price" type="text" class="form-control" id="price" placeholder="Drug Price" required/>
        </div>
      </div>
      <div class="form-group row" >
        <label for="description" class="col-sm-5 col-form-label">Drug Description</label>
        <div class="col-sm-7">
          <input formControlName="description" name="description" type="text" class="form-control" id="description" placeholder="Drug Description" required/>
        </div>
      </div>
      <br />
      <br />
      <div class="row"  mat-dialog-actions>
        <div class="col">
          <button class="btn btn-danger btn-sm btn-block" (click)="onNoClick()"> Cancel </button>
        </div>
        <div class="col">
          <button [disabled]="!drugForm.valid" class="btn btn-outline-success btn-sm btn-block" type="submit"> Submit </button>
        </div>  
      </div>
    </form>`
})
export class CreatedrugComponent implements OnInit {

  drug: Drug[] = [];

  drugForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreatedrugComponent>,
    private drugsService: DrugsService,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit() {
    this.dialogRef.close(this.drugForm.value);
  }

}
