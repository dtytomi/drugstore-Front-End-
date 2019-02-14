import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Drug } from "../_models";
import { of } from 'rxjs/observable/of';


@Injectable()
export class DrugService {

  drugs: Drug[] = [];

  constructor(
    private http: HttpClient, 
  ) { }
  
  createDrug(drug: Drug) {

    console.log(drug);

    const uri = 'http://localhost:3000/drugs/add';

    return this.http.post<any>(uri, drug)
      .pipe(
        tap(
          data => console.log(data)
        ),
        catchError(error => of(`Bad Promise: ${error}`))
      );
      
  }

  getDrugs() {

    const uri = 'http://localhost:3000/drugs/';

    return this.http.get<any>(uri)
      .toPromise()
      .then(response => response)
      .catch(error => of(`Bad Promise: ${error}`));
  }

  getDrugByID(id: number) {

    const uri = 'http://localhost:8080/api/product';

    return this.http.get(uri + id);
  }

  updateDrug(drug: Drug) {

    const uri = 'http://localhost:8080/update/:id';

    return this.http.put(uri + drug.id, drug);
  }

  deleteProduct(id: number) {

    const uri = 'http://localhost:8080/api/product';

    return this.http.delete(uri + id);
  }


}
