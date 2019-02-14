import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';

import { DataSource } from '@angular/cdk/table';
import { DrugService } from "../_service";
import { Drug } from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: DrugDataSource | null;
  drug: Drug[] = [];

  constructor(private drugService: DrugService) { }

  ngOnInit() {
    this.dataSource = new DrugDataSource(this.drugService);
  }

}

export class DrugDataSource extends DataSource<Drug> {

  constructor(private drugService: DrugService) { super() }

  subject: BehaviorSubject<Drug[]> = new BehaviorSubject<Drug[]>([]);

  connect(): Observable<Drug[]> {

    this.drugService.getDrugs()
      .then(res => {
        this.subject.next(res);
      });
    return Observable.merge(this.subject)
  }

  disconnect() {
    this.subject.complete();
    this.subject.observers = [];
  }

}
